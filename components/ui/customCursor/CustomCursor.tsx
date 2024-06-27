"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useCursor } from "@/context/CursorContext";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";

const CustomCursor: React.FC = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const { cursorSize, cursorPosition, setCursorPosition, setCursorSize } =
    useCursor();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoverScale, setHoverScale] = useState(1);

  const x = useMotionValue(cursorPosition.x);
  const y = useMotionValue(cursorPosition.y);

  useLayoutEffect(() => {
    setHoverScale(1);
    if (isDesktop) {
      const moveCursor = (e: MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", moveCursor);

      const handleMouseEnter = (scale: number) => {
        setIsHovered(true);
        setHoverScale(scale);
      };
      const handleMouseLeave = () => setIsHovered(false);

      document.querySelectorAll(".cursorScale").forEach((element) => {
        const scale = parseFloat(element.getAttribute("data-scale") || "1");
        element.addEventListener("mouseenter", () => handleMouseEnter(scale));
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      document.querySelectorAll(".removeCursor").forEach((element) => {
        element.addEventListener("mouseenter", () => setIsVisible(false));
        element.addEventListener("mouseleave", () => setIsVisible(true));
      });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.querySelectorAll(".cursorScale").forEach((element) => {
          element.removeEventListener("mouseenter", () => handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        });
        document.querySelectorAll(".removeCursor").forEach((element) => {
          element.removeEventListener("mouseenter", () => setIsVisible(false));
          element.removeEventListener("mouseleave", () => setIsVisible(true));
        });
      };
    }
  }, [setCursorPosition]);

  useEffect(() => {
    animate(x, cursorPosition.x - cursorSize / 2, {
      type: "tween",
      duration: 0.1,
    });
    animate(y, cursorPosition.y - cursorSize / 2, {
      type: "tween",
      duration: 0.1,
    });
  }, [cursorPosition, cursorSize, x, y]);

  if (isDesktop)
    return (
      <motion.div
        className="custom-cursor"
        style={{
          width: cursorSize,
          height: cursorSize,
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          translateX: x,
          translateY: y,
        }}
        animate={{
          scale: isHovered ? hoverScale : 1,
          opacity: isVisible ? 1 : 0,
          transition: {
            scale: { type: "tween", duration: 0.3 },
            opacity: { type: "tween", duration: 0.1 },
          },
        }}
      />
    );
  else return null;
};

export default dynamic(() => Promise.resolve(CustomCursor), {
  ssr: false,
});
