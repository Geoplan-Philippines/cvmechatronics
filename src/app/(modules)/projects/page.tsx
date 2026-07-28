import type { Metadata } from "next";
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import ProjectsHero from "./_sections/hero";
import ProjectsList from "./_sections/list";

export const metadata: Metadata = {
  title: "Projects — CV Mechatronics",
  description:
    "Installed mechatronic systems by CV Mechatronics — gate automation, smart glass, CCTV surveillance, and centralized app control across Philippine properties.",
};

export const revalidate = 60;

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main>
        <ProjectsHero />
        <ProjectsList />
      </main>
      <Footer />
    </>
  );
}
