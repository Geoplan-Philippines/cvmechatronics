"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.25, 1, 0.5, 1] as const;

export default function CTASection() {
  return (
    <section id="contact" className="bg-amber" style={{ padding: "clamp(5rem,9vw,9rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Logo mark on amber — orange-variant (navy outline reads on amber bg) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="mb-8"
          >
            <div className="relative w-14 h-14">
              <Image
                src="/assets/cv-mechatronics-logo-orange-variant.png"
                alt="CV Mechatronics"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="font-display font-bold uppercase text-navy text-balance"
            style={{
              fontSize: "clamp(1.875rem,3.5vw,3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
            }}
          >
            Ready to Upgrade Your Property?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: 0.12 }}
            className="font-body mt-5"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "rgba(14,38,70,0.68)",
              maxWidth: "52ch",
            }}
          >
            Get a free on-site consultation. No obligation, no pressure — just an honest assessment
            of what automation can do for your space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="mailto:info@cvmechatronics.com"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper rounded-md transition-all duration-150 hover:-translate-y-px"
              style={{ fontSize: "0.8125rem", padding: "14px 32px", backgroundColor: "#0E2646" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1a3a63"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0E2646"; }}
            >
              Request a Free Quote
            </a>
            <a
              href="tel:+63000000000"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] rounded-md transition-all duration-150"
              style={{
                fontSize: "0.8125rem",
                padding: "13px 31px",
                color: "#0E2646",
                border: "1px solid rgba(14,38,70,0.30)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "rgba(14,38,70,0.10)";
                el.style.borderColor = "rgba(14,38,70,0.60)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "transparent";
                el.style.borderColor = "rgba(14,38,70,0.30)";
              }}
            >
              Call Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
