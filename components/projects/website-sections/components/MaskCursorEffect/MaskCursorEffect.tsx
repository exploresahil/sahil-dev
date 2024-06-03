"use client";

import { useEffect, useRef, useState } from "react";
import Warning from "../warning/Warning";
import "./style.scss";
import gsap from "gsap";

const MaskCursorEffect = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const maskElement = maskRef.current;
      if (!maskElement) return;

      const h2Element = maskElement.querySelector("h2");
      if (!h2Element) return;

      const { left, top, width, height } = h2Element.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const isMouseOverH2 =
        mouseX >= left &&
        mouseX <= left + width &&
        mouseY >= top &&
        mouseY <= top + height;

      if (isMouseOverH2) {
        maskElement.style.maskSize = "260px";
      } else {
        maskElement.style.maskSize = "20px";
      }

      const maskRect = maskElement.getBoundingClientRect();
      const offSetX = e.clientX - maskRect.left;
      const offSetY = e.clientY - maskRect.top;

      const newXPos = (offSetX / maskRect.width) * 100;
      const newYPos = (offSetY / maskRect.height) * 100;

      gsap.to(maskElement.style, {
        maskPosition: `${newXPos}% ${newYPos}%`,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      const maskElement = maskRef.current;
      if (maskElement) {
        maskElement.style.maskSize = "0px";
      }
    };

    if (mainRef.current) {
      mainRef.current.addEventListener("mousemove", handleMouseMove);
      maskRef.current?.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        mainRef.current?.removeEventListener("mousemove", handleMouseMove);
        maskRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <section id="maskCursor" className="removeCursor" ref={mainRef}>
      <Warning
        title="This section is best experienced in desktop or larger devices with cursor"
        desc="this section has a background that changes when mouse is hovered, please view in larger devices with cursor or view another section by tapping on the menu"
      />
      <div className="container">
        <div className="body">
          <h2>
            I craft <br />
            digital <br />
            experiences,
          </h2>
        </div>
        <div className="mask" ref={maskRef}>
          <h2>
            Turning <br />
            pixels into <br />
            possibilities.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MaskCursorEffect;
