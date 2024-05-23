"use client";

import "./style.scss";
import LinkButton from "../ui/link-button/LinkButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Star from "../ui/svg/Star";

const PageNotFound = () => {
  const firstText = useRef<HTMLHeadingElement>(null);
  const secondText = useRef<HTMLHeadingElement>(null);
  const thirdText = useRef<HTMLHeadingElement>(null);

  const loop = [
    {
      ref: firstText,
    },
    {
      ref: secondText,
    },
    {
      ref: thirdText,
    },
  ];

  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (firstText.current && secondText.current && thirdText.current) {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      gsap.set(thirdText.current, { xPercent: xPercent });
      xPercent += 0.05 * direction;
      requestAnimationFrame(animation);
    }
  };

  return (
    <section id="notFound">
      <div className="slider-container">
        <div className="slider">
          {loop.map((item, i) => (
            <h2 key={i} ref={item.ref}>
              {new Array(3).fill("").map((_, index) => (
                <>
                  <span key={index}>
                    <Star size={50} position="relative" />
                  </span>{" "}
                  404{" "}
                </>
              ))}
            </h2>
          ))}
        </div>
      </div>
      <div className="text-container">
        <p>Page not found</p>
        <LinkButton href="/">Return Home</LinkButton>
      </div>
    </section>
  );
};

export default PageNotFound;
