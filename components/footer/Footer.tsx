"use client";

import Menu from "./menu/Menu";
import "./style.scss";
import Socials from "./socials/Socials";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageLink from "../ui/page-link/PageLink";

const Footer = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <footer id="homeFooter">
        <div className="footer-cont">
          <Menu />
          <div className="bottom">
            <PageLink className="logo" href="/">
              Sahil Satpute
            </PageLink>
            <Socials />
          </div>
        </div>
      </footer>
    );
};

export default Footer;
