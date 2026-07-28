<?php
/**
 * Plugin Name: CV Mechatronics — Gallery Field
 * Description: Adds a simple "Gallery (1–5 images)" field to Posts and Projects, exposed via the REST API for the headless Next.js frontend.
 *
 * Marketing workflow: type the article body directly in the editor (no HTML
 * needed), then attach 1–5 gallery images here — the same media picker as the
 * Featured Image. The frontend renders them as a fixed-aspect mosaic, so any
 * image size or orientation is cropped neatly and the layout never shifts.
 */

const CVM_GALLERY_META = "gallery_ids";
const CVM_GALLERY_MAX = 5;
const CVM_GALLERY_TYPES = ["post", "project"];

/* Keep only real attachment IDs, capped at the max. */
function cvm_gallery_sanitize_ids($raw): array {
    $ids = array_filter(array_map("intval", (array) $raw));
    $ids = array_filter($ids, function ($id) {
        return get_post_type($id) === "attachment";
    });
    return array_slice(array_values($ids), 0, CVM_GALLERY_MAX);
}

/* 1) Store the gallery as an array of attachment IDs (REST-visible meta). */
add_action("init", function () {
    foreach (CVM_GALLERY_TYPES as $type) {
        register_post_meta($type, CVM_GALLERY_META, [
            "type" => "array",
            "single" => true,
            "default" => [],
            "show_in_rest" => [
                "schema" => ["type" => "array", "items" => ["type" => "integer"]],
            ],
            "sanitize_callback" => "cvm_gallery_sanitize_ids",
            "auth_callback" => function () {
                return current_user_can("edit_posts");
            },
        ]);
    }
});

/* 2) Resolved REST field: ready-to-use image data so the frontend needs no
      extra fetches. Appears as top-level "gallery" on posts and projects. */
add_action("rest_api_init", function () {
    register_rest_field(CVM_GALLERY_TYPES, "gallery", [
        "get_callback" => function ($post) {
            $ids = (array) get_post_meta($post["id"], CVM_GALLERY_META, true);
            $out = [];
            foreach ($ids as $id) {
                // "large" (~1024px) is plenty for the article column and
                // avoids serving multi-MB originals to visitors.
                $img = wp_get_attachment_image_src($id, "large");
                if (!$img) {
                    continue;
                }
                $out[] = [
                    "id" => (int) $id,
                    "src" => $img[0],
                    "width" => (int) $img[1],
                    "height" => (int) $img[2],
                    "alt" => get_post_meta($id, "_wp_attachment_image_alt", true) ?: "",
                ];
            }
            return $out;
        },
    ]);
});

/* 3) The form field in wp-admin. */
add_action("add_meta_boxes", function () {
    foreach (CVM_GALLERY_TYPES as $type) {
        add_meta_box(
            "cvm-gallery",
            "Gallery (1–" . CVM_GALLERY_MAX . " images)",
            "cvm_gallery_metabox_html",
            $type,
            "normal",
            "high"
        );
    }
});

function cvm_gallery_metabox_html($post) {
    wp_nonce_field("cvm_gallery_save", "cvm_gallery_nonce");
    $ids = cvm_gallery_sanitize_ids(get_post_meta($post->ID, CVM_GALLERY_META, true));

    echo '<div id="cvm-gallery-wrap" data-post-id="' . esc_attr($post->ID) . '" data-nonce="' . esc_attr(wp_create_nonce("cvm_gallery_ajax")) . '">';
    echo '<div id="cvm-gallery" style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px;">';
    foreach ($ids as $id) {
        $thumb = wp_get_attachment_image_src($id, "thumbnail");
        if (!$thumb) {
            continue;
        }
        echo '<div class="cvm-gal-item" data-id="' . esc_attr($id) . '" style="position:relative;">';
        echo '<img src="' . esc_url($thumb[0]) . '" style="width:80px;height:80px;object-fit:cover;border-radius:4px;display:block;">';
        echo '<button type="button" class="cvm-gal-remove" aria-label="Remove image" style="position:absolute;top:-6px;right:-6px;background:#a00;color:#fff;border:none;border-radius:50%;width:20px;height:20px;cursor:pointer;line-height:1;">&times;</button>';
        echo '</div>';
    }
    echo '</div>';
    echo '<input type="hidden" id="cvm_gallery_ids" name="cvm_gallery_ids" value="' . esc_attr(implode(",", $ids)) . '">';
    echo '<button type="button" class="button" id="cvm-gallery-add">Add / select images</button> ';
    echo '<span id="cvm-gallery-status" style="color:#008a20;font-weight:600;"></span>';
    echo '<p class="description">1–' . CVM_GALLERY_MAX . ' images, shown as a gallery at the end of the article. Any size or orientation works — the site crops them uniformly. Saved automatically as you add or remove images.</p>';
    echo '</div>';
}

