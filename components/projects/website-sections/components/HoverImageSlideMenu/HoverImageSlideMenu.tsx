"use client";

import ImageSize from "@/utils/image-utils";
import Image from "next/image";
import "./style.scss";
import Warning from "../warning/Warning";
import { useEffect, useState } from "react";

const altText = "image of a person";

const HoverImageSlideMenu = () => {
  return (
    <section id="imageSlide">
      <Warning
        title="This section is best experienced in desktop or larger devices with cursor"
        desc="for touch devices tap on the names to see the animation, drag down or tap on blank area to continue"
      />

      <div className="menu-container">
        <h2>Team</h2>
        <div className="team-container">
          <ul>
            <li>
              <h5>Samara</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/images/HoverImageSlideMenu/samara.png"
                    alt={altText}
                    fill
                    sizes={ImageSize.cardSize}
                  />
                </div>
              </div>
              <h5>Tate</h5>
            </li>
            <li>
              <h5>Rajni</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/images/HoverImageSlideMenu/rajni.png"
                    alt={altText}
                    fill
                    sizes={ImageSize.cardSize}
                  />
                </div>
              </div>
              <h5>Murgatroyd</h5>
            </li>
            <li>
              <h5>Barrie</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/images/HoverImageSlideMenu/barrie.png"
                    alt={altText}
                    fill
                    sizes={ImageSize.cardSize}
                  />
                </div>
              </div>
              <h5>Leola Wyatt</h5>
            </li>
            <li>
              <h5>Dora Cate</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/images/HoverImageSlideMenu/dora.png"
                    alt={altText}
                    fill
                    sizes={ImageSize.cardSize}
                  />
                </div>
              </div>
              <h5>Torosian</h5>
            </li>
            <li>
              <h5>Estella</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/images/HoverImageSlideMenu/estella.png"
                    alt={altText}
                    fill
                    sizes={ImageSize.cardSize}
                  />
                </div>
              </div>
              <h5>Morce</h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HoverImageSlideMenu;
