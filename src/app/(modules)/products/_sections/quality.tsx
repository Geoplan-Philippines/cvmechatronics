"use client";

import { motion } from "motion/react";

const ease = [0.25, 1, 0.5, 1] as const;

const standards = [
  {
    title: "Established manufacturers only",
    desc: "BFT, FAAC, Hikvision, Dahua, ZKTeco. Brands with a Philippine distribution chain, available spare parts, and firmware support. No unbranded substitutes.",
  },
  {
    title: "Sized for the application",
    desc: "A 300 kg gate motor on a 600 kg gate will fail early. We specify correctly — gate weight, cycle count, leaf length, and power supply are all factored before any motor is selected.",
  },
  {
    title: "Weather and voltage rated",
    desc: "Philippine conditions mean humidity, voltage fluctuation, and direct sunlight. Every product we install is rated for it — IP65 minimum for outdoor hardware, AVR-protected for control boards.",
  },
];

export default function QualityStandard() {
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
            style={{ fontSize: "clamp(1.875rem,3.5vw,3rem)", lineHeight: 1.15, letterSpacing: "-0.015em" }}
          >
            Our Product Standard
          </h2>
          <p
            className="font-body mt-3 max-w-md"
            style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(252,251,252,0.55)" }}
          >
            Three non-negotiables on every product we source and install.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="rounded-lg p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-8 h-0.5 mb-6"
                style={{ backgroundColor: "#ED9D18" }}
                aria-hidden="true"
              />
              <h3
                className="font-body font-semibold text-amber"
                style={{ fontSize: "clamp(1rem,1.3vw,1.25rem)", lineHeight: 1.3 }}
              >
                {s.title}
              </h3>
              <p
                className="font-body mt-3"
                style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(252,251,252,0.60)" }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
