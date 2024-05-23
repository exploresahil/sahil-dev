import { MouseEventHandler, ReactNode } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./style.scss";
import { buttonBackgroundAnim, buttonTextAnim } from "@/utils/anim";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  id?: string;
}

const Button = ({
  children,
  onClick,
  className,
  id = "button",
}: ButtonProps) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.5 }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      onClick={onClick}
      className={className}
      id={id}
    >
      <motion.span
        variants={buttonTextAnim}
        initial="initial"
        animate="animate"
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
        }}
      >
        {children}
      </motion.span>
      <motion.span
        variants={buttonBackgroundAnim}
        initial="initial"
        animate="animate"
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
        }}
      />
    </motion.button>
  );
};

export default Button;