/* 4) Save handler (fallback — the AJAX auto-save below usually fires first). */
add_action("save_post", function ($post_id) {
    if (!isset($_POST["cvm_gallery_nonce"]) || !wp_verify_nonce($_POST["cvm_gallery_nonce"], "cvm_gallery_save")) {
        return;
    }
    if (defined("DOING_AUTOSAVE") && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can("edit_post", $post_id)) {
        return;
    }
    $ids = cvm_gallery_sanitize_ids(explode(",", (string) ($_POST["cvm_gallery_ids"] ?? "")));
    update_post_meta($post_id, CVM_GALLERY_META, $ids);
});

/* 4b) AJAX auto-save — fires the moment images are added/removed, so the
       gallery persists even if the user never clicks Update. */
add_action("wp_ajax_cvm_gallery_save", function () {
    check_ajax_referer("cvm_gallery_ajax", "nonce");
    $post_id = (int) ($_POST["post_id"] ?? 0);
    if (!$post_id || !current_user_can("edit_post", $post_id)) {
        wp_send_json_error(["message" => "forbidden"], 403);
    }
    $ids = cvm_gallery_sanitize_ids(explode(",", (string) ($_POST["ids"] ?? "")));
    update_post_meta($post_id, CVM_GALLERY_META, $ids);
    wp_send_json_success(["ids" => $ids]);
});

/* 5) Media-picker JS, only on post/project edit screens. */
add_action("admin_enqueue_scripts", function ($hook) {
    if (!in_array($hook, ["post.php", "post-new.php"], true)) {
        return;
    }
    $screen = get_current_screen();
    if (!$screen || !in_array($screen->post_type, CVM_GALLERY_TYPES, true)) {
        return;
    }
    wp_enqueue_media();
    wp_add_inline_script("jquery-core", '
jQuery(function ($) {
  var max = ' . CVM_GALLERY_MAX . ';
  var wrap = $("#cvm-gallery-wrap");
  var status = $("#cvm-gallery-status");

  function ids() {
    return $("#cvm_gallery_ids").val().split(",").filter(Boolean);
  }

  function save() {
    status.css("color", "#666").text("Saving…");
    $.post(ajaxurl, {
      action: "cvm_gallery_save",
      nonce: wrap.data("nonce"),
      post_id: wrap.data("post-id"),
      ids: $("#cvm_gallery_ids").val()
    }).done(function () {
      status.css("color", "#008a20").text("Saved ✓");
    }).fail(function () {
      status.css("color", "#a00").text("Not saved — click Update before leaving this page.");
    });
  }

  function render() {
    var list = $("#cvm-gallery").empty();
    ids().forEach(function (id) {
      var item = $("<div class=\"cvm-gal-item\" style=\"position:relative;\"></div>").attr("data-id", id);
      item.append("<img style=\"width:80px;height:80px;object-fit:cover;border-radius:4px;display:block;\">");
      item.append("<button type=\"button\" class=\"cvm-gal-remove\" aria-label=\"Remove image\" style=\"position:absolute;top:-6px;right:-6px;background:#a00;color:#fff;border:none;border-radius:50%;width:20px;height:20px;cursor:pointer;line-height:1;\">&times;</button>");
      list.append(item);
      var att = wp.media.attachment(id);
      att.fetch().then(function () {
        var sizes = att.get("sizes");
        item.find("img").attr("src", sizes && sizes.thumbnail ? sizes.thumbnail.url : att.get("url"));
      });
    });
  }

  $("#cvm-gallery-add").on("click", function (e) {
    e.preventDefault();
    if (ids().length >= max) {
      alert("Maximum " + max + " images.");
      return;
    }
    var frame = wp.media({ title: "Select gallery images", multiple: true, library: { type: "image" } });
    frame.on("select", function () {
      var picked = frame.state().get("selection").map(function (a) { return String(a.id); });
      var merged = ids().concat(picked).filter(function (v, i, a) { return a.indexOf(v) === i; }).slice(0, max);
      $("#cvm_gallery_ids").val(merged.join(","));
      render();
      save();
    });
    frame.open();
  });

  $("#cvm-gallery").on("click", ".cvm-gal-remove", function () {
    var id = String($(this).closest(".cvm-gal-item").data("id"));
    $("#cvm_gallery_ids").val(ids().filter(function (x) { return x !== id; }).join(","));
    render();
    save();
  });
});
');
});
