import type { BlogPost, BlogCategory } from "./types";
import { samplePosts } from "./sample-data";
import { fetchWordPressPost, fetchWordPressPosts } from "./wordpress";

/**
 * Single switch for the data source. When WORDPRESS_API_URL is set the
 * accessors read from headless WordPress; otherwise they serve sample data.
 * The UI only ever imports these functions — never the WordPress shapes —
 * so connecting WordPress is a config change, not a UI change.
 */
const useWordPress = Boolean(process.env.WORDPRESS_API_URL);

function byNewest(a: BlogPost, b: BlogPost): number {
  return +new Date(b.publishedAt) - +new Date(a.publishedAt);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (useWordPress) {
    const posts = await fetchWordPressPosts();
    if (posts.length) return [...posts].sort(byNewest);
  }
  return [...samplePosts].sort(byNewest);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (useWordPress) {
    const post = await fetchWordPressPost(slug);
    if (post) return post;
  }
  return samplePosts.find((p) => p.slug === slug) ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}

/** Scaffolding for the planned category-filter UI; not yet wired into a route. */
export async function getPostsByCategory(
  category: BlogCategory,
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.category === category);
}
