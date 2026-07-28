<?php
/**
 * Plugin Name: CV Mechatronics — Writing Checklist
 * Description: In-editor cheat sheet for non-technical authors on Posts and Projects: a pre-publish checklist, a legend of what each editor button looks like on the site, and ready-made structure recipes. Rendered as a sidebar meta box — no JS, always visible while writing.
 *
 * The frontend (Next.js) only styles a fixed vocabulary: paragraphs, h2, h3,
 * bold, links, ul/ol, blockquote, images with captions (see .article-content
 * in src/app/globals.css). This box teaches exactly that vocabulary, so
 * anything an author writes in Manual mode renders correctly.
 */

const CVM_GUIDE_TYPES = ["post", "project"];

add_action("add_meta_boxes", function () {
    foreach (CVM_GUIDE_TYPES as $type) {
        add_meta_box(
            "cvm-writing-guide",
            "Writing checklist",
            "cvm_guide_metabox_html",
            $type,
            "side",
            "high"
        );
    }
});

function cvm_guide_metabox_html(WP_Post $post): void {
    $is_project = $post->post_type === "project";

    echo '<p style="margin:0 0 10px;">Write in the editor — the site applies the design automatically. No coding needed.</p>';

    /* ---- Before you publish ------------------------------------------- */
    echo '<p style="font-weight:600;margin:0 0 4px;">Before you publish</p>';
    echo '<ul style="margin:0 0 12px 16px;list-style:disc;">';
    echo '<li><strong>Excerpt</strong> — 1–2 sentences (shown in cards and previews)</li>';
    echo '<li><strong>Featured image</strong> — always set one, and fill in its alt text</li>';
    if ($is_project) {
        echo '<li><strong>Tags</strong> — the systems involved, e.g. <em>Gate Automation</em>, <em>Smart Glass</em> (shown as badges on the site)</li>';
    } else {
        echo '<li><strong>Category</strong> — exactly one of <em>News</em>, <em>Guides</em>, <em>Product Spotlight</em> (any other spelling shows as “News”)</li>';
        echo '<li><strong>Tags</strong> — optional; shown on the article page</li>';
    }
    echo '<li><strong>Gallery</strong> — 1–5 images, any size or orientation (box below the editor)</li>';
    echo '</ul>';

    /* ---- Formatting legend --------------------------------------------- */
    echo '<p style="font-weight:600;margin:0 0 4px;">What the buttons become on the site</p>';
    echo '<ul style="margin:0 0 12px 16px;list-style:disc;">';
    echo '<li><strong>Paragraph</strong> — normal body text</li>';
    echo '<li><strong>Heading 2</strong> — a section (use these to structure the article)</li>';
    echo '<li><strong>Heading 3</strong> — a sub-heading inside a section</li>';
    echo '<li><strong>B</strong> — bold emphasis</li>';
    echo '<li><strong>List buttons</strong> — bullet or numbered list</li>';
    echo '<li><strong>&ldquo; quote button</strong> — highlighted pull quote</li>';
    echo '<li><strong>Link button</strong> — styled link</li>';
    echo '<li><strong>Add Media</strong> — inline image (fill in the caption)</li>';
    echo '</ul>';

    /* ---- Do / Don't ------------------------------------------------------ */
    echo '<p style="font-weight:600;margin:0 0 4px;">Do / Don&rsquo;t</p>';
    echo '<ul style="margin:0 0 12px 16px;list-style:disc;">';
    echo '<li><strong>Do</strong> paste from Word/Docs with the <em>Paste as text</em> button switched on</li>';
    echo '<li><strong>Do</strong> keep paragraphs short — one idea per section</li>';
    echo '<li><strong>Don&rsquo;t</strong> use <strong>Heading 1</strong> — the page title already is one</li>';
    echo '<li><strong>Don&rsquo;t</strong> set colors, fonts, or alignment — the site&rsquo;s design controls appearance</li>';
    echo '<li><strong>Don&rsquo;t</strong> type in the <em>Code</em> tab unless you mean to write HTML</li>';
    echo '</ul>';

    /* ---- Structure recipes ---------------------------------------------- */
    echo '<p style="font-weight:600;margin:0 0 4px;">Structure recipes</p>';

    if ($is_project) {
        cvm_guide_recipe(
            "Case study",
            '<li>Paragraph: what the client wanted, in plain terms</li>' .
            '<li><strong>Heading 2</strong> “What we installed” + a bullet list, one item per line</li>' .
            '<li><strong>Heading 2</strong> “The detail that made it” + a paragraph</li>' .
            '<li>Closing paragraph: the outcome</li>'
        );
        cvm_guide_recipe(
            "Showcase (gallery-first)",
            '<li>One short intro paragraph — the gallery carries this one</li>' .
            '<li>Optional closing line</li>'
        );
    } else {
        cvm_guide_recipe(
            "Article (standard)",
            '<li>Intro paragraph that hooks the reader</li>' .
            '<li><strong>Heading 2</strong> + 1–2 paragraphs — repeat for 2–3 sections</li>' .
            '<li>Optional <strong>&ldquo; quote</strong>: one strong sentence, shown highlighted</li>' .
            '<li>Closing paragraph, usually with a call to action</li>'
        );
        cvm_guide_recipe(
            "Announcement (short)",
            '<li>The news in 1–2 short paragraphs</li>' .
            '<li>Bullet list of key points</li>' .
            '<li>Optional closing line</li>'
        );
    }

    echo '<p class="description" style="margin:10px 0 0;">Changes appear on the site within ~60 seconds of Publish/Update. Prefer fill-in fields instead? Switch <strong>Content &rarr; Form</strong> below the editor.</p>';
}

function cvm_guide_recipe(string $title, string $items_html): void {
    echo '<details style="margin:0 0 6px;border:1px solid #dcdcde;border-radius:4px;padding:6px 8px;">';
    echo '<summary style="font-weight:600;cursor:pointer;">' . esc_html($title) . '</summary>';
    echo '<ol style="margin:6px 0 2px 18px;">' . $items_html . '</ol>';
    echo '</details>';
}
