"use client";

import { useState, type FormEvent, type CSSProperties } from "react";
import { motion } from "motion/react";

const ease = [0.25, 1, 0.5, 1] as const;

const SERVICE_OPTIONS = [
  "Gate Automation",
  "Smart Glass Tint",
  "CCTV & Security",
  "Automated Lighting",
  "Centralized App Control",
];

const inputStyle: CSSProperties = {
  width: "100%",
  backgroundColor: "var(--color-surface)",
  border: "1px solid transparent",
  borderRadius: "6px",
  padding: "12px 14px",
  fontSize: "0.9375rem",
  color: "var(--color-navy)",
  outline: "none",
  transition: "border-color 150ms ease",
};

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-body font-medium text-muted"
        style={{ fontSize: "0.8125rem", letterSpacing: "0.02em" }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="font-body text-red-600 text-xs" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const contactItems = [
  {
    label: "Phone",
    value: "+63 (0) 000 000 0000",
    href: "tel:+63000000000",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="text-amber">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.98 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.89a16 16 0 006.86 6.86l1.26-1.26a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@cvmechatronics.com",
    href: "mailto:info@cvmechatronics.com",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="text-amber">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Philippines",
    href: null,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="text-amber">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
];

const nextSteps = [
  "We review your inquiry and get back within one business day.",
  "We schedule a free on-site assessment at your convenience.",
  "You receive a detailed quote — no hidden costs, no pressure.",
];

export default function Inquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState("Residential");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (!name.trim()) next.name = "Full name is required.";
    if (!phone.trim()) next.phone = "Phone number is required.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    const subject = `Inquiry from ${name} — ${propertyType} Property`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Property type: ${propertyType}`,
      `Services: ${selectedServices.join(", ") || "Not specified"}`,
      "",
      "Message:",
      message,
    ].join("\n");
    window.location.href = `mailto:info@cvmechatronics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section className="bg-paper" style={{ padding: "clamp(4rem,7vw,7rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-16 xl:gap-24 items-start">

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-5 py-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(237,157,24,0.12)" }}
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="text-amber">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2
                  className="font-display font-bold uppercase text-amber"
                  style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", letterSpacing: "-0.015em", lineHeight: 1.1 }}
                >
                  Inquiry sent.
                </h2>
                <p className="font-body text-muted" style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: "46ch" }}>
                  We&apos;ll review your message and reach out within one business day.
                  Your email client may have opened a draft — feel free to close it if so.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Full name" id="name" error={errors.name}>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      placeholder="Juan dela Cruz"
                      style={inputStyle}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-amber)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
                    />
                  </Field>
                  <Field label="Phone number" id="phone" error={errors.phone}>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                      }}
                      placeholder="+63 9XX XXX XXXX"
                      style={inputStyle}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      aria-invalid={!!errors.phone}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-amber)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
                    />
                  </Field>
                </div>

                {/* Email */}
                <Field label="Email address (optional)" id="email">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="juan@example.com"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-amber)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  />
                </Field>

                {/* Property type */}
                <div className="flex flex-col gap-2.5">
                  <span
                    className="font-body font-medium text-muted"
                    style={{ fontSize: "0.8125rem", letterSpacing: "0.02em" }}
                  >
                    Property type
                  </span>
                  <div className="flex gap-4" role="radiogroup" aria-label="Property type">
                    {["Residential", "Commercial"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer font-body text-navy"
                        style={{ fontSize: "0.9375rem" }}
                      >
                        <input
                          type="radio"
                          name="propertyType"
                          value={type}
                          checked={propertyType === type}
                          onChange={() => setPropertyType(type)}
                          className="accent-amber cursor-pointer w-4 h-4"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-3">
                  <span
                    className="font-body font-medium text-muted"
                    style={{ fontSize: "0.8125rem", letterSpacing: "0.02em" }}
                  >
                    Services you&apos;re interested in
                  </span>
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Services">
                    {SERVICE_OPTIONS.map((s) => {
                      const active = selectedServices.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          aria-pressed={active}
                          className="font-body font-medium rounded-md transition-all duration-150"
                          style={{
                            fontSize: "0.8125rem",
                            padding: "8px 14px",
                            backgroundColor: active ? "rgba(237,157,24,0.12)" : "var(--color-surface)",
                            color: active ? "var(--color-amber-deep)" : "var(--color-muted)",
                            border: `1px solid ${active ? "rgba(237,157,24,0.45)" : "transparent"}`,
                          }}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <Field label="Tell us about your project" id="message">
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your property, the systems you're interested in, or any specific requirements..."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-amber)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  />
                </Field>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.04em] text-paper bg-amber hover:bg-amber-deep rounded-md transition-all duration-150 hover:-translate-y-px"
                    style={{ fontSize: "0.8125rem", padding: "14px 32px" }}
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
            className="flex flex-col gap-10"
          >
            {/* Contact details */}
            <div>
              <h2
                className="font-display font-bold uppercase text-navy mb-6"
                style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
              >
                Reach Us Directly
              </h2>
              <ul className="flex flex-col gap-5">
                {contactItems.map(({ label, value, href, icon }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(237,157,24,0.10)" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p
                        className="font-body font-medium text-muted"
                        style={{ fontSize: "0.8125rem", marginBottom: "2px" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-body transition-colors duration-150 text-navy hover:text-amber"
                          style={{ fontSize: "0.9375rem" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-navy" style={{ fontSize: "0.9375rem" }}>
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div
              style={{
                borderTop: "1px solid rgba(14,38,70,0.08)",
                paddingTop: "2rem",
              }}
            >
              <h3
                className="font-display font-bold uppercase text-navy mb-3"
                style={{ fontSize: "0.9375rem", letterSpacing: "-0.005em" }}
              >
                Office Hours
              </h3>
              <p className="font-body text-muted" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                Monday – Saturday<br />
                8:00 AM – 5:00 PM
              </p>
            </div>

            {/* What happens next */}
            <div
              style={{
                borderTop: "1px solid rgba(14,38,70,0.08)",
                paddingTop: "2rem",
              }}
            >
              <h3
                className="font-display font-bold uppercase text-navy mb-5"
                style={{ fontSize: "0.9375rem", letterSpacing: "-0.005em" }}
              >
                What Happens Next
              </h3>
              <ol className="flex flex-col gap-4">
                {nextSteps.map((text, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="font-display font-bold shrink-0 text-amber"
                      style={{ fontSize: "0.875rem", lineHeight: "1.6rem" }}
                    >
                      {i + 1}
                    </span>
                    <p className="font-body text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
