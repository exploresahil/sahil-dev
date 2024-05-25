"use client";

import "./style.scss";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageSize from "@/app/utils/image-utils";
import projectsList from "./db";

const sahil =
  "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Projects = () => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const animationControls = projectsList.map(() => useAnimation());

  const handleLinkHover = (index: any) => {
    animationControls[index].start({ height: "100%" });
  };

  const handleLinkLeave = (index: any) => {
    animationControls[index].start({ height: "0%" });
  };

  if (isMounted)
    return (
      <section id="homeProjects">
        <div className="left">
          <div className="img-cont">
            <video autoPlay loop muted playsInline preload="metadata">
              <source src="/assets/videos/tv.webm" />
            </video>
          </div>
        </div>
        <div className="right">
          <h2>Projects</h2>
          <div className="projects-cont">
            {projectsList.map((pro, i) => (
              <Link
                key={i}
                href={pro.href}
                onMouseEnter={() => handleLinkHover(i)}
                onMouseLeave={() => handleLinkLeave(i)}
              >
                <div className="square">
                  <p>{pro.number}</p>
                </div>
                <div className="title-container">
                  <h3>{pro.title}</h3>
                  <p>{pro.description}</p>
                </div>
                <div className="svg">
                  <BsArrowRight />
                </div>
                {isDesktop && (
                  <motion.div
                    className="bg"
                    initial={{ height: 0 }}
                    animate={animationControls[i]}
                    transition={{
                      duration: 0.2,
                      type: "tween",
                      ease: "easeInOut",
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  else return null;
};

export default Projects;
