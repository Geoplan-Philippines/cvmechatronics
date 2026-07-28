import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const ease = [0.25, 1, 0.5, 1] as const;

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[52vh] flex flex-col justify-end overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Philippine property with an automated gate and clean architectural lines"
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
            background:
              "linear-gradient(to top, rgba(14,38,70,0.60) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16 pt-32 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body font-medium mb-10"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(252,251,252,0.45)",
              letterSpacing: "0.03em",
            }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.04 }}
            className="block font-body font-semibold uppercase mb-4"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(252,251,252,0.55)",
              letterSpacing: "0.14em",
            }}
          >
            The CV Mechatronics Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="font-display font-bold uppercase text-amber text-balance"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Installed. Automated. Running.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.2 }}
            className="font-body mt-6 max-w-xl"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "rgba(252,251,252,0.72)",
            }}
          >
            A selection of gates, glass, cameras, and lighting systems the team
            has designed and installed across the Philippines.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
