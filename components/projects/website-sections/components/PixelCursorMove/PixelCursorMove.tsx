"use client";

import React, { useEffect, useState } from "react";
import Warning from "../warning/Warning";
import "./style.scss";

const PixelCursorMove = () => {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const colorize = (el: any) => {
    el.style.backgroundColor = "#0a0a0a";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return Array.apply(null, Array(nbOfBlocks)).map(function (_, index) {
      return React.createElement("div", {
        onMouseEnter: function (e) {
          colorize(e.target);
        },
        key: index,
      });
    });
  };

  return (
    <section id="pixelBg">
      <Warning
        title="This section is best experienced in desktop or larger devices with cursor"
        desc="this section has a background that changes when mouse is hovered, please view in larger devices with cursor or view another section by tapping on the menu"
      />
      <div className="body">
        <p>Where ideas take shape and pixels find purpose</p>
      </div>
      <div className="grid">
        {windowsWidth > 0 &&
          Array.apply(null, Array(20)).map(function (_, index) {
            return React.createElement(
              "div",
              { key: index, className: "column" },
              getBlocks()
            );
          })}
      </div>
    </section>
  );
};

export default PixelCursorMove;
