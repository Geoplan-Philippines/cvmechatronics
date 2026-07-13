import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/app/shared/ui/animate-in";
import { getAllPosts } from "@/app/shared/lib/blog/posts";
import { formatDate } from "@/app/shared/lib/blog/format";

function ArrowRight() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function BlogList() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <section className="bg-paper" style={{ padding: "clamp(4rem,8vw,8rem) 0 clamp(5rem,9vw,9rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured — latest post */}
        {featured && (
          <AnimateIn>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-lg overflow-hidden bg-surface transition-shadow duration-150 hover:shadow-[0_2px_8px_rgba(14,38,70,0.10)] md:grid md:grid-cols-2"
            >
              <div className="relative min-h-[260px] md:min-h-[340px]">
                <Image
                  src={featured.coverImage}
                  alt={featured.coverAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-body font-semibold uppercase text-amber"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}
                  >
                    {featured.category}
                  </span>
                  <span style={{ color: "rgba(14,38,70,0.25)" }}>·</span>
                  <span
                    className="font-body text-muted"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {formatDate(featured.publishedAt)}
                  </span>
                </div>
                <h2
                  className="font-display font-bold uppercase text-navy text-balance"
                  style={{
                    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  className="font-body mt-4 text-muted"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65, maxWidth: "52ch" }}
                >
                  {featured.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 mt-6 font-body font-medium uppercase text-amber transition-transform duration-150 group-hover:translate-x-1"
                  style={{ fontSize: "0.8125rem", letterSpacing: "0.04em" }}
                >
                  Read article <ArrowRight />
                </span>
              </div>
            </Link>
          </AnimateIn>
        )}

        {/* Grid — remaining posts */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <AnimateIn key={p.slug} delay={(i % 3) * 0.07}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex flex-col h-full rounded-lg overflow-hidden bg-surface transition-shadow duration-150 hover:shadow-[0_2px_8px_rgba(14,38,70,0.10)]"
              >
                <div className="relative shrink-0" style={{ height: "200px" }}>
                  <Image
                    src={p.coverImage}
                    alt={p.coverAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(14,38,70,0.30)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute top-4 left-4 font-body font-semibold uppercase text-paper"
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.08em",
                      background: "rgba(14,38,70,0.55)",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="font-body text-muted"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.02em" }}
                  >
                    {formatDate(p.publishedAt)} · {p.readingMinutes} min read
                  </span>
                  <h3
                    className="font-body font-semibold text-navy mt-2 text-balance"
                    style={{ fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)", lineHeight: 1.3 }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-body text-muted mt-2 flex-1"
                    style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
                  >
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
