import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const ease = [0.25, 1, 0.5, 1] as const;

export default function ProductsCTA() {
  return (
    <section className="bg-amber" style={{ padding: "clamp(5rem,9vw,9rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
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
            style={{ fontSize: "clamp(1.875rem,3.5vw,3rem)", lineHeight: 1.15, letterSpacing: "-0.015em" }}
          >
            Not Sure What You Need?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: 0.12 }}
            className="font-body mt-5"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "rgba(14,38,70,0.68)", maxWidth: "52ch" }}
          >
            We assess the property and specify the right hardware for the load, cycle count, and
            budget. One visit, one detailed quote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="mailto:info@cvmechatronics.com"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-navy hover:bg-[#1a3a63] rounded-md transition-all duration-150 hover:-translate-y-px"
              style={{ fontSize: "0.8125rem", padding: "14px 32px" }}
            >
              Request a Free Quote
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] rounded-md transition-all duration-150 text-navy border border-navy/30 hover:bg-navy/10 hover:border-navy/60"
              style={{ fontSize: "0.8125rem", padding: "13px 31px" }}
            >
              View Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
