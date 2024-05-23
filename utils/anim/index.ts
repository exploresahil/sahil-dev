export const dropdownMenuSlide = {
  initial: { y: "-100%", opacity: 0 },
  enter: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

export const dropdownMenuSlideTablet = {
  initial: { x: "calc(100%)", opacity: 0 },
  enter: {
    x: "0",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "calc(100%)",
    opacity: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const buttonTextAnim = {
  initial: {
    maskImage:
      "linear-gradient(-75deg, white calc(100% + 20%), transparent calc(100% + 30%), white calc(100% + 100%))",
    WebkitMaskImage:
      "linear-gradient(-75deg, white calc(100% + 20%), transparent calc(100% + 30%), white calc(100% + 100%))",
  },
  animate: {
    maskImage:
      "linear-gradient(-75deg, white calc(-100% + 20%), transparent calc(-100% + 30%), white calc(-100% + 100%))",
    WebkitMaskImage:
      "linear-gradient(-75deg, white calc(-100% + 20%), transparent calc(-100% + 30%), white calc(-100% + 100%))",
  },
};

export const buttonBackgroundAnim = {
  initial: {
    backgroundImage:
      "linear-gradient(-75deg,rgba(255, 255, 255, 0.1) calc(100% + 20%),rgba(255, 255, 255, 0.5) calc(100% + 25%),rgba(255, 255, 255, 0.1) calc(100% + 100%))",
    mask: "linear-gradient(black, black) content-box,linear-gradient(black, black);",
    WebkitMask:
      "linear-gradient(black, black) content-box,linear-gradient(black, black);",
    maskComposite: "exclude",
    WebkitMaskComposite: "xor",
  },
  animate: {
    backgroundImage:
      "linear-gradient(-75deg,rgba(255, 255, 255, 0.1) calc(-100% + 20%),rgba(255, 255, 255, 0.5) calc(-100% + 25%),rgba(255, 255, 255, 0.1) calc(-100% + 100%))",
  },
};
