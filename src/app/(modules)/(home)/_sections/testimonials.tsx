"use client";

import { motion } from "motion/react";

const ease = [0.25, 1, 0.5, 1] as const;

const featured = {
  quote:
    "The smart glass installation completely transformed our conference rooms. Instant privacy at the tap of a button — our team uses it every single day.",
  role: "Operations Director, Commercial Property",
};

const secondary = [
  {
    quote:
      "Our automated gate opens as I pull up the driveway. Seamless, reliable, zero fuss. The installation team was incredibly professional and left the site cleaner than they found it.",
    role: "Homeowner, Residential Client",
  },
  {
    quote:
      "Energy bills dropped noticeably after automating our lighting and CCTV setup. The ROI came faster than expected — and the app control is genuinely impressive.",
    role: "Business Owner, Commercial Client",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
      className="mb-5 opacity-40"
    >
      <path
        d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 3.2C11.2 4.8 8.8 7.2 8 12h6.4V24H0zm17.6 0V14.4C17.6 6.4 22.4 1.6 32 0l1.6 3.2C28.8 4.8 26.4 7.2 25.6 12H32V24H17.6z"
        fill="#ED9D18"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-navy" style={{ padding: "clamp(5rem,9vw,9rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
        >
          <h2
            className="font-display font-bold uppercase text-amber text-balance"
            style={{
              fontSize: "clamp(1.875rem,3.5vw,3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
            }}
          >
            Trusted by Modern Properties
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-12 max-w-2xl"
        >
          <QuoteIcon />
          <p
            className="font-body text-paper"
            style={{ fontSize: "clamp(1.125rem,2vw,1.375rem)", lineHeight: 1.65, color: "rgba(252,251,252,0.90)" }}
          >
            {featured.quote}
          </p>
          <footer
            className="font-body mt-5"
            style={{ fontSize: "0.875rem", color: "rgba(252,251,252,0.45)", letterSpacing: "0.02em" }}
          >
            — {featured.role}
          </footer>
        </motion.blockquote>

        {/* Two secondary testimonials */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondary.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
              className="rounded-lg p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="font-body"
                style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(252,251,252,0.76)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer
                className="font-body mt-4"
                style={{ fontSize: "0.8125rem", color: "rgba(252,251,252,0.40)", letterSpacing: "0.02em" }}
              >
                — {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
