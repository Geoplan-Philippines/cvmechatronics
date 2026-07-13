import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";
import Hero from "./_sections/hero";
import Services from "./_sections/services";
import Process from "./_sections/process";
import WhyUs from "./_sections/why-us";
import Testimonials from "./_sections/testimonials";
import CTASection from "./_sections/cta-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
