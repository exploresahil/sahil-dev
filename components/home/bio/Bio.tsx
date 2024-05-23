import "./style.scss";
import ParagraphGsap from "@/components/ui/paragraph-gsap/ParagraphGsap";

const Bio = () => {
  const text =
    "I'm a person who loves to take pictures and make things look pretty. I'm also a developer with a passion for front-end development and design.";

  return (
    <section id="bio">
      <ParagraphGsap text={text} />
    </section>
  );
};

export default Bio;
