"use client";

import { motion } from "motion/react";

const ease = [0.25, 1, 0.5, 1] as const;

const steps = [
  {
    n: "01",
    title: "Free Consultation",
    body: "We visit your property, assess your needs, and deliver a detailed quote with transparent pricing. No hidden fees.",
  },
  {
    n: "02",
    title: "Precision Installation",
    body: "Our certified technicians execute the setup with no shortcuts and minimal disruption. Trunking managed, cables concealed.",
  },
  {
    n: "03",
    title: "Handover & Training",
    body: "We configure your control app, walk you through every function, and hand over full ownership of your system.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy" style={{ padding: "clamp(5rem,9vw,9rem) 0" }}>
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
            From Quote to Handover
          </h2>
          <p
            className="font-body mt-3 max-w-md"
            style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(252,251,252,0.60)" }}
          >
            Three steps. No surprises.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connecting line — desktop only */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-5 right-0 w-full h-px"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(237,157,24,0.3) 0%, rgba(237,157,24,0.08) 100%)",
                    left: "calc(2.5rem + 16px)",
                    right: "-16px",
                    width: "auto",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Step number */}
              <div
                className="font-display font-bold text-amber"
                style={{ fontSize: "2.5rem", lineHeight: 1, letterSpacing: "-0.02em" }}
                aria-label={`Step ${i + 1}`}
              >
                {step.n}
              </div>

              <h3
                className="font-body font-semibold text-amber mt-4"
                style={{ fontSize: "clamp(1.125rem,1.5vw,1.375rem)", lineHeight: 1.3 }}
              >
                {step.title}
              </h3>

              <p
                className="font-body mt-3"
                style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(252,251,252,0.62)" }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
