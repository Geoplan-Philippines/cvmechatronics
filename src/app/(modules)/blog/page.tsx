import type { Metadata } from "next";
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import BlogHero from "./_sections/hero";
import BlogList from "./_sections/list";

export const metadata: Metadata = {
  title: "Blog — CV Mechatronics",
  description:
    "News, guides, and product spotlights on gate automation, smart glass, CCTV surveillance, and centralized app control from CV Mechatronics.",
};

export const revalidate = 60;

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        <BlogHero />
        <BlogList />
      </main>
      <Footer />
    </>
  );
}

