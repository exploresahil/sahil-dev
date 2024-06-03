import Menu from "./menu/Menu";
import "./style.scss";
import Socials from "./socials/Socials";
import PageLink from "../ui/page-link/PageLink";

const Footer = () => {
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
