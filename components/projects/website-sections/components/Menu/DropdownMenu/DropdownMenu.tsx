"use client";

import "./style.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../db";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  //handle toggle
  const handleToggle = () => {
    setOpen(!open);
  };

  const menuVariants = {
    initial: { y: "calc(-100% - 100px)" },
    enter: {
      y: "0",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: "calc(-100% - 100px)",

      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const itemVariants = {
    initial: {
      y: 10,
      x: 10,
      opacity: 0,
    },
    enter: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: 10,
      x: 10,
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const navVariants = {
    enter: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="menu-cont menuOne">
      <h2>Dropdown Menu</h2>
      <div className="page-cont">
        <div className="header">
          <h2>Menu</h2>
          <div className="menu">
            <button onClick={handleToggle}>
              <div className={`slider ${open ? "slider-close" : ""}`}>
                <span>menu</span>
                <span>close</span>
              </div>
            </button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              variants={menuVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.h3
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
              >
                Menu
              </motion.h3>
              <motion.div
                variants={navVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="nav-items"
              >
                {menuItems.map((item, id) => (
                  <motion.a variants={itemVariants} href="#" key={id}>
                    {item.title}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DropdownMenu;
