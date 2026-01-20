// import { LuGithub } from "react-icons/lu";
import ProjectItems from "./ProjectItems";
import projects from "./projectsdata";

function Projects() {
  return (
    <div className="overflow-hidden bg-gray-900  h-dvh text-white">
      <div className=" max-w-4xl  m-auto mt-4 mb-4 pb-2">
        <div className="max-w-3xl flex justify-center m-auto text-6xl font-extrabold uppercase pb-12 pt-5 bbh-bartle-regular ">
          <p className="text-orange-500">Projects</p>
        </div>
        {projects.map((project, index) => (
          <ProjectItems
            key={project.id}
            slug={project.slug}
            name={project.name}
            image={project.image}
            text={project.text}
            type={project.type}
            description={project.description}
            github={project.github}
            tech={project.tech}
            isFirst={index === 0}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

// const socials = [
//   {
//     icon: <LuGithub size={18} />,
//     label: "GitHub",
//     onclick: () => window.open("https://github.com/TheAjayKumarr", "_blank"),
//   },
// ];
// <div className=" ">
//   {socials.map((item, index) => (
//     <button
//       key={index}
//       onClick={item.onclick}
//       className="hover:scale-125 transition-transform duration-300  custom-icon-reverse  "
//       aria-label={item.label}
//     >
//       {item.icon}
//     </button>
//   ))}
// </div>;
