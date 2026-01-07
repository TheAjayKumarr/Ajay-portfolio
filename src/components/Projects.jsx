import ssimage from "D:/AJAY/study/programming/Codes/ithon/Portfolio-Website/src/components/ssimage.jpeg";
import { LuGithub } from "react-icons/lu";
import LinkPreviewer from "./LinkPreivew";

function Projects() {
  return (
    <div className="overflow-hidden bg-gray-900  h-dvh text-white">
      <div className=" max-w-4xl  m-auto mt-4 mb-4 pb-2">
        <div className="max-w-3xl flex justify-center m-auto text-6xl font-extrabold uppercase pb-12 pt-5 bbh-bartle-regular ">
          <p className="text-white">Projects</p>
        </div>

        <LinkPreviewer
          href="https://github.com/TheAjayKumarr"
          image="https://images.unsplash.com/photo-1536756300610-6231d68aaf9c"
          text="Explore my projects and code"
        >
          <hr className="gradient-fade" />
          <div className="grid grid-cols-2 max-w-3xl m-auto gap-5 text-justify justify-center">
            <h2 className="text-4xl font-semibold justify-start flex">
              CareerBlaze
            </h2>
            <p className="text-xl font-semibold justify-end flex items-end">
              Front-end Develepment
            </p>
          </div>
          <hr className="gradient-fade-top" />
        </LinkPreviewer>
        <LinkPreviewer
          href="https://github.com/TheAjayKumarr"
          image={ssimage}
          text="Explore my projects and code"
        >
          <hr className="gradient-fade-bottom" />
          <div className="grid grid-cols-2 max-w-3xl m-auto gap-5 text-justify justify-center">
            <h2 className="text-4xl font-semibold justify-start flex">
              Myntra-Clone
            </h2>
            <p className="text-xl font-semibold justify-end flex items-end">
              Front-end Develepment
            </p>
          </div>
          <hr className="gradient-fade-top" />
        </LinkPreviewer>
        <LinkPreviewer
          href="https://github.com/TheAjayKumarr"
          image={ssimage}
          text="Explore my projects and code"
        >
          <hr className="gradient-fade-bottom" />
          <div className="grid grid-cols-2 max-w-3xl m-auto gap-5 text-justify justify-center">
            <h2 className="text-4xl font-semibold justify-start flex">
              Myntra-Clone
            </h2>
            <p className="text-xl font-semibold justify-end flex items-end">
              Front-end Develepment
            </p>
          </div>
          <hr className="gradient-fade-top" />
        </LinkPreviewer>
        <LinkPreviewer
          href="https://github.com/TheAjayKumarr"
          image={ssimage}
          text="Explore my projects and code"
        >
          <hr className="gradient-fade-bottom" />
          <div className="grid grid-cols-2 max-w-3xl m-auto gap-5 text-justify justify-center">
            <h2 className="text-4xl font-semibold justify-start flex">
              Myntra-Clone
            </h2>
            <p className="text-xl font-semibold justify-end flex items-end">
              Front-end Develepment
            </p>
          </div>
          <hr className="gradient-fade-top" />
        </LinkPreviewer>
        <LinkPreviewer
          href="https://github.com/TheAjayKumarr"
          image={ssimage}
          text="Explore my projects and code"
        >
          <hr className="gradient-fade-bottom" />
          <div className="grid grid-cols-2 max-w-3xl m-auto gap-5 text-justify justify-center">
            <h2 className="text-4xl font-semibold justify-start flex">
              Myntra-Clone
            </h2>
            <p className="text-xl font-semibold justify-end flex items-end">
              Front-end Develepment
            </p>
          </div>
          <hr className="gradient-fade" />
        </LinkPreviewer>
      </div>
    </div>
  );
}

export default Projects;

const socials = [
  {
    icon: <LuGithub size={18} />,
    label: "GitHub",
    onclick: () => window.open("https://github.com/TheAjayKumarr", "_blank"),
  },
];
<div className=" ">
  {socials.map((item, index) => (
    <button
      key={index}
      onClick={item.onclick}
      className="hover:scale-125 transition-transform duration-300  custom-icon-reverse  "
      aria-label={item.label}
    >
      {item.icon}
    </button>
  ))}
</div>;
