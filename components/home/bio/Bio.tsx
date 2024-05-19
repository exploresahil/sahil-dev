"use client";

import { useRef } from "react";
import "./style.scss";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import SplitType from "split-type";

const Bio = () => {
  const bioMainRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement | any>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bio = new SplitType(bioRef.current, { types: "words" });

    gsap.fromTo(
      bio.words,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: bioMainRef.current,
          //markers: true,
          scrub: 0.2,
          start: "40% bottom",
          end: "center center",
        },
      }
    );

    gsap.fromTo(
      bioMainRef.current,
      {
        background:
          "radial-gradient(circle at 50% 0%, rgba(10, 54, 157, 0) 0%,transparent 100%), rgba(15, 15, 15, 1)",
      },
      {
        background:
          "radial-gradient(circle at 50% 0%, rgba(10, 54, 157, 0.5) 0%,transparent 100%), rgba(15, 15, 15, 1)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: bioMainRef.current,
          //markers: true,
          scrub: 0.2,
          start: "top bottom",
          end: "center center",
        },
      }
    );
  }, []);

  return (
    <section id="bio">
      <div className="bio-container" ref={bioMainRef}>
        <p ref={bioRef}>
          I'm a person who loves to take pictures and make things look pretty.
          I'm also a developer with a passion for front-end development and
          design.
        </p>
      </div>
    </section>
  );
};

export default Bio;
