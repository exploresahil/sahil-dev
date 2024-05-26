"use client";

import { navItemsType } from "@/components/projects/db";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import "./style.scss";
import { CgClose } from "react-icons/cg";
import Star from "@/components/ui/svg/Star";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideLeft } from "@/utils/anim";
import AnimatedText from "@/components/ui/animated-text/AnimatedText";

type Props = {
  setSelectedData: Dispatch<SetStateAction<string>>;
  data: navItemsType[];
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Dropdown = ({ setSelectedData, data, isOpen, setOpen }: Props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(0);

  const handleItemClick = (index: number, title: string) => {
    setSelectedItemIndex(index);
    setSelectedData(title);
    setOpen(false);
  };

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (!e.target || !(e.target instanceof Element)) return;

      if (!e.target.closest("#productsNav")) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", closeMenu);

    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, [setOpen]);

  return (
    <div id="projectsDropdown">
      <button onClick={() => setOpen(true)}>
        <AnimatedText text="menu" />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={opacity}
            initial="initial"
            animate="enter"
            exit="exit"
            className="menu-cont"
          >
            <motion.nav
              variants={slideLeft}
              initial="initial"
              animate="enter"
              exit="exit"
              id="productsNav"
            >
              <div className="title">
                <h2>Website Sections</h2>
                <button onClick={() => setOpen(false)}>
                  <CgClose />
                </button>
              </div>
              <div className="links">
                {data.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      onClick={() => handleItemClick(i, item.title)}
                      href={`/projects/website-sections/${item.slug}`}
                    >
                      {item.title}{" "}
                      {selectedItemIndex === i ? (
                        <Star fill="#e3e3e2" position="relative" />
                      ) : (
                        ""
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
