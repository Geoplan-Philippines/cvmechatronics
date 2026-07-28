<?php
/**
 * Plugin Name: CV Mechatronics — Headless Content Types
 * Description: Registers the `project` custom post type and exposes it through the REST API for the headless Next.js frontend.
 *
 * This file lives in wp-content/mu-plugins (must-use plugins), so it is
 * always active and cannot be disabled from the admin — which is exactly
 * what a headless backend needs.
 */

add_action("init", function () {
    register_post_type("project", [
        "labels" => [
            "name" => "Projects",
            "singular_name" => "Project",
        ],
        "public" => true,
        // The two lines below are what make this post type headless-ready:
        "show_in_rest" => true,
        "rest_base" => "projects",
        "menu_icon" => "dashicons-portfolio",
        "supports" => ["title", "editor", "excerpt", "thumbnail"],
        // Reuse the standard Tags taxonomy for services/systems involved
        // (e.g. "Gate Automation", "Smart Glass"). Surfaced via _embed.
        "taxonomies" => ["post_tag"],
        "has_archive" => false,
        "rewrite" => ["slug" => "projects"],
    ]);
});
