import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const pageAnimIn = () => {
  const panelOne = document.getElementById("panelOne");
  const panelTwo = document.getElementById("panelTwo");
  const panelThree = document.getElementById("panelThree");
  const panelFour = document.getElementById("panelFour");

  if (panelOne && panelTwo && panelThree && panelFour) {
    const tl = gsap.timeline();
    gsap.registerPlugin(CustomEase);

    tl.set([panelOne, panelTwo, panelThree, panelFour], {
      yPercent: 0,
    }).to([panelOne, panelTwo, panelThree, panelFour], {
      yPercent: 100,
      duration: 0.5,
      stagger: 0.2,
      ease: CustomEase.create("cubic-bezier", "0.45, 0, 0.55, 1"),
    });
  }
};

export const pageAnimInMob = () => {
  const panelOne = document.getElementById("panelOne");
  const panelTwo = document.getElementById("panelTwo");
  const panelThree = document.getElementById("panelThree");
  const panelFour = document.getElementById("panelFour");

  if (panelOne && panelTwo && panelThree && panelFour) {
    const tl = gsap.timeline();
    gsap.registerPlugin(CustomEase);

    tl.set([panelOne, panelTwo, panelThree, panelFour], {
      xPercent: 0,
    }).to([panelOne, panelTwo, panelThree, panelFour], {
      xPercent: 100,
      duration: 0.5,
      stagger: 0.2,
      ease: CustomEase.create("cubic-bezier", "0.45, 0, 0.55, 1"),
    });
  }
};

export const pageAnimOut = (href: string, router: AppRouterInstance) => {
  const panelOne = document.getElementById("panelOne");
  const panelTwo = document.getElementById("panelTwo");
  const panelThree = document.getElementById("panelThree");
  const panelFour = document.getElementById("panelFour");

  if (panelOne && panelTwo && panelThree && panelFour) {
    const tl = gsap.timeline();
    tl.set([panelOne, panelTwo, panelThree, panelFour], {
      yPercent: -100,
    }).to([panelOne, panelTwo, panelThree, panelFour], {
      yPercent: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: CustomEase.create("cubic-bezier", "0.45, 0, 0.55, 1"),
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

export const pageAnimOutMob = (href: string, router: AppRouterInstance) => {
  const panelOne = document.getElementById("panelOne");
  const panelTwo = document.getElementById("panelTwo");
  const panelThree = document.getElementById("panelThree");
  const panelFour = document.getElementById("panelFour");

  if (panelOne && panelTwo && panelThree && panelFour) {
    const tl = gsap.timeline();
    tl.set([panelOne, panelTwo, panelThree, panelFour], {
      xPercent: -100,
    }).to([panelOne, panelTwo, panelThree, panelFour], {
      xPercent: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: CustomEase.create("cubic-bezier", "0.45, 0, 0.55, 1"),
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
