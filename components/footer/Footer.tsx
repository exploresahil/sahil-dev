import Link from "next/link";
import Menu from "./menu/Menu";
import "./style.scss";
import Socials from "./socials/Socials";

const Footer = () => {
  return (
    <footer>
      <div className="footer-cont">
        <Menu />
        <div className="bottom">
          <Link className="logo" href="/">
            Sahil Satpute
          </Link>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
