import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import AnimateIn from "@/app/shared/ui/animate-in";
import Gallery from "@/app/shared/ui/gallery";
import { getAllPostSlugs, getPostBySlug } from "@/app/shared/lib/blog/posts";
import { formatDate } from "@/app/shared/lib/blog/format";
import ArticleBody from "./_sections/article-body";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article Not Found — CV Mechatronics" };
  return {
    title: `${post.title} — CV Mechatronics`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main>
        {/* Header — navy */}
        <header className="bg-navy">
          <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
            <AnimateIn>
              <Link
                href="/blog"
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
                Back to blog
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="font-body font-semibold uppercase text-amber"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                >
                  {post.category}
                </span>
                <span style={{ color: "rgba(252,251,252,0.3)" }}>·</span>
                <span
                  className="font-body"
                  style={{ fontSize: "0.8125rem", color: "rgba(252,251,252,0.6)" }}
                >
                  {post.readingMinutes} min read
                </span>
              </div>

              <h1
                className="font-display font-bold uppercase text-paper text-balance"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {post.title}
              </h1>

              <div
                className="mt-6 flex flex-wrap items-center gap-3 font-body"
                style={{ fontSize: "0.875rem", color: "rgba(252,251,252,0.6)" }}
              >
                <span className="text-paper font-medium">{post.author.name}</span>
                {post.author.role && (
                  <>
                    <span style={{ color: "rgba(252,251,252,0.3)" }}>·</span>
                    <span>{post.author.role}</span>
                  </>
                )}
                <span style={{ color: "rgba(252,251,252,0.3)" }}>·</span>
                <span>{formatDate(post.publishedAt)}</span>
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
            {post.coverImage && (
              <AnimateIn>
                <div
                  className="relative w-full rounded-lg overflow-hidden mb-12"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                </div>
              </AnimateIn>
            )}

            <AnimateIn>
              <ArticleBody html={post.contentHtml} />
            </AnimateIn>

            <AnimateIn>
              <Gallery images={post.gallery} />
            </AnimateIn>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="font-body text-muted"
                    style={{
                      fontSize: "0.75rem",
                      background: "var(--color-surface)",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Related product */}
            {post.relatedProduct && (
              <div className="mt-10 rounded-lg bg-surface p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span
                    className="font-body font-semibold uppercase text-amber"
                    style={{ fontSize: "0.6875rem", letterSpacing: "0.1em" }}
                  >
                    Related
                  </span>
                  <p
                    className="font-body font-semibold text-navy mt-1"
                    style={{ fontSize: "1.0625rem" }}
                  >
                    {post.relatedProduct.label}
                  </p>
                </div>
                <Link
                  href={post.relatedProduct.href}
                  className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-navy hover:bg-[#1a3a63] rounded-md transition-all duration-150 hover:-translate-y-px shrink-0"
                  style={{ fontSize: "0.8125rem", padding: "12px 26px" }}
                >
                  Explore
                </Link>
              </div>
            )}

            {/* Back to blog */}
            <div
              className="mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(14,38,70,0.08)" }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-body font-medium text-navy transition-colors duration-150 hover:text-amber"
                style={{ fontSize: "0.9rem" }}
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
