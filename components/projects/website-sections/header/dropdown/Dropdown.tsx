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
import { usePathname } from "next/navigation";

type Props = {
  setSelectedData: Dispatch<SetStateAction<string>>;
  data: navItemsType[];
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Dropdown = ({ setSelectedData, data, isOpen, setOpen }: Props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(0);

  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  useEffect(() => {
    const matchingNavItem = data.findIndex((item) => item.slug === currentSlug);
    if (matchingNavItem !== -1) {
      setSelectedItemIndex(matchingNavItem);
      setSelectedData(data[matchingNavItem].title);
    }
  }, [currentSlug, data, setSelectedData]);

  const handleItemClick = (index: number, title: string) => {
    setSelectedItemIndex(index);
    setSelectedData(title);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="projectsDropdown">
      <button onClick={() => setOpen(true)} className="removeCursor">
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
            onClick={handleClose}
          >
            <motion.nav
              variants={slideLeft}
              initial="initial"
              animate="enter"
              exit="exit"
              id="productsNav"
              onClick={(e) => e.stopPropagation()}
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
