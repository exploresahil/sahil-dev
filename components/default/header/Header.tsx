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
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 89.12 107.99"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="m45.28,107.99c-14.42,0-25.54-3.19-33.38-9.58C4.06,92.02.1,83.12,0,71.7h23.8c.1,6.39,1.96,10.84,5.59,13.35,3.63,2.52,9.22,3.77,16.76,3.77,11.71,0,17.56-3.97,17.56-11.9,0-3.48-1.28-6.07-3.85-7.76-2.57-1.69-7.48-3.22-14.73-4.57l-8.42-1.6C13.69,59.12,2.18,48.33,2.18,30.62c0-9.38,3.51-16.84,10.52-22.35C19.71,2.76,29.66,0,42.53,0c13.74,0,24.24,2.9,31.5,8.71,7.26,5.81,11.13,14.13,11.61,24.96h-23.22c-.29-5.03-1.96-8.71-5.01-11.03s-7.86-3.48-14.44-3.48c-10.55,0-15.82,3.48-15.82,10.45,0,3.48,1.28,6.15,3.85,7.98,2.56,1.84,7.13,3.39,13.72,4.64l8.71,1.6c12.48,2.23,21.55,5.83,27.21,10.81,5.66,4.98,8.49,11.88,8.49,20.68,0,10.55-3.87,18.63-11.61,24.24-7.74,5.61-18.48,8.42-32.22,8.42Z" />
            </g>
          </svg>
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
