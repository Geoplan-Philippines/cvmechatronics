import type { Metadata } from "next";
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import ProductsHero from "./_sections/hero";
import ProductsCatalog from "./_sections/catalog";
import QualityStandard from "./_sections/quality";
import ProductsCTA from "./_sections/cta";

export const metadata: Metadata = {
  title: "Products — CV Mechatronics",
  description:
    "Gate motors, PDLC smart glass, IP cameras, NVR systems, and access control hardware. Premium-grade products from established manufacturers.",
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main>
        <ProductsHero />
        <ProductsCatalog />
        <QualityStandard />
        <ProductsCTA />
      </main>
      <Footer />
    </>
  );
}
