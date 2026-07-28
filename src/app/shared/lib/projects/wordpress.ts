import type { GalleryImage, Project } from "./types";

/**
 * Headless WordPress adapter for the `project` custom post type
 * (REST API — registered by wordpress/mu-plugins/register-projects.php).
 *
 * Not active until WORDPRESS_API_URL is set (see projects.ts). Featured
 * images are served from the WordPress host, which must be listed in
 * next.config.ts images.remotePatterns.
 *
 * REST endpoint: GET {API}/wp-json/wp/v2/projects?_embed
 * `_embed` inlines featured media and taxonomy terms.
 */

const API = process.env.WORDPRESS_API_URL;

type WpRendered = { rendered: string };

type WpTerm = { taxonomy: string; name: string };

type WpProject = {
  slug: string;
  date: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  /** Registered by wordpress/mu-plugins/gallery-field.php (1–5 images). */
  gallery?: GalleryImage[];
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
    "wp:term"?: WpTerm[][];
  };
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function mapProject(wp: WpProject): Project {
  const media = wp._embedded?.["wp:featuredmedia"]?.[0];
  const terms = wp._embedded?.["wp:term"]?.flat() ?? [];
  const tags = terms
    .filter((t) => t.taxonomy === "post_tag")
    .map((t) => t.name);

  return {
    slug: wp.slug,
    title: stripHtml(wp.title.rendered),
    excerpt: stripHtml(wp.excerpt.rendered),
    contentHtml: wp.content.rendered,
    coverImage: media?.source_url ?? "",
    coverAlt: media?.alt_text ?? "",
    tags,
    publishedAt: wp.date,
    gallery: (wp.gallery ?? []).filter((g) => g.src).slice(0, 5),
  };
}

export async function fetchWordPressProjects(): Promise<Project[]> {
  if (!API) return [];
  // Connection-level failures (DNS, timeout, refused) throw here, and a
  // malformed body throws in .json(); either way the page renders empty.
  try {
    const res = await fetch(`${API}/wp-json/wp/v2/projects?_embed&per_page=50`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as WpProject[];
    return data.map(mapProject);
  } catch {
    return [];
  }
}

export async function fetchWordPressProject(
  slug: string,
): Promise<Project | null> {
  if (!API) return null;
  try {
    const res = await fetch(
      `${API}/wp-json/wp/v2/projects?slug=${slug}&_embed`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as WpProject[];
    return data[0] ? mapProject(data[0]) : null;
  } catch {
    return null;
  }
}
