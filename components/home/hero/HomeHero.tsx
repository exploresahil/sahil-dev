"use client";

import Star from "@/components/ui/svg/Star";
import "./style.scss";
import Image from "next/image";
import ImageSize from "@/app/utils/image-utils";
import sahil from "@/public/assets/images/profile/sahil-hero.jpg";
import { BiDownArrowAlt } from "react-icons/bi";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const HomeHero = () => {
  const title = "Sahil Satpute";
  const { scrollYProgress } = useScroll();
  const springConfig = { damping: 40 };
  const spring = useSpring(scrollYProgress, springConfig);
  const yPosition = useTransform(spring, [0, 1], [0, -100]);

  //console.log("scrollYProgress->", scrollYProgress);

  const words = title.split(" ");

  const wordVariants = {
    animate: {
      y: [100, 0],
      opacity: [0, 1],
      transition: {
        type: "spring",
        damping: 20,
        duration: 0.2,
      },
    },
  };

  const textVariants = {
    animate: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

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
            },
          }}
        >
          Full Stack Designer
        </motion.h2>
        <motion.h1 variants={textVariants} animate="animate">
          {words.map((word, i) => (
            <motion.span variants={wordVariants} key={i}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="star"
          animate={{
            opacity: [0, 1],
            transition: { delay: 0.5 },
          }}
        >
          <Star right="0" top="55%" y="-50%" />
        </motion.div>
      </div>
      <motion.div
        className="img-cont"
        style={{ y: yPosition }}
        animate={{
          opacity: [0, 1],
          transition: { delay: 1, duration: 0.5 },
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
          transition: { delay: 1.5, duration: 1 },
        }}
      >
        <p>
          I craft digital experiences, <br></br> Turning pixels into
          possibilities.
        </p>
        <div className="scroll">
          scroll <BiDownArrowAlt />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
