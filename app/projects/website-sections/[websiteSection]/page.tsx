"use client";

import navItems, { navItemsType } from "@/components/projects/db";
import Lenis from "lenis";
import { useLayoutEffect } from "react";

type Props = {
  params: { websiteSection: string };
};

const page = ({ params }: Props) => {
  const slug = params.websiteSection;
  const data = navItems.filter((v: navItemsType) => v.slug == slug).at(0);

  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  //console.log("data->", data);
  //console.log("slug->", slug);

  if (!data)
    return (
      <main>
        <p>No Data</p>
      </main>
    );

  return (
    <main>
      <data.component />
    </main>
  );
};

export default page;
