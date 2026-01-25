import SkillCard from "./SkillCard";
import { skillsData } from "./SkillData";

function Skills() {
  return (
    <div className="back-color">
      <section id="skills" className="max-w-3xl mx-auto py-16 overflow-hidden ">
        <div className="block lg:hidden">
          <div className="text-center text-3xl font-extrabold uppercase mb-12 bbh-bartle-regular ">
            <p className="text-orange-500">Skills</p>
          </div>

          {skillsData.map((group, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.skills.map((skill, i) => (
                  <SkillCard key={i} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <div className="text-center text-5xl font-extrabold uppercase mb-12 bbh-bartle-regular ">
            <p className="text-orange-500">Skills</p>
          </div>

          {skillsData.map((group, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
                {group.skills.map((skill, i) => (
                  <SkillCard key={i} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
