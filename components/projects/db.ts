import Projects from "../home/projects/Projects";
import HoverImageSlideMenu from "./website-sections/components/HoverImageSlideMenu/HoverImageSlideMenu";
import MaskCursorEffect from "./website-sections/components/MaskCursorEffect/MaskCursorEffect";
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
    title: "Dropdown Menu",
    slug: "dropdown-menu",
    component: Projects,
  },
  {
    title: "Slide Menu",
    slug: "slide-menu",
    component: Projects,
  },
  {
    title: "Pop-up Menu",
    slug: "popup-menu",
    component: Projects,
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
