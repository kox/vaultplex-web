import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaultplex",
  description: "Project to provide a support standard to build customized and tokenized vaults to perform any kind of DEFI, crowfunding, smart accounts and many other possible solutions.",
  // other metadata
};


export default function Home() {
  return (
    <>
      <ScrollUp />
    
      <Hero />

      <Features />

      <Video />

      <Brands />

      <AboutSectionOne />
      
      <AboutSectionTwo />

      <Contact />
    </>
  );
}
