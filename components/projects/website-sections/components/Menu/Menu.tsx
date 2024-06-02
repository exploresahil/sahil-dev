"use client";

import "./style.scss";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import SlideMenu from "./SlideMenu/SlideMenu";

const Menu = () => {
  return (
    <section id="projectMenu">
      <DropdownMenu />
      <SlideMenu />
    </section>
  );
};

export default Menu;
