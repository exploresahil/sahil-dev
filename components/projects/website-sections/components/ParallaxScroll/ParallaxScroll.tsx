"use client";

import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import "./style.scss";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ImageSize from "@/utils/image-utils";
import { data } from "./db";
import { useMediaQuery } from "react-responsive";

const ParallaxScroll = () => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLElement | null>(null);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 820px)",
  });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const markers = false;

      gsap.to(parallaxRef.current, {
        scrollTrigger: {
          trigger: parallaxRef.current,
          markers: markers,
          scrub: 0.02,
          start: isDesktop
            ? "8% center"
            : isTablet
            ? "7% center"
            : "10% center",
          end: isDesktop
            ? "bottom 95%"
            : isTablet
            ? "bottom 90%"
            : "bottom 80%",
          pin: textRef.current,
        },
      });

      gsap.to(".img-cont-0", {
        y: isDesktop ? -500 : -100,
        scrollTrigger: {
          trigger: ".img-cont-0",
          markers: markers,
          scrub: 0.02,
          start: "-150% top",
          end: "bottom top",
        },
      });

      gsap.to(".img-cont-1", {
        y: isDesktop ? 100 : 60,
        scrollTrigger: {
          trigger: ".img-cont-1",
          markers: markers,
          scrub: 0.02,
          start: "-150% top",
          end: "bottom top",
        },
      });

      gsap.to(".img-cont-2", {
        y: isDesktop ? -140 : -40,
        scrollTrigger: {
          trigger: ".img-cont-2",
          markers: markers,
          scrub: 0.02,
          start: "-150% top",
          end: "bottom top",
        },
      });

      gsap.to(".img-cont-3", {
        y: isDesktop ? 100 : -20,
        scrollTrigger: {
          trigger: ".img-cont-3",
          markers: markers,
          scrub: 0.02,
          start: "-150% top",
          end: "bottom top",
        },
      });

      gsap.to(".img-cont-4", {
        y: 80,
        scrollTrigger: {
          trigger: ".img-cont-4",
          markers: markers,
          scrub: 0.02,
          start: "-150% top",
          end: "bottom top",
        },
      });

      gsap.to(".img-cont-5", {
        y: -100,
        scrollTrigger: {
          trigger: ".img-cont-5",
          markers: markers,
          scrub: 0.02,
          start: "-150% top",
          end: "bottom top",
        },
      });

      gsap.to(".img-cont-6", {
        y: 60,
        scrollTrigger: {
          trigger: ".img-cont-6",
          markers: markers,
          scrub: 0.02,
          start: "-150% top",
          end: "bottom top",
        },
      });
    },
    { scope: container }
  );

  return (
    <section id="parallaxScroll" ref={container}>
      <div className="scroll-down">
        <p>
          scroll <BiDownArrowAlt />
        </p>
      </div>
      <div className="parallax-cont" ref={parallaxRef}>
        <div className="text" ref={textRef}>
          <p>Life is too short to drive ordinary vehicles</p>
        </div>
        {data.map((img, i) => (
          <div key={i} className={`img-cont img-cont-${i}`}>
            <Image
              src={img.src}
              alt="car image"
              fill
              sizes={ImageSize.cardSize}
            />
          </div>
        ))}
      </div>
      <div className="scroll-up">
        <p>
          scroll <BiUpArrowAlt />
        </p>
      </div>
    </section>
  );
};

export default ParallaxScroll;
