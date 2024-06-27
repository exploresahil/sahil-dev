"use client";

import Star from "@/components/ui/svg/Star";
import "./style.scss";
import Image from "next/image";
import ImageSize from "@/utils/image-utils";
import sahil from "@/public/assets/images/profile/sahil-hero.jpg";
import { BiDownArrowAlt } from "react-icons/bi";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { homeTextVariants, homeWordVariants } from "@/utils/anim";
import Link from "next/link";
import { useEffect, useLayoutEffect } from "react";
import Lenis from "lenis";

const HomeHero = () => {
  const title = "Sahil Satpute";
  const { scrollYProgress } = useScroll();
  const springConfig = { damping: 40 };
  const spring = useSpring(scrollYProgress, springConfig);
  const yPosition = useTransform(spring, [0, 1], [0, -200]);
  const words = title.split(" ");

  useLayoutEffect(() => {}, []);

  return (
    <section id="homeHero">
      <div className="container">
        <motion.h2
          animate={{
            y: [-30, 0],
            opacity: [0, 1],
            transition: {
              type: "spring",
              damping: 20,
              duration: 0.2,
              delay: 0.5,
            },
          }}
        >
          Full Stack Designer
        </motion.h2>
        <motion.h1 variants={homeTextVariants} animate="animate">
          {words.map((word, i) => (
            <motion.span variants={homeWordVariants} key={i}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="star"
          animate={{
            opacity: [0, 1],
            transition: { delay: 1.25 },
          }}
        >
          <Star right="0" top="55%" y="-50%" />
        </motion.div>
      </div>
      <motion.div
        className="img-cont cursorScale"
        data-scale="10"
        style={{ y: yPosition }}
        animate={{
          opacity: [0, 1],
          transition: { delay: 1.5, duration: 0.5 },
        }}
      >
        <Image
          src={sahil}
          alt="Profile picture of sahil satpute"
          fill
          sizes={ImageSize.cardSize}
        />
      </motion.div>
      <motion.div
        className="sub"
        animate={{
          opacity: [0, 1],
          transition: { delay: 2, duration: 1 },
        }}
      >
        <p>
          I craft digital experiences, <br></br> Turning pixels into
          possibilities.
        </p>

        <Link
          onClick={(e) => {
            e.preventDefault();
            const lenis = new Lenis();
            lenis.scrollTo("#homeProjects");

            function raf(time: any) {
              lenis.raf(time);
              requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
          }}
          href="#homeProjects"
          className="scroll cursorScale"
          data-scale="5"
        >
          projects <BiDownArrowAlt />
        </Link>
      </motion.div>
    </section>
  );
};

export default HomeHero;
