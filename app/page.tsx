"use client";

import About from "@/components/home/about/About";
import Ask from "@/components/home/ask/Ask";
import Bio from "@/components/home/bio/Bio";
import HomeHero from "@/components/home/hero/HomeHero";
import Projects from "@/components/home/projects/Projects";
import Skills from "@/components/home/skills/Skills";
import Workflow from "@/components/home/workflow/Workflow";
import Spacer from "@/components/ui/spacer/Spacer";
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
      <Spacer />
      <Skills />
      <Spacer />
      <Projects />
      <Workflow />
      <Ask />
    </main>
  );
}
