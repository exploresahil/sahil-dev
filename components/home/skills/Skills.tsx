"use client";

import { useRef } from "react";
import data from "./db";
import "./style.scss";

import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import animateListItems from "./utils";

const Skills = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const main = useRef<HTMLDivElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);

  const isTablet = useMediaQuery({
    query: "(min-width: 820px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  useGSAP(() => {
    if (title) {
      animateListItems(
        title.current,
        title.current,
        isTablet ? "bottom 80%" : "bottom bottom",
        0
      );
    }
    containerRefs.current.forEach((container, i) => {
      if (main && container) {
        //console.log(`Container ${i}:`, container);

        const h3Element = container?.querySelectorAll("h3");
        //.log(`Container ${i} h3 element:`, h3Element);

        const liElements = container.querySelectorAll("li");
        //console.log(`Container ${i} li elements:`, liElements);

        animateListItems(
          h3Element,
          container,
          isDesktop ? "bottom 90%" : isTablet ? "bottom 80%" : "bottom bottom",
          0.2
        );

        animateListItems(
          liElements,
          container,
          isDesktop ? "bottom 90%" : isTablet ? "bottom 80%" : "bottom bottom",
          0.4
        );
      }
    });
  }, []);

  return (
    <section id="skills">
      <div className="skills-container">
        <h2 ref={title}>Skills</h2>
        <div className="main">
          {data.map((skills, i) => (
            <div
              className="container"
              key={i}
              ref={(el) => {
                containerRefs.current[i] = el;
              }}
            >
              <h3>{skills.title}</h3>
              <ul className="skills">
                {skills.list.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
