"use client";

import Image from "next/image";
import AnimateIn from "@/app/shared/ui/animate-in";

export default function Services() {
  return (
    <section id="services" className="bg-paper" style={{ padding: "clamp(5rem,9vw,9rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2
                className="font-display font-bold uppercase text-amber text-balance"
                style={{
                  fontSize: "clamp(1.875rem,3.5vw,3rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.015em",
                }}
              >
                What We Install
              </h2>
              <p
                className="font-body mt-3 max-w-lg"
                style={{ fontSize: "1rem", lineHeight: 1.65, color: "#5A6780" }}
              >
                Four core systems. One integrated solution for residential and commercial properties.
              </p>
            </div>
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 font-body font-medium shrink-0 transition-opacity duration-150 hover:opacity-60"
              style={{ fontSize: "0.8125rem", letterSpacing: "0.02em", color: "#0E2646" }}
            >
              All solutions
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </AnimateIn>

        {/* Bento grid */}
        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ gridTemplateRows: "auto" }}
        >
          {/* Gate & Door — large, photo overlay, spans 2 cols */}
          <AnimateIn delay={0.05} className="md:col-span-2">
            <div
              className="relative overflow-hidden rounded-lg w-full"
              style={{ height: "clamp(240px, 30vw, 360px)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                alt="Modern property with automated sliding glass entrance"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(14,38,70,0.72)" }}
              />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3
                  className="font-body font-semibold text-amber"
                  style={{ fontSize: "clamp(1.125rem,1.8vw,1.5rem)", lineHeight: 1.3 }}
                >
                  Gate &amp; Door Automation
                </h3>
                <p
                  className="font-body mt-2"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "rgba(252,251,252,0.72)" }}
                >
                  Heavy-duty slide, swing, and roll-up gate motors with remote access and proximity
                  sensors — configured for residential driveways and commercial entries.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Smart Glass — tall, photo overlay, spans 2 rows */}
          <AnimateIn delay={0.1} className="md:row-span-2">
            <div
              className="relative overflow-hidden rounded-lg w-full h-full"
              style={{ minHeight: "clamp(240px, 30vw, 360px)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Modern open-plan interior with large sliding glass doors"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(14,38,70,0.68)" }}
              />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3
                  className="font-body font-semibold text-amber"
                  style={{ fontSize: "clamp(1.125rem,1.8vw,1.5rem)", lineHeight: 1.3 }}
                >
                  Smart Glass Tint
                </h3>
                <p
                  className="font-body mt-2"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "rgba(252,251,252,0.72)" }}
                >
                  Switchable PDLC privacy glass — instantly clear to frosted with a tap. For
                  conference rooms, home offices, bathrooms, and storefronts.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Lighting & CCTV — surface fill, no photo */}
          <AnimateIn delay={0.15}>
            <div
              className="rounded-lg p-6 md:p-8 flex flex-col justify-between h-full transition-shadow duration-150 hover:shadow-[0_2px_8px_rgba(14,38,70,0.10)]"
              style={{ backgroundColor: "#F4F5F7", minHeight: "200px" }}
            >
              <div>
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(237,157,24,0.12)" }}
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                      stroke="#ED9D18"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 10c0-4.418 4.477-8 10-8s10 3.582 10 8-4.477 8-10 8a15.3 15.3 0 0 1-3.6-.426L4 22l1.04-3.8A8.64 8.64 0 0 1 2 10z"
                      stroke="#ED9D18"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="font-body font-semibold text-amber"
                  style={{ fontSize: "clamp(1.125rem,1.5vw,1.375rem)", lineHeight: 1.3 }}
                >
                  Security &amp; Lighting
                </h3>
                <p
                  className="font-body mt-2"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "#5A6780" }}
                >
                  24/7 HD surveillance with automated lighting that activates on schedule or
                  motion — synced to your routine.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* App Control — navy fill, no photo */}
          <AnimateIn delay={0.2}>
            <div
              className="rounded-lg p-6 md:p-8 flex flex-col justify-between h-full transition-all duration-150 hover:opacity-90"
              style={{ backgroundColor: "#0E2646", minHeight: "200px" }}
            >
              <div>
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(237,157,24,0.18)" }}
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="3"
                      stroke="#ED9D18"
                      strokeWidth="1.75"
                    />
                    <path
                      d="M9 7h6M9 11h6M9 15h4"
                      stroke="#ED9D18"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3
                  className="font-body font-semibold text-amber"
                  style={{ fontSize: "clamp(1.125rem,1.5vw,1.375rem)", lineHeight: 1.3 }}
                >
                  Centralized App Control
                </h3>
                <p
                  className="font-body mt-2"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "rgba(252,251,252,0.68)" }}
                >
                  Every system — gates, glass, cameras, lights — in one app. iOS and Android.
                  Control your property from anywhere.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
