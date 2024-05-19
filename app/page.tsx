"use client";
import About from "@/components/home/about/About";
import Hero from "@/components/home/hero/Hero";
import { useLayoutEffect } from "react";
import Lenis from "lenis";
import Bio from "@/components/home/bio/Bio";
import Skills from "@/components/home/skills/Skills";

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
    <>
      <Hero />
      <About />
      <Bio />
      <Skills />
    </>
  );
}
