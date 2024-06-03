import projectsList from "@/components/home/projects/db";
import AnimatedText from "@/components/ui/animated-text/AnimatedText";
import Link from "next/link";

const Menu = () => {
  return (
    <div id="menu">
      {projectsList.map((item, i) => (
        <Link href={item.href} key={i} className="removeCursor">
          <AnimatedText text={item.title} />
        </Link>
      ))}
    </div>
  );
};

export default Menu;
