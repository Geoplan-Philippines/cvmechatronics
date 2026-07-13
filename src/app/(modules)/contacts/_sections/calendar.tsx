import * as motion from "motion/react-client";

const ease = [0.25, 1, 0.5, 1] as const;

export default function CalendarSection() {
  return (
    <section style={{ backgroundColor: "var(--color-surface)", padding: "clamp(4rem,7vw,7rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col gap-10"
        >
          <div>
            <p
              className="font-body font-medium uppercase text-amber mb-3"
              style={{ fontSize: "0.8125rem", letterSpacing: "0.1em" }}
            >
              Book a Consultation
            </p>
            <h2
              className="font-display font-bold uppercase text-navy"
              style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", letterSpacing: "-0.015em", lineHeight: 1.1 }}
            >
              Schedule an Appointment
            </h2>
            <p
              className="font-body mt-3"
              style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--color-muted)", maxWidth: "48ch" }}
            >
              Pick a date and time that works for you — book a free on-site consultation directly and we&apos;ll confirm your slot.
            </p>
          </div>

          <div
            className="w-full overflow-hidden rounded-lg"
            style={{
              border: "1px solid rgba(14,38,70,0.08)",
              boxShadow: "0 2px 16px rgba(14,38,70,0.06)",
              backgroundColor: "#fff",
            }}
          >
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0kwyMMEwGRDvJGVgx5GRQ5n1h8S5GfhNo3zdRgIaLYokTpWKbT0fJK5kQF1wMF7nB8ndalU7g6?gv=true"
              style={{ border: 0, display: "block", width: "100%", minHeight: "700px" }}
              height="700"
              frameBorder={0}
              title="Book an appointment with CV Mechatronics"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
