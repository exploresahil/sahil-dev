"use client";

import useResponsive from "@/hooks/useResponsive";

const page = () => {
  const { breakpoint } = useResponsive();
  return (
    <main>
      <section id="contactPage">
        {breakpoint === "small" && "mobile"}
        {breakpoint === "medium" && "tablet"}
        {breakpoint === "large" && "desktop"}
      </section>
    </main>
  );
};

export default page;
