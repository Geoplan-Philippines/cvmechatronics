import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import AnimateIn from "@/app/shared/ui/animate-in";
import Gallery from "@/app/shared/ui/gallery";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/app/shared/lib/projects/projects";
import { formatDate } from "@/app/shared/lib/blog/format";
import ArticleBody from "./_sections/article-body";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found — CV Mechatronics" };
  return {
    title: `${project.title} — CV Mechatronics`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: project.coverImage ? [{ url: project.coverImage }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main>
        {/* Header — navy */}
        <header className="bg-navy">
          <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
            <AnimateIn>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-body font-medium mb-8 transition-opacity duration-150 hover:opacity-70"
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(252,251,252,0.45)",
                  letterSpacing: "0.03em",
                }}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to projects
              </Link>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="font-body font-semibold uppercase text-amber"
                      style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <h1
                className="font-display font-bold uppercase text-paper text-balance"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h1>

              <div
                className="mt-6 font-body"
                style={{ fontSize: "0.875rem", color: "rgba(252,251,252,0.6)" }}
              >
                <span>{formatDate(project.publishedAt)}</span>
              </div>
            </AnimateIn>
          </div>
        </header>

        {/* Body — paper */}
        <section
          className="bg-paper"
          style={{ padding: "clamp(3rem,6vw,5rem) 0 clamp(5rem,9vw,9rem)" }}
        >
          <div className="max-w-3xl mx-auto px-6">
            {project.coverImage && (
              <AnimateIn>
                <div
                  className="relative w-full rounded-lg overflow-hidden mb-12"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                </div>
              </AnimateIn>
            )}

            <AnimateIn>
              <ArticleBody html={project.contentHtml} />
            </AnimateIn>

            <AnimateIn>
              <Gallery images={project.gallery} />
            </AnimateIn>

            {/* CTA */}
            <div className="mt-12 rounded-lg bg-surface p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span
                  className="font-body font-semibold uppercase text-amber"
                  style={{ fontSize: "0.6875rem", letterSpacing: "0.1em" }}
                >
                  Your property next
                </span>
                <p
                  className="font-body font-semibold text-navy mt-1"
                  style={{ fontSize: "1.0625rem" }}
                >
                  Want a system like this installed?
                </p>
              </div>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-navy hover:bg-[#1a3a63] rounded-md transition-all duration-150 hover:-translate-y-px shrink-0"
                style={{ fontSize: "0.8125rem", padding: "12px 26px" }}
              >
                Get a Quote
              </Link>
            </div>

            {/* Back to projects */}
            <div
              className="mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(14,38,70,0.08)" }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-body font-medium text-navy transition-colors duration-150 hover:text-amber"
                style={{ fontSize: "0.9rem" }}
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to all projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}