import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Integration from "@/components/sections/Integration";
import Pricing from "@/components/sections/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Integration />
      <About />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}