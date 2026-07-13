import type { Metadata } from "next";
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import ContactsHero from "./_sections/hero";
import Inquiry from "./_sections/inquiry";

export const metadata: Metadata = {
  title: "Contact Us — CV Mechatronics",
  description:
    "Request a free on-site consultation for gate automation, smart glass, CCTV, and centralized control systems. Serving residential and commercial properties in the Philippines.",
};

export default function ContactsPage() {
  return (
    <>
      <Nav />
      <main>
        <ContactsHero />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
