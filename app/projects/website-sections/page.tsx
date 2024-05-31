"use client";

import Hero from "@/components/projects/website-sections/hero/Hero";
import Lenis from "lenis";
import React, { useLayoutEffect } from "react";

const page = () => {
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
      <Hero />
    </main>
  );
};

export default page;
