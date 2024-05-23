"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const ParagraphMotion = ({ text }: { text: string }) => {
  const element = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.6", "start 0.1"],
  });

  const springConfig = { damping: 20, duration: 2 };
  const spring = useSpring(scrollYProgress, springConfig);
  const words = text.split(" ");

  return (
    <div className="container">
      <p id="shadow">
        {words.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </p>
      <p ref={element}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const range = [start, end];
          const opacity = useTransform(spring, range, [0, 1]);

          return (
            <>
              <motion.span
                style={{ opacity: opacity }}
                transition={{
                  ease: "linear",
                }}
                key={i}
              >
                {word}
              </motion.span>
            </>
          );
        })}
      </p>
    </div>
  );
};

export default ParagraphMotion;
