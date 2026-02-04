import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Stats from "@/components/sections/Stats";
import Companies from "@/components/sections/Companies";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Companies />
      <Features />
      <Stats />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}