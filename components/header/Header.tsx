import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import "./style.scss";

import AnimatedText from "../ui/animated-text/AnimatedText";

const Header = () => {
  const logoText = "SAHIL SATPUTE";
  const contactText = "SAY HELLO";

  return (
    <header>
      <Link href="/" id="logo">
        <AnimatedText text={logoText} />
      </Link>
      <Link href="/contact" className="contact">
        <AnimatedText text={contactText} />
      </Link>
    </header>
  );
};

export default Header;
