import Image from "next/image";
import AnimateIn from "@/app/shared/ui/animate-in";

type Product = {
  name: string;
  spec: string;
  use: string;
};

type Category = {
  id: string;
  name: string;
  desc: string;
  products: Product[];
  dark?: boolean;
  photo?: string;
  photoAlt?: string;
};

const categories: Category[] = [
  {
    id: "gate-motors",
    name: "Gate Motors",
    photo: "https://images.unsplash.com/photo-1770756051811-1612ac8bedfa?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Modern white house with contemporary full-glass garage doors",
    desc: "Industrial and residential gate drive systems. Each motor is sized to the gate's weight, track length, and cycle frequency — not a default pick.",
    products: [
      {
        name: "BFT Deimos BT A600",
        spec: "Sliding gate — up to 600 kg, 10 m leaf",
        use: "Residential driveways with frequent daily use",
      },
      {
        name: "BFT Virgo BT",
        spec: "Swing gate — 4 m leaf, underground actuator",
        use: "Homes requiring a clean, motor-free finish",
      },
      {
        name: "FAAC 844 ER",
        spec: "Sliding gate — up to 800 kg, industrial duty",
        use: "Commercial entries and warehouse bays",
      },
      {
        name: "Nice Moon 1824",
        spec: "Swing gate — 200 kg, 24V brushless motor",
        use: "Light residential swing gates",
      },
      {
        name: "Centsys D5-Evo",
        spec: "Sliding gate — 500 kg, DC battery backup",
        use: "Properties requiring operation during power cuts",
      },
      {
        name: "Doorhan Shaft-50",
        spec: "Roll-up door drive — up to 50 kg door",
        use: "Garages, service bays, and storage units",
      },
    ],
  },
  {
    id: "smart-glass",
    name: "Smart Glass",
    dark: true,
    photo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Modern open-plan interior with large sliding glass doors",
    desc: "PDLC switchable technology — applied as retrofit film on existing glass or as pre-laminated panels for new installations. Both variants are app-controlled.",
    products: [
      {
        name: "PDLC Switchable Film",
        spec: "Retrofit — adheres to existing glass, custom cut",
        use: "Conference rooms, partitions, bathroom glass",
      },
      {
        name: "Pre-laminated Smart Glass",
        spec: "Tempered safety glass with embedded PDLC layer",
        use: "New builds, storefronts, and frameless partitions",
      },
      {
        name: "Smart Glass Control Module",
        spec: "Wall switch, RF remote, or app-integrated relay",
        use: "Control interface for any PDLC installation",
      },
    ],
  },
  {
    id: "cctv",
    name: "CCTV & IP Cameras",
    photo: "https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Two security cameras mounted on the exterior wall of a building",
    desc: "IP cameras from Hikvision and Dahua — the two most-supported brands for NVR compatibility, spare part availability, and software updates in the Philippines.",
    products: [
      {
        name: "Hikvision DS-2CD2183G2-I",
        spec: "8MP (4K) acupick dome, 40 m IR, IP67",
        use: "Outdoor perimeter with precise face and plate detail",
      },
      {
        name: "Hikvision DS-2CD2T47G2-L",
        spec: "4MP ColorVu bullet, full-color night, 60 m",
        use: "Driveways and entries — color even in low light",
      },
      {
        name: "Dahua IPC-HDW3849H-AS-PV",
        spec: "8MP smart dual-light eyeball, active deterrence",
        use: "High-risk zones needing visible deterrence",
      },
      {
        name: "Hikvision DS-7608NI-Q2/8P",
        spec: "8-channel NVR, 8× PoE, up to 12 MP decode",
        use: "8-camera systems with PoE powered cameras",
      },
      {
        name: "4-Channel CCTV Package",
        spec: "4× 4MP cameras + 4ch NVR + 2 TB HDD",
        use: "Standard residential or small office setup",
      },
      {
        name: "16-Channel CCTV Package",
        spec: "16× 4MP cameras + 16ch NVR + 4 TB HDD",
        use: "Full-perimeter commercial and warehouse coverage",
      },
    ],
  },
  {
    id: "lighting",
    name: "Lighting & Smart Switches",
    dark: true,
    desc: "Lighting automation components that work standalone or sync with gate and CCTV events. Switches replace standard wall plates without rewiring.",
    products: [
      {
        name: "Smart Wall Switch — 1 Gang",
        spec: "Wi-Fi, 10 A, neutral-wire required, app + voice",
        use: "Single-circuit rooms and corridors",
      },
      {
        name: "Smart Wall Switch — 3 Gang",
        spec: "Wi-Fi, 10 A per gang, timer and schedule support",
        use: "Living areas and offices with multiple circuits",
      },
      {
        name: "PIR Motion Sensor Floodlight",
        spec: "20 W LED, 180° coverage, adjustable sensitivity",
        use: "Driveways, perimeter walls, and carports",
      },
      {
        name: "Dusk-to-Dawn Light Sensor",
        spec: "Auto on at dusk, off at dawn, 220V AC",
        use: "Landscape and pathway lighting without scheduling",
      },
    ],
  },
  {
    id: "access",
    name: "Access Control",
    photo: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Gold smartphone held at a smart door lock for access control",
    desc: "Standalone or app-integrated access control — from basic magnetic locks to biometric multi-user systems with audit logs.",
    products: [
      {
        name: "ZKTeco F22 Biometric Reader",
        spec: "Fingerprint + RFID card, 3,000 user capacity",
        use: "Office entry and staff access control",
      },
      {
        name: "Electromagnetic Lock (EM Lock)",
        spec: "280 kg holding force, 12 V DC, fail-safe",
        use: "Controlled doors and gates requiring power to hold",
      },
      {
        name: "Electric Strike Lock",
        spec: "Fail-secure, 12/24 V DC, standard door frames",
        use: "Pedestrian entry doors and glass door systems",
      },
      {
        name: "Video Door Phone",
        spec: "7\" color monitor, HD camera, mobile app view",
        use: "Residential and small commercial entry screening",
      },
    ],
  },
];

