"use client";

import { useState } from "react";
import navItems from "@/components/projects/db";
import Dropdown from "./dropdown/Dropdown";
import "./style.scss";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<string>(
    "Hover Image Slide Animation"
  );

  const data = navItems;

  return (
    <section id="projectsHeader">
      <div className="header-title">
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
