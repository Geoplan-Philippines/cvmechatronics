<?php
/**
 * Plugin Name: CV Mechatronics — Content Form
 * Description: Form-driven authoring for Posts and Projects. Marketing fills in plain fields; the article HTML is generated automatically. A per-post toggle switches to a manual visual editor.
 *
 * How it works:
 *  - Each post/project gets a "Content mode" box: Manual (default) or Form.
 *  - Manual mode leaves content alone (classic visual editor / HTML paste) —
 *    the "Writing checklist" sidebar box (writing-guide.php) is the legend.
 *  - Form mode offers a template choice and plain text fields. On save, the
 *    final HTML is assembled and stored as the post content — so the REST
 *    API and the Next.js frontend need no changes at all.
 *  - The block editor is disabled for these types: it cannot coexist with a
 *    forced form on the same screen.
 */

const CVM_FORM_TYPES = ["post", "project"];
const CVM_FORM_FIELDS = [
    "cvm_intro", "cvm_points", "cvm_quote", "cvm_closing",
    "cvm_s1_h", "cvm_s1_t", "cvm_s2_h", "cvm_s2_t", "cvm_s3_h", "cvm_s3_t",
    "cvm_brief", "cvm_installed", "cvm_detail", "cvm_outcome",
];

/* -------------------------------------------------------------------------
 * Templates: which fields each one uses, and how the HTML is assembled.
 * ---------------------------------------------------------------------- */

function cvm_form_templates(): array {
    return [
        "post" => [
            "article" => [
                "label" => "Article (standard)",
                "fields" => [
                    "cvm_intro"   => ["Intro", "textarea", "1–2 sentences that hook the reader."],
                    "cvm_s1_h"    => ["Section 1 — heading", "text", ""],
                    "cvm_s1_t"    => ["Section 1 — text", "textarea", ""],
                    "cvm_s2_h"    => ["Section 2 — heading", "text", ""],
                    "cvm_s2_t"    => ["Section 2 — text", "textarea", ""],
                    "cvm_s3_h"    => ["Section 3 — heading (optional)", "text", ""],
                    "cvm_s3_t"    => ["Section 3 — text (optional)", "textarea", ""],
                    "cvm_quote"   => ["Pull quote (optional)", "textarea", "One strong sentence, shown highlighted."],
                    "cvm_closing" => ["Closing paragraph (optional)", "textarea", "Usually ends with a call to action."],
                ],
            ],
            "announcement" => [
                "label" => "Announcement (short)",
                "fields" => [
                    "cvm_intro"   => ["Announcement", "textarea", "The news, in one or two short paragraphs."],
                    "cvm_points"  => ["Key points — one per line (optional)", "textarea", ""],
                    "cvm_closing" => ["Closing line (optional)", "textarea", ""],
                ],
            ],
        ],
        "project" => [
            "case_study" => [
                "label" => "Case study",
                "fields" => [
                    "cvm_brief"     => ["The brief", "textarea", "What the client wanted, in plain terms."],
                    "cvm_installed" => ["What we installed — one item per line", "textarea", ""],
                    "cvm_detail"    => ["The detail that made it", "textarea", "The site-specific decision that mattered."],
                    "cvm_outcome"   => ["The outcome (optional)", "textarea", ""],
                ],
            ],
            "showcase" => [
                "label" => "Showcase (gallery-first)",
                "fields" => [
                    "cvm_intro"   => ["Intro", "textarea", "One short paragraph — the gallery carries this one."],
                    "cvm_closing" => ["Closing line (optional)", "textarea", ""],
                ],
            ],
        ],
    ];
}

/* -------------------------------------------------------------------------
 * HTML generation (all input escaped — output is safe by construction).
 * ---------------------------------------------------------------------- */

function cvm_text_to_paragraphs(string $text): string {
    $text = trim($text);
    if ($text === "") return "";
    $out = "";
    foreach (preg_split('/\n\s*\n/', $text) as $block) {
        $out .= "<p>" . nl2br(esc_html(trim($block)), false) . "</p>\n";
    }
    return $out;
}

function cvm_lines_to_list(string $text): string {
    $items = array_values(array_filter(array_map("trim", explode("\n", $text))));
    if (!$items) return "";
    $out = "<ul>\n";
    foreach ($items as $item) {
        $out .= "  <li>" . esc_html($item) . "</li>\n";
    }
    return $out . "</ul>\n";
}

