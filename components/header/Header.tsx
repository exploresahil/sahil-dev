import "./style.scss";

import AnimatedText from "../ui/animated-text/AnimatedText";
import PageLink from "../ui/page-link/PageLink";

const Header = () => {
  const logoText = "SAHIL SATPUTE";
  const contactText = "SAY HELLO";

  return (
    <header id="homeHeader">
      <PageLink href="/" id="logo">
        <AnimatedText text={logoText} />
      </PageLink>
      <PageLink href="/contact" className="contact">
        <AnimatedText text={contactText} />
      </PageLink>
    </header>
  );
};

export default Header;
