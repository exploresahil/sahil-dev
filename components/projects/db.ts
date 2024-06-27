import Projects from "../home/projects/Projects";
import HoverImageSlideMenu from "./website-sections/components/HoverImageSlideMenu/HoverImageSlideMenu";
import MaskCursorEffect from "./website-sections/components/MaskCursorEffect/MaskCursorEffect";
import Menu from "./website-sections/components/Menu/Menu";
import ParallaxScroll from "./website-sections/components/ParallaxScroll/ParallaxScroll";

import PixelCursorMove from "./website-sections/components/PixelCursorMove/PixelCursorMove";

export interface navItemsType {
  title: string;
  slug: string;
  component: React.FC;
}

const navItems: navItemsType[] = [
  {
    title: "Parallax Scroll",
    slug: "parallax-scroll",
    component: ParallaxScroll,
  },
  {
    title: "Menus",
    slug: "menus",
    component: Menu,
  },

  {
    title: "Hover Image Slide Menu",
    slug: "hover-image-slide-menu",
    component: HoverImageSlideMenu,
  },
  {
    title: "Pixel Cursor Move",
    slug: "pixel-cursor-move",
    component: PixelCursorMove,
  },
  {
    title: "Mask Cursor Effect",
    slug: "mask-cursor-effect",
    component: MaskCursorEffect,
  },
];

export default navItems;
