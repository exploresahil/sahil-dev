import { FaLinkedinIn } from "react-icons/fa";
import { BsBehance, BsGithub } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { IconType } from "react-icons";

interface SocialDataItem {
  href: string;
  icon: IconType;
}

const socialData: SocialDataItem[] = [
  {
    href: "https://www.linkedin.com/in/exploresahil/",
    icon: FaLinkedinIn,
  },
  {
    href: "https://github.com/exploresahil",
    icon: BsGithub,
  },
  {
    href: "https://www.behance.net/exploresahil",
    icon: BsBehance,
  },
  {
    href: "https://www.frontendmentor.io/profile/exploresahil",
    icon: SiFrontendmentor,
  },
];

export default socialData;
