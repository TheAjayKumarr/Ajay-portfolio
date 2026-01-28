import SkillCard from "./SkillCard";
import { skillsData } from "./SkillData";

function Skills() {
  return (
    <div className="back-color">
      <section
        id="skills"
        className="max-w-3xl mx-auto md:py-16 py-10 overflow-hidden px-4"
      >
        {/* Heading */}
        <div className="text-center font-extrabold uppercase mb-8 bbh-bartle-regular">
          <p className="text-orange-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Skills
          </p>
        </div>

        {/* Skill Groups */}
        {skillsData.map((group, index) => (
          <div key={index} className="mb-5">
            <h3 className="text-lg sm:text-2xl font-bold mb-4 text-center">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-6">
              {group.skills.map((skill, i) => (
                <SkillCard key={i} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skills;
