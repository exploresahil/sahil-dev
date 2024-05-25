import Link from "next/link";
import socialData from "./db";
import GsapMagnetic from "@/components/ui/magnetic-gsap/GsapMagnetic";

const Socials = () => {
  return (
    <div className="social">
      {socialData.map((link, index) => (
        <GsapMagnetic key={index}>
          <Link href={link.href} target="_blank">
            <link.icon />
          </Link>
        </GsapMagnetic>
      ))}
    </div>
  );
};

export default Socials;