function ProductRow({ p }: { p: Product }) {
  return (
    <div
      className="py-4 border-b"
      style={{ borderColor: "rgba(14,38,70,0.10)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
        <p
          className="font-body font-semibold text-navy"
          style={{ fontSize: "0.9375rem", lineHeight: 1.35 }}
        >
          {p.name}
        </p>
        <p
          className="font-body shrink-0 text-muted"
          style={{ fontSize: "0.8125rem", lineHeight: 1.4, maxWidth: "28ch", textAlign: "right" }}
        >
          {p.spec}
        </p>
      </div>
      <p
        className="font-body mt-1 text-muted"
        style={{ fontSize: "0.875rem", lineHeight: 1.55 }}
      >
        {p.use}
      </p>
    </div>
  );
}

function ProductRowDark({ p }: { p: Product }) {
  return (
    <div
      className="py-4 border-b"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
        <p
          className="font-body font-semibold text-paper"
          style={{ fontSize: "0.9375rem", lineHeight: 1.35 }}
        >
          {p.name}
        </p>
        <p
          className="font-body shrink-0"
          style={{ fontSize: "0.8125rem", lineHeight: 1.4, color: "rgba(252,251,252,0.45)", maxWidth: "28ch", textAlign: "right" }}
        >
          {p.spec}
        </p>
      </div>
      <p
        className="font-body mt-1"
        style={{ fontSize: "0.875rem", lineHeight: 1.55, color: "rgba(252,251,252,0.55)" }}
      >
        {p.use}
      </p>
    </div>
  );
}

export default function ProductsCatalog() {
  return (
    <>
      {categories.map((cat, ci) => (
        <section
          key={cat.id}
          className={cat.dark ? "bg-navy" : "bg-paper"}
          style={{ padding: "clamp(4rem,7vw,7rem) 0" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimateIn delay={0}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 gap-8">
                {/* Category label + desc */}
                <div className="lg:w-72 shrink-0">
                  <span
                    className={`font-body font-medium block mb-2 ${cat.dark ? "text-amber" : "text-muted"}`}
                    style={{ fontSize: "0.75rem", letterSpacing: "0.04em" }}
                  >
                    {String(ci + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                  </span>
                  <h2
                    className="font-display font-bold uppercase text-balance text-amber"
                    style={{
                      fontSize: "clamp(1.5rem,2.5vw,2.25rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {cat.name}
                  </h2>
                  <p
                    className="font-body mt-4"
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: cat.dark ? "rgba(252,251,252,0.60)" : "var(--color-muted)",
                      maxWidth: "30ch",
                    }}
                  >
                    {cat.desc}
                  </p>

                  {/* Category photo */}
                  {cat.photo && (
                    <div
                      className="mt-6 rounded-lg overflow-hidden relative"
                      style={{ height: "172px" }}
                    >
                      <Image
                        src={cat.photo}
                        alt={cat.photoAlt!}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 288px"
                      />
                      {cat.dark && (
                        <div
                          className="absolute inset-0"
                          style={{ background: "rgba(14,38,70,0.18)" }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Products list */}
                <div className="flex-1">
                  <div
                    className="border-t"
                    style={{ borderColor: cat.dark ? "rgba(255,255,255,0.12)" : "rgba(14,38,70,0.12)" }}
                  >
                    {cat.products.map((p) =>
                      cat.dark ? (
                        <ProductRowDark key={p.name} p={p} />
                      ) : (
                        <ProductRow key={p.name} p={p} />
                      )
                    )}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      ))}
    </>
  );
}
