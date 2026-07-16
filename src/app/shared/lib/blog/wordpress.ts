import { BLOG_CATEGORIES } from "./types";
import type { BlogCategory, BlogPost } from "./types";

/**
 * Headless WordPress adapter (REST API — no plugin required).
 *
 * Not active until WORDPRESS_API_URL is set (see posts.ts). To go live:
 *   1. Set WORDPRESS_API_URL, e.g. https://cms.cvmechatronics.com
 *   2. Add the WordPress host to next.config.ts images.remotePatterns
 *      (featured images are served from there).
 *
 * `content.rendered` is externally-authored HTML; it is sanitized before render
 * in article-body.tsx (isomorphic-dompurify).
 *
 * REST endpoint: GET {API}/wp-json/wp/v2/posts?_embed
 * `_embed` inlines featured media, author, and taxonomy terms.
 */

const API = process.env.WORDPRESS_API_URL;

type WpRendered = { rendered: string };

type WpTerm = { taxonomy: string; name: string };

type WpPost = {
  slug: string;
  date: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
    author?: { name: string }[];
    "wp:term"?: WpTerm[][];
  };
};

/**
 * WordPress category names should mirror the BlogCategory union, but the WP
 * taxonomy is edited independently — a typo or new term would otherwise be cast
 * to a lie. Validate against the known set and fall back to "News".
 */
function toBlogCategory(name: string | undefined): BlogCategory {
  return name && (BLOG_CATEGORIES as string[]).includes(name)
    ? (name as BlogCategory)
    : "News";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function readingMinutes(html: string): number {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function mapPost(wp: WpPost): BlogPost {
  const media = wp._embedded?.["wp:featuredmedia"]?.[0];
  const terms = wp._embedded?.["wp:term"]?.flat() ?? [];
  const categoryName = terms.find((t) => t.taxonomy === "category")?.name;
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
    category: toBlogCategory(categoryName),
    tags,
    author: { name: wp._embedded?.author?.[0]?.name ?? "CV Mechatronics" },
    publishedAt: wp.date,
    readingMinutes: readingMinutes(wp.content.rendered),
  };
}

export async function fetchWordPressPosts(): Promise<BlogPost[]> {
  if (!API) return [];
  // Connection-level failures (DNS, timeout, refused) throw here, and a
  // malformed body throws in .json(); either way, fall back to sample data.
  try {
    const res = await fetch(`${API}/wp-json/wp/v2/posts?_embed&per_page=50`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as WpPost[];
    return data.map(mapPost);
  } catch {
    return [];
  }
}

export async function fetchWordPressPost(
  slug: string,
): Promise<BlogPost | null> {
  if (!API) return null;
  try {
    const res = await fetch(`${API}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as WpPost[];
    return data[0] ? mapPost(data[0]) : null;
  } catch {
    return null;
  }
}
