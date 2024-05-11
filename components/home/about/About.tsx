"use client";

import Gap from "@/components/ui/gap/Gap";
import "./style.scss";
import Image from "next/image";
import ImageSize from "@/utils/image-utils";
import sahil from "@/public/assets/images/sahil-insta.jpg";
import patern from "@/public/assets/svg/bnw-patern-splash-big.svg";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 819 });

  const sahilRef = useRef<HTMLImageElement>(null);

  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const thirdText = useRef<HTMLParagraphElement>(null);
  const forthText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    requestAnimationFrame(animation);

    gsap.fromTo(
      sahilRef.current,
      {
        objectPosition: "center 100%",
        scale: 1.5,
      },
      {
        scale: 1,
        objectPosition: "center 50%",
        scrollTrigger: {
          trigger: sahilRef.current,
          //markers: true,
          scrub: 0.5,
          start: "top bottom",
          end: "bottom center",
        },
      }
    );

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-200px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    gsap.set(forthText.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.05 * direction;
  };

  return (
    <section id="homeAbout">
      <Gap imageUrl="/assets/svg/bnw-patern-cow.svg" height="50" />
      <div className="about-container">
        <div className="color-box">
          <Image
            src={sahil}
            alt="sahil satpute"
            fill
            sizes={ImageSize.bannerSizes}
            ref={sahilRef}
          />
        </div>
        {isClient && !isMobile && (
          <div className="patern">
            <Image src={patern} alt="patern" fill sizes={ImageSize.cardSize} />
          </div>
        )}
        <div className="text-container">
          <h1>
            Hello,
            <br />
            my name is
            <br />
            <span>Sahil Satpute</span>
          </h1>
          <div className="line" />
          <h2>
            i am a <span>fullstack</span>
            <br />
            <span>designer</span>
          </h2>
        </div>
        <div className="marquee">
          <div className="slider" ref={slider}>
            <p ref={firstText}>
              UI design • Front-End • React • Next • Gsap • Locomotive • Web
              Animations •
            </p>
            <p ref={secondText}>
              UI design • Front-End • React • Next • Gsap • Locomotive • Web
              Animations •
            </p>
            <p ref={thirdText}>
              UI design • Front-End • React • Next • Gsap • Locomotive • Web
              Animations •
            </p>
            <p ref={forthText}>
              UI design • Front-End • React • Next • Gsap • Locomotive • Web
              Animations •
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
