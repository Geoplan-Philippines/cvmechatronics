"use client";

import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.25, 1, 0.5, 1] as const;

export default function ContactsHero() {
  return (
    <section className="bg-navy" style={{ paddingTop: "clamp(7rem,12vw,10rem)", paddingBottom: "clamp(3rem,5vw,5rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
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
              <path
                d="M19 12H5M5 12l7-7M5 12l7 7"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
            Let&apos;s talk about your property.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.18 }}
            className="font-body mt-5"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "rgba(252,251,252,0.65)",
              maxWidth: "50ch",
            }}
          >
            Fill out the form and we&apos;ll get back to you within one business day — no pressure,
            no commitment, just an honest conversation about what&apos;s possible.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
