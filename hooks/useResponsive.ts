import { useState, useEffect } from "react";

type Breakpoint = "small" | "medium" | "large" | "xLarge";

const getBreakpoint = (width: number): Breakpoint => {
  if (width >= 2040) return "xLarge";
  else if (width >= 1025) return "large";
  else if (width >= 820) return "medium";
  else return "small";
};

const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("small");

  //console.log("breakpoint->", breakpoint);

  useEffect(() => {
    const handleWindowResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Set initial breakpoint on mount

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [setBreakpoint]);

  return { breakpoint };
};

export default useResponsive;
