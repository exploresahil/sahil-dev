import Gap from "@/components/ui/gap/Gap";
import "./style.scss";
import SkillsData from "@/database/skills";

const Skills = () => {
  return (
    <section id="skills">
      <Gap imageUrl="/assets/svg/bnw-patern-zebra.svg" height="50" />

      <div className="skills-container">
        <div className="name">
          <h2>Skills</h2>
        </div>
        {SkillsData.map((item, i) => (
          <div key={i} className="data-container">
            <div className="title">
              <h3>{item.title}</h3>
            </div>
            <div className="content">
              <ul>
                {item.list.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
