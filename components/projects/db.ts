import Projects from "../home/projects/Projects";
import HoverImageSlideAnimation from "./website-sections/components/HoverImageSlideAnimation/HoverImageSlideAnimation";
import PixelCursorMove from "./website-sections/components/PixelCursorMove/PixelCursorMove";

export interface navItemsType {
  title: string;
  slug: string;
  component: React.FC;
}

const navItems: navItemsType[] = [
  {
    title: "Hover Image Slide Animation",
    slug: "hover-image-slide-effect",
    component: Projects,
  },
  {
    title: "Pixel Cursor Move",
    slug: "pixel-cursor-move",
    component: PixelCursorMove,
  },
  {
    title: "Dropdown Menu",
    slug: "dropdown-menu",
    component: HoverImageSlideAnimation,
  },
  {
    title: "Slide Menu",
    slug: "slide-menu",
    component: HoverImageSlideAnimation,
  },
  {
    title: "Pop-up Menu",
    slug: "popup-menu",
    component: HoverImageSlideAnimation,
  },
];

export default navItems;