function cvm_generate_content(string $type, string $template, array $v): string {
    $h = "";

    if ($type === "project" && $template === "case_study") {
        $h .= cvm_text_to_paragraphs($v["cvm_brief"] ?? "");
        if (trim($v["cvm_installed"] ?? "") !== "") {
            $h .= "<h2>What we installed</h2>\n" . cvm_lines_to_list($v["cvm_installed"]);
        }
        if (trim($v["cvm_detail"] ?? "") !== "") {
            $h .= "<h2>The detail that made it</h2>\n" . cvm_text_to_paragraphs($v["cvm_detail"]);
        }
        $h .= cvm_text_to_paragraphs($v["cvm_outcome"] ?? "");
    } elseif ($type === "post" && $template === "announcement") {
        $h .= cvm_text_to_paragraphs($v["cvm_intro"] ?? "");
        $h .= cvm_lines_to_list($v["cvm_points"] ?? "");
        $h .= cvm_text_to_paragraphs($v["cvm_closing"] ?? "");
    } elseif ($type === "project" && $template === "showcase") {
        $h .= cvm_text_to_paragraphs($v["cvm_intro"] ?? "");
        $h .= cvm_text_to_paragraphs($v["cvm_closing"] ?? "");
    } else { // post / article
        $h .= cvm_text_to_paragraphs($v["cvm_intro"] ?? "");
        foreach ([1, 2, 3] as $i) {
            $heading = trim($v["cvm_s{$i}_h"] ?? "");
            $text = trim($v["cvm_s{$i}_t"] ?? "");
            if ($heading !== "") $h .= "<h2>" . esc_html($heading) . "</h2>\n";
            if ($text !== "") $h .= cvm_text_to_paragraphs($text);
        }
        if (trim($v["cvm_quote"] ?? "") !== "") {
            $h .= "<blockquote>" . esc_html(trim($v["cvm_quote"])) . "</blockquote>\n";
        }
        $h .= cvm_text_to_paragraphs($v["cvm_closing"] ?? "");
    }

    return $h;
}

/* -------------------------------------------------------------------------
 * Admin: classic editor for these types (the block editor cannot be
 * constrained to a clean form), then the form box itself.
 * ---------------------------------------------------------------------- */

add_filter("use_block_editor_for_post_type", function ($use, $post_type) {
    return in_array($post_type, CVM_FORM_TYPES, true) ? false : $use;
}, 10, 2);

add_action("add_meta_boxes", function () {
    foreach (CVM_FORM_TYPES as $type) {
        add_meta_box(
            "cvm-content-form",
            "Content",
            "cvm_form_metabox_html",
            $type,
            "normal",
            "high"
        );
    }
});

function cvm_form_metabox_html(WP_Post $post): void {
    wp_nonce_field("cvm_form_save", "cvm_form_nonce");

    $type = $post->post_type;
    $templates = cvm_form_templates()[$type];
    $mode = get_post_meta($post->ID, "cvm_mode", true) ?: "manual";
    $current_tpl = get_post_meta($post->ID, "cvm_template", true) ?: array_key_first($templates);
    if (!isset($templates[$current_tpl])) {
        $current_tpl = array_key_first($templates);
    }

    // Avoid a flash of the wrong UI before JS runs.
    if ($mode === "form") {
        echo '<style>#postdivrich{display:none}</style>';
    } else {
        echo '<style>#cvm-form-fields{display:none}</style>';
    }

    // Mode toggle
    echo '<p style="margin:4px 0 12px;">';
    echo '<label style="margin-right:16px;font-weight:600;"><input type="radio" name="cvm_mode" value="manual" ' . checked($mode, "manual", false) . '> Manual <span style="font-weight:400;color:#666;">(default — write freely in the visual editor; the site styles it for you. See the Writing checklist in the sidebar)</span></label>';
    echo '<label style="font-weight:600;"><input type="radio" name="cvm_mode" value="form" ' . checked($mode, "form", false) . '> Form <span style="font-weight:400;color:#666;">(auto layout — fill in plain fields, the article is generated for you)</span></label>';
    echo '</p>';

    echo '<div id="cvm-form-fields">';

    // Template select
    echo '<p><label for="cvm_template" style="font-weight:600;">Template</label><br>';
    echo '<select name="cvm_template" id="cvm_template" style="min-width:240px;">';
    foreach ($templates as $key => $tpl) {
        echo '<option value="' . esc_attr($key) . '" ' . selected($current_tpl, $key, false) . '>' . esc_html($tpl["label"]) . '</option>';
    }
    echo '</select></p>';

    // Fields (union of all templates for this type; JS shows the active set)
    $printed = [];
    foreach ($templates as $tpl_key => $tpl) {
        foreach ($tpl["fields"] as $name => $def) {
            if (isset($printed[$name])) continue;
            $printed[$name] = true;
            [$label, $kind, $help] = $def;
            $in_templates = [];
            foreach ($templates as $k2 => $t2) {
                if (isset($t2["fields"][$name])) $in_templates[] = $k2;
            }
            $value = get_post_meta($post->ID, $name, true);
            echo '<div class="cvm-field" data-tpl="' . esc_attr(implode(" ", $in_templates)) . '" style="margin-bottom:14px;">';
            echo '<label for="' . esc_attr($name) . '" style="font-weight:600;display:block;margin-bottom:4px;">' . esc_html($label) . '</label>';
            if ($kind === "textarea") {
                echo '<textarea name="' . esc_attr($name) . '" id="' . esc_attr($name) . '" rows="4" style="width:100%;">' . esc_textarea($value) . '</textarea>';
            } else {
                echo '<input type="text" name="' . esc_attr($name) . '" id="' . esc_attr($name) . '" value="' . esc_attr($value) . '" style="width:100%;">';
            }
            if ($help !== "") {
                echo '<p class="description" style="margin:4px 0 0;">' . esc_html($help) . '</p>';
            }
            echo '</div>';
        }
    }

    echo '<p class="description" style="border-top:1px solid #ddd;padding-top:10px;">On Publish/Update, these fields are assembled into the final article — nothing else to do. Set the Excerpt, Featured image, Gallery, and Categories/Tags in the side panels as usual.</p>';
    echo '</div>'; // #cvm-form-fields
}

