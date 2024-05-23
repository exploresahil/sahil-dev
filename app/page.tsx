"use client";

import About from "@/components/home/about/About";
import Bio from "@/components/home/bio/Bio";
import HomeHero from "@/components/home/hero/HomeHero";
import Skills from "@/components/home/skills/Skills";
import Lenis from "lenis";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <HomeHero />
      <About />
      <Bio />
      <Skills />
    </main>
  );
}
