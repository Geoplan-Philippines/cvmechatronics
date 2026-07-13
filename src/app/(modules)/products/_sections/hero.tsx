"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.25, 1, 0.5, 1] as const;

export default function ProductsHero() {
  return (
    <section className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1920&q=80"
          alt="Precision-installed smart lock and access control hardware on a modern door"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,38,70,0.97) 40%, rgba(14,38,70,0.78) 65%, rgba(14,38,70,0.52) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: "linear-gradient(to top, rgba(14,38,70,0.60) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-32 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body font-medium mb-10"
            style={{ fontSize: "0.8125rem", color: "rgba(252,251,252,0.45)", letterSpacing: "0.03em" }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.05 }}
            className="font-display font-bold uppercase text-amber text-balance"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Hardware We Stand Behind.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.18 }}
            className="font-body mt-6 max-w-xl"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "rgba(252,251,252,0.72)" }}
          >
            We source from established manufacturers only. No substitute components.
            The products we install are the products that last in Philippine conditions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease, delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-amber hover:bg-amber-deep rounded-md transition-all duration-150 hover:-translate-y-px"
              style={{ fontSize: "0.8125rem", padding: "14px 32px" }}
            >
              Get a Quote
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] rounded-md transition-all duration-150"
              style={{
                fontSize: "0.8125rem",
                padding: "13px 31px",
                color: "#FCFBFC",
                border: "1px solid rgba(252,251,252,0.30)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(252,251,252,0.60)";
                el.style.backgroundColor = "rgba(252,251,252,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(252,251,252,0.30)";
                el.style.backgroundColor = "transparent";
              }}
            >
              View Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
