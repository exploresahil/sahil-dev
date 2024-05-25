import gsap from "gsap";
import { ScrollTrigger, CustomEase } from "gsap/all";

const animateListItems = (
  elements:
    | NodeListOf<Element>
    | NodeListOf<HTMLHeadElement>
    | HTMLHeadingElement
    | null,
  trigger: HTMLDivElement | HTMLHeadingElement | null,
  startCondition: string,
  delay: number
) => {
  if (!elements) return;

  if (elements) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);

    gsap.fromTo(
      elements,
      {
        y: 30,
        x: 10,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        stagger: 0.05,
        ease: CustomEase.create("cubic-bezier", "0.45, 0, 0.55, 1"),
        scrollTrigger: {
          trigger: trigger,
          //markers: true,
          start: startCondition,
        },
        duration: 0.3,
        delay: delay,
      }
    );
  }
};

export default animateListItems;
