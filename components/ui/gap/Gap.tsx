"use client";

import { useEffect, useRef } from "react";
import "./style.scss";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GapProps {
  imageUrl: string;
  height: string;
}

const Gap = ({ imageUrl, height }: GapProps) => {
  const firstImg = useRef<HTMLImageElement>(null);
  const secondImg = useRef<HTMLImageElement>(null);
  const thirdImg = useRef<HTMLImageElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-200px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstImg.current, { xPercent: xPercent });
    gsap.set(secondImg.current, { xPercent: xPercent });
    gsap.set(thirdImg.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.02 * direction;
  };

  return (
    <div id="gap">
      <div className="img-container">
        <div className="slider" ref={slider}>
          <img
            className="svg"
            alt="Abstract Image"
            src={imageUrl}
            style={{ height: `${height}px` }}
            ref={firstImg}
          />

          <img
            className="svg"
            alt="Abstract Image"
            src={imageUrl}
            style={{ height: `${height}px` }}
            ref={secondImg}
          />
          <img
            className="svg"
            alt="Abstract Image"
            src={imageUrl}
            style={{ height: `${height}px` }}
            ref={thirdImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Gap;
