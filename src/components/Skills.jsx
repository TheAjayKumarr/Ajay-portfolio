import skill from "./SkillData";

function Skillset({ name, image }) {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center max-w-2xl m-auto mb-2 gap-2">
        <div className="border border-black rounded-lg w-48 h-min align-middle justify-center items-center">
          <p className="flex items-center justify-center">{name}</p>
          <img src={skill.image} alt={skill.name} />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="overflow-hidden text-black">
      <div className=" max-w-4xl h-svh m-auto mt-4 mb-4 pb-2">
        <div className="block lg:hidden">
          <div className="max-w-3xl flex justify-center m-auto text-4xl font-extrabold uppercase pb-12 pt-5 bbh-bartle-regular ">
            <p className="">Skills</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="max-w-3xl flex justify-center m-auto text-6xl font-extrabold uppercase pb-12 pt-5 bbh-bartle-regular ">
            <p className="">Skills</p>
          </div>
          <div className="grid grid-cols-3 max-w-3xl m-auto">
            {skill.map((skillno, index) => (
              <Skillset
                name={skillno.name}
                image={skillno.image}
                key={skillno.id}
              ></Skillset>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
