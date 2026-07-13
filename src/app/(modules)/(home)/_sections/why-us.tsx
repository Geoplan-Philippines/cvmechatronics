import Image from "next/image";
import * as motion from "motion/react-client";

const ease = [0.25, 1, 0.5, 1] as const;

const features = [
  {
    title: "Expert Local Team",
    desc: "Philippine-based specialists with hands-on experience across hundreds of properties. We know the local conditions, entry points, and how properties are built here.",
  },
  {
    title: "Premium-Grade Hardware",
    desc: "We source from established manufacturers only. No substitute components, no shortcuts on quality. The equipment we install is the equipment that lasts.",
  },
  {
    title: "Fast Support Response",
    desc: "Average reply under 2 hours. On-site visits scheduled same-day or next-day. Your system stays running.",
  },
  {
    title: "Clean, Professional Finish",
    desc: "Trunking managed, cables hidden, wall finishes respected. After installation, the only visible change is the system working.",
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="text-amber">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-paper" style={{ padding: "clamp(5rem,9vw,9rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="relative rounded-xl overflow-hidden order-2 lg:order-1"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
              alt="Smart lock installation with mobile app control"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(14,38,70,0.12)" }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
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
                Built for the Long Run
              </h2>
              <p
                className="font-body mt-4 text-muted"
                style={{ fontSize: "1rem", lineHeight: 1.65, maxWidth: "42ch" }}
              >
                We don&apos;t cut corners on equipment or installation. Every system we install is
                designed to work reliably, day after day.
              </p>
            </motion.div>

            <ul className="mt-8 space-y-6">
              {features.map((f, i) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="shrink-0 mt-1 w-[18px] h-[18px]">
                    <CheckIcon />
                  </span>
                  <div>
                    <p
                      className="font-body font-semibold text-navy"
                      style={{ fontSize: "0.9375rem", lineHeight: 1.4 }}
                    >
                      {f.title}
                    </p>
                    <p
                      className="font-body mt-1 text-muted"
                      style={{ fontSize: "0.9rem", lineHeight: 1.65 }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
