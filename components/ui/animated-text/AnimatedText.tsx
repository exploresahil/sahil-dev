"use client";
import useResponsive from "@/hooks/useResponsive";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

const AnimatedText = ({ text }: Props) => {
  const { breakpoint } = useResponsive();

  const words = text.split(" ").map((word) => word.split(""));

  const letterVariants = {
    initial: {
      y: 0,
    },
    hover: {
      y: [0, -2, 0],

      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  if (breakpoint === "large") {
    return (
      <motion.span
        initial="initial"
        whileHover="hover"
        variants={containerVariants}
        style={{ display: "flex", gap: "3px" }}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="anim-word"
            style={{ display: "flex" }}
          >
            {word.map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                variants={letterVariants}
                className="anim-char"
                style={{ display: "block" }}
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex < words.length - 1}
          </span>
        ))}
      </motion.span>
    );
  } else {
    return <>{text}</>;
  }
};

export default AnimatedText;
