import projects from "./projectsdata";
import { useParams } from "react-router-dom";

const ProjectsView = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="back-color h-dvh flex items-center justify-center">
        <p className="text-xl font-semibold">Project not found</p>
      </section>
    );
  }
  return (
    <section className="bg-green-950 overflow-hidden min-h-dvh">
      <div className="px-4 pb-16 pt-10">
        <div className="mx-auto max-w-7xl">
          {/* ================= MOBILE ================= */}
          <div className="block lg:hidden">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-extrabold uppercase text-center">
                {project.name}
              </h1>

              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl"
              />

              <p className="text-base text-gray-700">
                {project.description || project.text}
              </p>

              {/* Tech stack */}
              {project.tech && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm border rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border px-4 py-2 rounded-lg hover:text-orange-500"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="border px-4 py-2 rounded-lg hover:text-orange-500"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:block">
            <div className="max-w-4xl pt-12 m-auto bbh-bartle-regular">
              {/* Title */}
              <p className="text-orange-500 text-center text-6xl font-extrabold uppercase">
                {project.name}
              </p>

              {/* Image */}
              <div className="mt-10">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-2xl"
                />
              </div>

              {/* Description */}
              <p className="mt-8 text-lg text-gray-700 text-justify">
                {project.description || project.text}
              </p>

              {/* Tech Stack */}
              {project.tech && (
                <div className="mt-6 flex text-green-300 justify-center flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-1 text-sm border rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 flex justify-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border px-6 py-3 rounded-lg hover:text-orange-500 transition"
                  >
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="border px-6 py-3 rounded-lg hover:text-orange-500 transition"
                  >
                    Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsView;
