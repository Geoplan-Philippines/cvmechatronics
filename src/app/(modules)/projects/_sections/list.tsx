import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/app/shared/ui/animate-in";
import { getAllProjects } from "@/app/shared/lib/projects/projects";
import { formatDate } from "@/app/shared/lib/blog/format";

export default async function ProjectsList() {
  const projects = await getAllProjects();

  return (
    <section
      className="bg-paper"
      style={{ padding: "clamp(4rem,8vw,8rem) 0 clamp(5rem,9vw,9rem)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {projects.length === 0 ? (
          /* Empty state — shown until projects are published in WordPress. */
          <div className="rounded-lg bg-surface p-10 lg:p-14 text-center max-w-2xl mx-auto">
            <h2
              className="font-display font-bold uppercase text-navy text-balance"
              style={{
                fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
              }}
            >
              Projects are on the way
            </h2>
            <p
              className="font-body text-muted mt-4"
              style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
            >
              We&apos;re preparing our portfolio of installed systems. In the
              meantime, tell us about your property and we&apos;ll show you
              what&apos;s possible.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-amber hover:bg-amber-deep rounded-md transition-colors duration-150 mt-8"
              style={{ fontSize: "0.8125rem", padding: "14px 32px" }}
            >
              Get in Touch
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <AnimateIn key={p.slug} delay={(i % 3) * 0.07}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col h-full rounded-lg overflow-hidden bg-surface transition-shadow duration-150 hover:shadow-[0_2px_8px_rgba(14,38,70,0.10)]"
                >
                  <div className="relative shrink-0" style={{ height: "220px" }}>
                    {p.coverImage && (
                      <Image
                        src={p.coverImage}
                        alt={p.coverAlt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{ background: "rgba(14,38,70,0.30)" }}
                      aria-hidden="true"
                    />
                    {p.tags[0] && (
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
                        {p.tags[0]}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="font-body text-muted"
                      style={{ fontSize: "0.75rem", letterSpacing: "0.02em" }}
                    >
                      {formatDate(p.publishedAt)}
                    </span>
                    <h3
                      className="font-body font-semibold text-navy mt-2 text-balance"
                      style={{
                        fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)",
                        lineHeight: 1.3,
                      }}
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
        )}
      </div>
    </section>
  );
}
