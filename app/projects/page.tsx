"use client";

import Projects from "@/components/home/projects/Projects";
import Lenis from "lenis";
import { useLayoutEffect } from "react";

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
      <Projects />
    </main>
  );
};

export default page;
