import menuItem from "@/database/header";
import Link from "next/link";
import { motion } from "framer-motion";

import "./style.scss";
import { dropdownMenuSlide, dropdownMenuSlideTablet } from "@/utils/anim";
import { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "react-responsive";

interface MenuProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setMenuOpen }: MenuProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  if (isMobile) {
    return (
      <motion.div
        variants={dropdownMenuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        id="menu"
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
  } else {
    return (
      <motion.div
        id="menu"
        variants={dropdownMenuSlideTablet}
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
  }
};

export default Menu;