/* JS: instant toggle between form/editor, and per-template field visibility. */
add_action("admin_footer", function () {
    $screen = get_current_screen();
    if (!$screen || $screen->base !== "post" || !in_array($screen->post_type, CVM_FORM_TYPES, true)) return;
    ?>
    <script>
    jQuery(function ($) {
      function applyMode() {
        var form = $('input[name="cvm_mode"]:checked').val() === "form";
        $("#postdivrich").toggle(!form);
        $("#cvm-form-fields").toggle(form);
      }
      function applyTemplate() {
        var tpl = $("#cvm_template").val();
        $(".cvm-field").each(function () {
          $(this).toggle($(this).data("tpl").toString().split(" ").indexOf(tpl) !== -1);
        });
      }
      $('input[name="cvm_mode"]').on("change", applyMode);
      $("#cvm_template").on("change", applyTemplate);
      applyMode();
      applyTemplate();
    });
    </script>
    <?php
});

/* -------------------------------------------------------------------------
 * Save: store the form state as meta; in Form mode, generate the content.
 * wp_insert_post_data runs before the write — no recursion, no extra query.
 * ---------------------------------------------------------------------- */

function cvm_form_request_valid(): bool {
    return isset($_POST["cvm_form_nonce"])
        && wp_verify_nonce($_POST["cvm_form_nonce"], "cvm_form_save")
        && !(defined("DOING_AUTOSAVE") && DOING_AUTOSAVE);
}

add_filter("wp_insert_post_data", function ($data) {
    if (!in_array($data["post_type"], CVM_FORM_TYPES, true)) return $data;
    if (!cvm_form_request_valid()) return $data;
    if (($_POST["cvm_mode"] ?? "manual") !== "form") return $data;

    $values = [];
    foreach (CVM_FORM_FIELDS as $f) {
        $values[$f] = isset($_POST[$f]) ? sanitize_textarea_field(wp_unslash($_POST[$f])) : "";
    }
    $html = cvm_generate_content(
        $data["post_type"],
        sanitize_key($_POST["cvm_template"] ?? ""),
        $values
    );
    // Only overwrite when the form actually produced something — an emptied
    // form must never wipe an existing article.
    if (trim($html) !== "") {
        $data["post_content"] = $html;
    }
    return $data;
}, 10, 1);

add_action("save_post", function ($post_id) {
    if (!cvm_form_request_valid()) return;
    if (!in_array(get_post_type($post_id), CVM_FORM_TYPES, true)) return;
    if (!current_user_can("edit_post", $post_id)) return;

    update_post_meta($post_id, "cvm_mode", sanitize_key($_POST["cvm_mode"] ?? "manual"));
    update_post_meta($post_id, "cvm_template", sanitize_key($_POST["cvm_template"] ?? ""));
    foreach (CVM_FORM_FIELDS as $f) {
        if (isset($_POST[$f])) {
            update_post_meta($post_id, $f, sanitize_textarea_field(wp_unslash($_POST[$f])));
        }
    }
});
