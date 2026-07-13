"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.25, 1, 0.5, 1] as const;

const residential = [
  "Automated sliding or swing driveway gates",
  "PDLC smart glass for master baths and living areas",
  "HD dome cameras covering the perimeter",
  "Motion-activated outdoor lighting",
  "Single-app control for the entire home",
];

const commercial = [
  "Heavy-duty roll-up and barrier gate systems",
  "Switchable glass for conference rooms and partitions",
  "Multi-camera surveillance with NVR recording",
  "Automated lighting on motion and schedule",
  "Access logs and multi-user app permissions",
];

function ListItem({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "#ED9D18" }}
        aria-hidden="true"
      />
      <span
        className="font-body"
        style={{
          fontSize: "0.9375rem",
          lineHeight: 1.65,
          color: light ? "rgba(252,251,252,0.82)" : "rgba(252,251,252,0.75)",
        }}
      >
        {text}
      </span>
    </li>
  );
}

export default function Applications() {
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
            Residential & Commercial
          </h2>
          <p
            className="font-body mt-3 max-w-md"
            style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(252,251,252,0.55)" }}
          >
            The same systems. Different configurations. Every property gets an installation scoped to how the space is actually used.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            className="relative overflow-hidden rounded-lg"
            style={{ minHeight: "440px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1741288341038-3520a78b06c9?auto=format&fit=crop&w=900&q=80"
              alt="Luxurious residential property with a large ornate front gate"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(14,38,70,0.97) 0%, rgba(14,38,70,0.70) 50%, rgba(14,38,70,0.30) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <p
                className="font-body font-medium mb-3"
                style={{ fontSize: "0.75rem", letterSpacing: "0.05em", color: "#ED9D18" }}
              >
                RESIDENTIAL
              </p>
              <h3
                className="font-body font-semibold text-amber mb-5"
                style={{ fontSize: "clamp(1.125rem,1.5vw,1.375rem)", lineHeight: 1.3 }}
              >
                Homes, Condos &amp; Subdivisions
              </h3>
              <ul className="space-y-3">
                {residential.map((item) => (
                  <ListItem key={item} text={item} />
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease, delay: 0.16 }}
            className="relative overflow-hidden rounded-lg"
            style={{ minHeight: "440px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1758448511220-5439cfb3c533?auto=format&fit=crop&w=900&q=80"
              alt="Modern commercial building entrance with glass facade and arriving vehicle"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(14,38,70,0.97) 0%, rgba(14,38,70,0.65) 50%, rgba(14,38,70,0.25) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <p
                className="font-body font-medium mb-3"
                style={{ fontSize: "0.75rem", letterSpacing: "0.05em", color: "#ED9D18" }}
              >
                COMMERCIAL
              </p>
              <h3
                className="font-body font-semibold text-amber mb-5"
                style={{ fontSize: "clamp(1.125rem,1.5vw,1.375rem)", lineHeight: 1.3 }}
              >
                Offices, Warehouses &amp; Retail
              </h3>
              <ul className="space-y-3">
                {commercial.map((item) => (
                  <ListItem key={item} text={item} />
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
