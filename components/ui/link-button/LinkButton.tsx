import { TiArrowRightThick } from "react-icons/ti";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import Link, { LinkProps } from "next/link";
import { MutableRefObject, ReactNode } from "react";
import "./style.scss";

interface Props extends LinkProps {
  children: ReactNode;
  id?: string;
  ref?: MutableRefObject<HTMLAnchorElement | null>;
  title?: string;
}

const LinkButton = ({ children, ...Props }: Props) => {
  return (
    <Link id="linkButton" {...Props}>
      {children}
      <TiArrowRightThick />
    </Link>
  );
};

export default LinkButton;
