"use client";

import { usePathname, useRouter } from "next/navigation";
import { pageAnimOut, pageAnimOutMob } from "@/utils/pageAnim";
import { ButtonHTMLAttributes } from "react";
import { useMediaQuery } from "react-responsive";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: React.ReactNode;
}

const PageLink = ({ href, children, ...buttonProps }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const handleClick = () => {
    if (isDesktop && pathname !== href) {
      pageAnimOut(href, router);
    } else if (pathname !== href) {
      pageAnimOutMob(href, router);
    }
  };
  return (
    <button
      {...buttonProps}
      onClick={handleClick}
      style={{ cursor: "pointer", textAlign: "left" }}
    >
      {children}
    </button>
  );
};

export default PageLink;
