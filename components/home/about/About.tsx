"use client";

import Image from "next/image";
import "./style.scss";
import ImageSize from "@/utils/image-utils";
import sahil from "@/public/assets/images/profile/sahil_wes_.png";
import bg from "@/public/assets/images/bg/bg.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const springConfig = { damping: 20 };
  const spring = useSpring(scrollYProgress, springConfig);
  const yPosition = useTransform(spring, [0, 1], [-100, 100]);

  return (
    <section id="about" ref={container}>
      <Image
        src={bg}
        alt="Profile picture of sahil satpute"
        fill
        sizes={ImageSize.bannerSizes}
        className="bg"
        loading="lazy"
      />
      <h2>Hello, my name is Sahil Satpute</h2>
      <motion.div className="parallex" style={{ y: yPosition }}>
        <motion.div className="img-cont" style={{ y: yPosition }}>
          <Image
            src={sahil}
            alt="Profile picture of sahil satpute"
            fill
            sizes={ImageSize.cardSize}
          />
        </motion.div>
      </motion.div>
      <div className="text-cont">
        <h3>I am a fullstack designer</h3>
        <p>
          I love to work on projects that have a strong visual identity and I
          believe that the best way to communicate with people is through
          imagery.
        </p>
      </div>
    </section>
  );
};

export default About;
