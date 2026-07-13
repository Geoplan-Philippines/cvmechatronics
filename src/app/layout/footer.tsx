import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-navy" style={{ borderTop: "1px solid rgba(252,251,252,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-3">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/assets/cv-mechatronics-logo-navy-variant.png"
                alt="CV Mechatronics"
                fill
                className="object-contain"
              />
            </div>
            <span
              className="font-display font-bold uppercase text-paper"
              style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em" }}
            >
              CV Mechatronics
            </span>
          </Link>
          <p
            className="font-body mt-2"
            style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(252,251,252,0.50)", maxWidth: "28ch" }}
          >
            Precision mechatronic systems for modern Philippine properties.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p
            className="font-body font-medium mb-4"
            style={{ fontSize: "0.8125rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "rgba(252,251,252,0.40)" }}
          >
            Navigation
          </p>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-body transition-colors duration-150 text-paper/65 hover:text-paper"
                  style={{ fontSize: "0.9375rem" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            className="font-body font-medium mb-4"
            style={{ fontSize: "0.8125rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "rgba(252,251,252,0.40)" }}
          >
            Contact
          </p>
          <ul className="space-y-2.5">
            <li>
              <a
                href="mailto:info@cvmechatronics.com"
                className="font-body transition-colors duration-150 text-paper/65 hover:text-paper"
                style={{ fontSize: "0.9375rem" }}
              >
                info@cvmechatronics.com
              </a>
            </li>
            <li>
              <a
                href="tel:+63000000000"
                className="font-body transition-colors duration-150 text-paper/65 hover:text-paper"
                style={{ fontSize: "0.9375rem" }}
              >
                +63 (0) 000 000 0000
              </a>
            </li>
            <li>
              <p
                className="font-body"
                style={{ fontSize: "0.9375rem", color: "rgba(252,251,252,0.40)" }}
              >
                Philippines
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 pb-8"
        style={{ borderTop: "1px solid rgba(252,251,252,0.06)" }}
      >
        <p
          className="font-body pt-6"
          style={{ fontSize: "0.8125rem", color: "rgba(252,251,252,0.28)" }}
        >
          © {new Date().getFullYear()} CV Mechatronics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
