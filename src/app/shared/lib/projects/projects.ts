import type { Project } from "./types";
import {
  fetchWordPressProject,
  fetchWordPressProjects,
} from "./wordpress";

/**
 * Single switch for the data source, mirroring lib/blog/posts.ts. When
 * WORDPRESS_API_URL is set the accessors read from headless WordPress;
 * otherwise they return nothing and the UI shows its empty state. The UI
 * only ever imports these functions — never the WordPress shapes — so
 * connecting WordPress is a config change, not a UI change.
 */
const useWordPress = Boolean(process.env.WORDPRESS_API_URL);

function byNewest(a: Project, b: Project): number {
  return +new Date(b.publishedAt) - +new Date(a.publishedAt);
}

export async function getAllProjects(): Promise<Project[]> {
  if (!useWordPress) return [];
  const projects = await fetchWordPressProjects();
  return [...projects].sort(byNewest);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!useWordPress) return null;
  return fetchWordPressProject(slug);
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map((p) => p.slug);
}
