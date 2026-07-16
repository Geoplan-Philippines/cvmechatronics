"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const MotionLink = motion.create(Link);

const links = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return pathname === href;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--color-paper)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(14,38,70,0.08)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(14,38,70,0.10)" : "none",
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 shrink-0">
              <Image
                src="/assets/cv-mechatronics-logo.png"
                alt=""
                fill
                className="object-contain transition-opacity duration-300"
                style={{ opacity: scrolled ? 1 : 0 }}
              />
              <Image
                src="/assets/cv-mechatronics-logo-navy-variant.png"
                alt="CV Mechatronics"
                fill
                className="object-contain transition-opacity duration-300 absolute inset-0"
                style={{ opacity: scrolled ? 0 : 1 }}
              />
            </div>
            <span
              className="font-display font-bold uppercase transition-colors duration-300"
              style={{
                color: scrolled ? "var(--color-navy)" : "var(--color-paper)",
                fontSize: "1.0625rem",
                letterSpacing: "-0.01em",
              }}
            >
              CV Mechatronics
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body font-medium transition-opacity duration-150 hover:opacity-60"
                style={{
                  color: scrolled ? "var(--color-navy)" : "var(--color-paper)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.02em",
                  borderBottom: isActive(l.href) ? "2px solid var(--color-amber)" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-amber hover:bg-amber-deep rounded-md transition-colors duration-150"
              style={{ fontSize: "0.8125rem", padding: "10px 22px" }}
            >
              Contact
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.25 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {[
              open ? "translateY(6px) rotate(45deg)" : "none",
              null,
              open ? "translateY(-6px) rotate(-45deg)" : "none",
            ].map((transform, i) =>
              i === 1 ? (
                <span
                  key={i}
                  className="block w-5 h-0.5 transition-all duration-200"
                  style={{
                    backgroundColor: scrolled || open ? "var(--color-navy)" : "var(--color-paper)",
                    opacity: open ? 0 : 1,
                  }}
                />
              ) : (
                <span
                  key={i}
                  className="block w-5 h-0.5 transition-all duration-200 origin-center"
                  style={{
                    backgroundColor: open ? "var(--color-paper)" : scrolled ? "var(--color-navy)" : "var(--color-paper)",
                    transform: transform ?? "none",
                  }}
                />
              )
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            <div className="flex flex-col gap-1 pt-24 px-8">
              {links.map((l, i) => (
                <MotionLink
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="font-display font-bold uppercase text-paper py-4 border-b border-paper/10"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.01em" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </MotionLink>
              ))}
              <MotionLink
                href="/contacts"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-amber hover:bg-amber-deep rounded-md transition-colors duration-150 mt-8 self-start"
                style={{ fontSize: "0.9rem", padding: "14px 32px" }}
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </MotionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
