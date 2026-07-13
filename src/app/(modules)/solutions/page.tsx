import type { Metadata } from "next";
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import SolutionsHero from "./_sections/hero";
import SolutionsGrid from "./_sections/grid";
import Applications from "./_sections/applications";
import SolutionsCTA from "./_sections/cta";

export const metadata: Metadata = {
  title: "Solutions — CV Mechatronics",
  description:
    "Gate automation, smart glass, CCTV surveillance, automated lighting, and centralized app control for residential and commercial properties.",
};

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <SolutionsHero />
        <SolutionsGrid />
        <Applications />
        <SolutionsCTA />
      </main>
      <Footer />
    </>
  );
}
