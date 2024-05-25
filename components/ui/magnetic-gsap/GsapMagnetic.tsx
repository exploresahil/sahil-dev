"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: ReactNode;
}

export default function GsapMagnetic({ children }: Props) {
  const magnetic = useRef<HTMLElement | null>(null);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      magnetic.current?.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const rect = magnetic.current?.getBoundingClientRect();
        if (rect) {
          const { height, width, left, top } = rect;
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          xTo(x);
          yTo(y);
        }
      });
      magnetic.current?.addEventListener("mouseleave", (e) => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  return children
    ? React.cloneElement(children as React.ReactElement<any>, { ref: magnetic })
    : null;
}
