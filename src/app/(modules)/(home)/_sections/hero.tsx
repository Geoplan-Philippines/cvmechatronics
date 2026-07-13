import Image from "next/image";
import * as motion from "motion/react-client";

const ease = [0.25, 1, 0.5, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-navy">
      {/* Background photo + gradient */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          alt=""
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-32 lg:pb-28">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-display font-bold uppercase text-amber text-balance"
            style={{
              fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Smart Automation for Modern Living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="font-body mt-6 max-w-xl"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "rgba(252,251,252,0.82)" }}
          >
            CV Mechatronics designs and installs intelligent gate systems, smart glass, surveillance,
            and centralized control — precision-engineered for Philippine homes and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-amber hover:bg-amber-deep rounded-md transition-all duration-150 hover:-translate-y-px"
              style={{ fontSize: "0.8125rem", padding: "14px 32px" }}
            >
              Request a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] rounded-md transition-all duration-150 text-paper border border-paper/35 hover:border-paper/65 hover:bg-paper/8"
              style={{ fontSize: "0.8125rem", padding: "13px 31px" }}
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease }}
          className="hidden lg:flex items-center gap-3 mt-16"
          aria-hidden="true"
        >
          <div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(252,251,252,0.35))" }}
          />
          <span
            className="font-body"
            style={{ fontSize: "0.75rem", letterSpacing: "0.08em", color: "rgba(252,251,252,0.45)" }}
          >
            SCROLL
          </span>
        </motion.div>
      </div>
    </section>
  );
}
