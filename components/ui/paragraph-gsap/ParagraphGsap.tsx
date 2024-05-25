"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { CustomEase } from "gsap/CustomEase";
import { useMediaQuery } from "react-responsive";

const ParagraphGsap = ({ text }: { text: string }) => {
  const bioMainRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement | any>(null);
  const words = text.split(" ");

  const isTablet = useMediaQuery({
    query: "(min-width: 820px)",
  });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    if (bioRef.current && bioMainRef.current) {
      //console.log("bioRef->", bioRef.current.querySelectorAll("span"));

      const sapns = bioRef.current.querySelectorAll("span");

      gsap.fromTo(
        sapns,
        {
          y: 30,
          x: 10,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          ease: CustomEase.create("cubic-bezier", "0.45, 0, 0.55, 1"),
          scrollTrigger: {
            trigger: bioMainRef.current,
            //markers: true,
            scrub: 0.02,
            start: isTablet ? "center bottom" : "25% bottom",
            end: isTablet ? "center 60%" : "center center",
          },
        }
      );
    }
  }, []);

  return (
    <div className="container" ref={bioMainRef}>
      <p ref={bioRef}>
        {words.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </p>
    </div>
  );
};

export default ParagraphGsap;
