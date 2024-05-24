import Star from "@/components/ui/svg/Star";
import "./style.scss";

const data = [
  {
    title: "• Development",
    list: [
      "html",
      "css",
      "scss",
      "js",
      "react",
      "next",
      "GSAP",
      "Framer Motion",
      "sanity",
    ],
  },
  {
    title: "• Creative",
    list: [
      "adobe xd",
      "illustrator",
      "lightroom",
      "photoshop",
      "primere pro",
      "after effects",
      "dimension",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="main">
          {data.map((skills, i) => (
            <div className="container" key={i}>
              <h3>{skills.title}</h3>
              <ul className="skills">
                {skills.list.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
