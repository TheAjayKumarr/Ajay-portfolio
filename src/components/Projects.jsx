// import { LuGithub } from "react-icons/lu";
import ProjectItems from "./ProjectItems";
import projects from "./projectsdata";

function Projects() {
  return (
    <div className="overflow-hidden bg-gray-950 text-color">
      <div className="max-w-4xl m-auto mt-4 mb-4 pb-2 ">
        {" "}
        <div className="max-w-3xl flex justify-center m-auto pb-5 pt-16">
          <div className="bbh-bartle-regular  font-extrabold uppercase  text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <div className="text-orange-500">Projects</div>
          </div>
        </div>
        {/* Project Items */}
        <div className="pl-1 pr-1">
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
    </div>
  );
}

// function Projects() {
//   return (
//     <div className="overflow-hidden bg-gray-950 text-color">
//       <div className=" max-w-4xl  m-auto mt-4 mb-4 pb-2">
//         <div className="block lg:hidden">
//           <div className="max-w-3xl flex justify-center m-auto text-4xl font-extrabold uppercase pb-12 pt-16 bbh-bartle-regular ">
//             <p className="text-orange-500">Projects</p>
//           </div>
//           <div className="pl-1 pr-1">
//             {projects.map((project, index) => (
//               <ProjectItems
//                 key={project.id}
//                 slug={project.slug}
//                 name={project.name}
//                 image={project.image}
//                 text={project.text}
//                 type={project.type}
//                 description={project.description}
//                 github={project.github}
//                 tech={project.tech}
//                 isFirst={index === 0}
//                 isLast={index === projects.length - 1}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="hidden lg:block">
//           <div className="max-w-3xl flex justify-center m-auto text-6xl font-extrabold uppercase pb-12 pt-16 bbh-bartle-regular ">
//             <p className="text-orange-500">Projects</p>
//           </div>
//           {projects.map((project, index) => (
//             <ProjectItems
//               key={project.id}
//               slug={project.slug}
//               name={project.name}
//               image={project.image}
//               text={project.text}
//               type={project.type}
//               description={project.description}
//               github={project.github}
//               tech={project.tech}
//               isFirst={index === 0}
//               isLast={index === projects.length - 1}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default Projects;
