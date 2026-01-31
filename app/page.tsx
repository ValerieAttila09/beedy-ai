import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}