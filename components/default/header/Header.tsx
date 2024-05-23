"use client";

import Button from "@/components/ui/button/Button";
import "./style.scss";
import Link from "next/link";
import { useState } from "react";
import Menu from "../menu/Menu";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header>
      <div className="header-container">
        <Link href="/">
          <h2>Sahil Satpute</h2>
        </Link>
        <Button
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? "Close" : "Projects"}
        </Button>
      </div>
      <AnimatePresence mode="wait">
        {isMenuOpen && <Menu setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
