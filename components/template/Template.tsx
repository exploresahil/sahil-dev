"use client";

import { useEffect } from "react";
import "./style.scss";
import { pageAnimIn, pageAnimInMob } from "@/utils/pageAnim";
import { useMediaQuery } from "react-responsive";

const TemplateContainer = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  useEffect(() => {
    if (isDesktop) pageAnimIn();
    else pageAnimInMob();
  }, []);

  return (
    <div id="template">
      <div className="temp-container" id="pageBlur">
        <div className="panel" id="panelOne" />
        <div className="panel" id="panelTwo" />
        <div className="panel" id="panelThree" />
        <div className="panel" id="panelFour" />
      </div>
      {children}
    </div>
  );
};

export default TemplateContainer;
