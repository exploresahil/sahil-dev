"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  data: {
    title: string;
    desc: string;
  }[];
}

const Accordian = ({ data }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const descVarients = {
    initial: {
      height: 0,
    },
    enter: {
      height: "auto",
    },
    exit: {
      height: 0,
    },
  };

  return (
    <div id="accordian">
      {data.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="accordian">
            <button onClick={() => handleToggle(i)}>{item.title}</button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  variants={descVarients}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="desc">
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
