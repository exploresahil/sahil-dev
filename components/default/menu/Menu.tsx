"use client";

import menuItem from "@/database/header";
import Link from "next/link";
import { motion } from "framer-motion";

import "./style.scss";
import { dropdownMenuSlide, dropdownMenuSlideTablet } from "@/utils/anim";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

interface MenuProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setMenuOpen }: MenuProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (!e.target || !(e.target instanceof Element)) return;

      if (!e.target.closest("#menu")) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener("click", closeMenu);

    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, [setMenuOpen]);

  return (
    <motion.div
      id="menu"
      variants={isMobile ? dropdownMenuSlide : dropdownMenuSlideTablet}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <nav>
        {menuItem.map((item, i) => (
          <Link
            onClick={() => {
              setMenuOpen(false);
            }}
            key={i}
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

export default Menu;
