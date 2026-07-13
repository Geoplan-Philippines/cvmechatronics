import Image from "next/image";
import AnimateIn from "@/app/shared/ui/animate-in";

type Solution = {
  id: string;
  label: string;
  name: string;
  desc: string;
  features: string[];
  photo?: string;
  photoAlt?: string;
  dark?: boolean;
};

const solutions: Solution[] = [
  {
    id: "gate",
    label: "01",
    name: "Gate & Door Automation",
    desc: "Heavy-duty motors for sliding, swing, roll-up, and bi-fold gates. Configured for residential driveways, commercial entries, and industrial bays — with remote access and fail-safe protection.",
    features: [
      "Sliding gate motors (up to 800 kg capacity)",
      "Swing gate operators — mono and bi-parting",
      "Roll-up and sectional door drives",
      "Vehicle loop detectors and safety photocells",
      "RF remote, keypad, and app-based access",
      "Battery backup — gates open during power outage",
    ],
    photo: "https://images.unsplash.com/photo-1770756051811-1612ac8bedfa?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Modern white house with contemporary full-glass garage doors",
  },
  {
    id: "glass",
    label: "02",
    name: "Smart Glass Tint",
    desc: "PDLC switchable glass that changes from fully clear to frosted in milliseconds. Applied as retrofit film or pre-laminated panels — no structural changes required for most installations.",
    features: [
      "Instant opacity change — clear to 80% opacity",
      "Conference rooms, master baths, storefronts",
      "UV blocking reduces interior heat and fading",
      "Controlled via wall switch, remote, or app",
      "Custom cut to any panel size on site",
      "Matte-white diffused appearance when opaque",
    ],
    photo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Modern open-plan interior with large sliding glass doors",
  },
  {
    id: "cctv",
    label: "03",
    name: "CCTV & Surveillance",
    desc: "IP-based camera systems with full HD and 4K options, infrared night vision, and NVR storage. Viewable live from anywhere via mobile app. Configured for perimeter, entry, and interior coverage.",
    features: [
      "4MP and 8MP (4K) IP cameras, indoor and outdoor",
      "Night vision up to 30 m via infrared or ColorVu",
      "Network Video Recorders (NVR) — 4ch to 16ch",
      "Remote live view and playback from iOS/Android",
      "Pan-tilt-zoom (PTZ) cameras for wide areas",
      "Motion-triggered recording and push alerts",
    ],
    photo: "https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Two security cameras mounted on exterior wall of building",
  },
  {
    id: "lighting",
    label: "04",
    name: "Automated Lighting",
    desc: "Smart lighting that activates on schedule, on motion, or in response to gate events. Synced with your security system so lights and cameras work together as a single layer of protection.",
    features: [
      "Motion-activated outdoor floodlights",
      "Schedule-based ambient and landscape lighting",
      "Dusk-to-dawn auto on/off via light sensor",
      "Linked to gate and CCTV — lights trigger on entry",
      "Smart wall switches — single, double, triple gang",
      "App control for manual override and scheduling",
    ],
    dark: false,
  },
  {
    id: "control",
    label: "05",
    name: "Centralized App Control",
    desc: "Every system — gates, glass, cameras, lighting — controlled from a single iOS or Android app. Access logs, real-time notifications, and remote operation. One interface for the entire property.",
    features: [
      "Unified dashboard for all installed systems",
      "iOS and Android — native app, no browser needed",
      "Remote gate open/close from anywhere",
      "Live CCTV feed and smart glass control in-app",
      "Access logs with timestamps per user",
      "Push alerts for gate events, motion, and alarms",
    ],
    dark: true,
  },
];

function CheckIcon() {
  return (
    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 mt-[3px] text-amber">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIconLight() {
  return (
    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 mt-[3px]">
      <path d="M20 6 9 17l-5-5" stroke="rgba(252,251,252,0.60)" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const photoSolutions = solutions.filter((s) => s.photo);
const textSolutions = solutions.filter((s) => !s.photo);

export default function SolutionsGrid() {
  return (
    <section className="bg-paper" style={{ padding: "clamp(5rem,9vw,9rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <h2
            className="font-display font-bold uppercase text-amber text-balance"
            style={{ fontSize: "clamp(1.875rem,3.5vw,3rem)", lineHeight: 1.15, letterSpacing: "-0.015em" }}
          >
            What We Install
          </h2>
          <p
            className="font-body mt-3 max-w-lg text-muted"
            style={{ fontSize: "1rem", lineHeight: 1.65 }}
          >
            Each solution is deployed as a standalone system or integrated into a single unified control layer.
          </p>
        </AnimateIn>

        {/* Photo-header cards — first 3 solutions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {photoSolutions.map((s, i) => (
            <AnimateIn key={s.id} delay={i * 0.07}>
              <div className="rounded-lg overflow-hidden h-full flex flex-col bg-surface">
                {/* Photo strip */}
                <div className="relative shrink-0" style={{ height: "200px" }}>
                  <Image
                    src={s.photo!}
                    alt={s.photoAlt!}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(14,38,70,0.35)" }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end gap-3">
                    <span
                      className="font-body font-semibold text-amber"
                      style={{ fontSize: "1.25rem", lineHeight: 1, letterSpacing: "-0.02em" }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="font-body font-semibold text-paper"
                      style={{ fontSize: "clamp(0.9375rem,1.2vw,1.125rem)", lineHeight: 1.25 }}
                    >
                      {s.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p
                    className="font-body text-muted"
                    style={{ fontSize: "0.9rem", lineHeight: 1.65 }}
                  >
                    {s.desc}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckIcon />
                        <span
                          className="font-body text-navy"
                          style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Text-only cards — last 2 solutions */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {textSolutions.map((s, i) => (
            <AnimateIn key={s.id} delay={0.21 + i * 0.07}>
              <div
                className={`rounded-lg p-8 h-full transition-shadow duration-150 hover:shadow-[0_2px_8px_rgba(14,38,70,0.10)] ${s.dark ? "bg-navy" : "bg-surface"}`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="font-body font-semibold text-amber"
                    style={{
                      fontSize: "1.25rem",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.label}
                  </span>
                  <h3
                    className="font-body font-semibold mt-0.5 text-amber"
                    style={{
                      fontSize: "clamp(1.125rem,1.5vw,1.375rem)",
                      lineHeight: 1.25,
                    }}
                  >
                    {s.name}
                  </h3>
                </div>

                <p
                  className="font-body"
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: s.dark ? "rgba(252,251,252,0.60)" : "var(--color-muted)",
                    maxWidth: "58ch",
                  }}
                >
                  {s.desc}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      {s.dark ? <CheckIconLight /> : <CheckIcon />}
                      <span
                        className="font-body"
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.5,
                          color: s.dark ? "rgba(252,251,252,0.75)" : "var(--color-navy)",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
