export const slideLeft = {
  initial: {
    x: "100%",
  },
  enter: {
    x: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

export const opacity = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  enter: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};
