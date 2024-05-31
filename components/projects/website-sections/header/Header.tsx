"use client";

import { useEffect, useState } from "react";
import navItems from "@/components/projects/db";
import Dropdown from "./dropdown/Dropdown";
import "./style.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<string>("Parallax Scroll");

  const data = navItems;

  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  useEffect(() => {
    const matchingNavItem = data.find((item) => item.slug === currentSlug);
    if (matchingNavItem) {
      setSelectedData(matchingNavItem.title);
    }
  }, [currentSlug, data]);

  return (
    <section id="projectsHeader">
      <div className="header-title">
        <Link className="breadcrumbs" href="/projects">
          Projects
        </Link>
        <h2>Website Sections</h2>
        <h3>{selectedData}</h3>
      </div>
      <Dropdown
        setSelectedData={setSelectedData}
        data={data}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </section>
  );
};

export default Header;
