import TiltedCard from "./TitledCard";
import Ajay_2 from "../assets/Ajay_2.png";
import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdMailOutline, MdOutlineDescription } from "react-icons/md";

export default function Hero() {
  const socials = [
    {
      icon: <MdOutlineDescription size={18} />,
      label: "Resume",
      onclick: () =>
        window.open(
          `${import.meta.env.BASE_URL}/Ajay_Resume_Dev.pdf`,
          "_blank",
        ),
    },
    {
      icon: <LuGithub size={18} />,
      label: "GitHub",
      onclick: () => window.open("https://github.com/TheAjayKumarr", "_blank"),
    },
    {
      icon: <SlSocialLinkedin size={18} />,
      label: "LinkedIn",
      onclick: () =>
        window.open("https://www.linkedin.com/in/ajay-kumar-m247/", "_blank"),
    },
    {
      icon: <MdMailOutline size={18} />,
      label: "Mail",
      onclick: () =>
        window.open("mailto:ajay.kumar.candidate@gmail.com", "_blank"),
    },
  ];

  return (
    <section className="back-color overflow-hidden ">
      <div className="px-6 pt-32 pb-5">
        <div className="mx-auto max-w-7xl text-gray-950">
          {/* ================= MOBILE ONLY ================= */}
          <div className="block lg:hidden">
            <div className="flex flex-col items-center gap-6">
              <h1 className="bbh-bartle-regular  text-[34px] sm:text-[50px] scale-y-[3]">
                Ajay
              </h1>

              <TiltedCard
                imageSrc={Ajay_2}
                altText="Ajay"
                containerHeight="260px"
                containerWidth="260px"
                imageHeight="260px"
                imageWidth="260px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />

              <h1 className="bbh-bartle-regular  text-[34px] sm:text-[50px] scale-y-[3]">
                Kumar
              </h1>
              <div
                className="
                front-md
                z-0 w-[250px] font-bold [-webkit-text-stroke:0.5px_black]
                pointer-events-none
                uppercase text-orange-500  
                    
                  "
              >
                Software Developer
              </div>
            </div>

            <div className="max-w-3xl m-auto pt-4 text-justify">
              <p>
                Hey, I am a <strong> B.Tech graduate</strong> in{" "}
                <b>Computer Science and Business Systems </b>
                from <i>Bharati Vidyapeeth College of Engineering, Pune</i>,
                originally from <i>MP, India</i>. I am a{" "}
                <b>frontend-focused developer</b> with hands-on experience in{" "}
                <b>
                  <i>HTML, CSS, JavaScript, React, and Tailwind CSS</i>{" "}
                </b>
                , along with a strong foundation in{" "}
                <b>Machine Learning and Data Science</b>. I’ve worked on ML
                projects involving{" "}
                <b>
                  <i>Python, CNNs, and deep learning</i>
                </b>
                , and I enjoy building scalable web interfaces backed by
                data-driven thinking. <br />
                <a
                  href="mailto:ajay.kumar.candidate@gmail.com?subject=Potential Opportunity – Frontend / Software Developer"
                  target="_blank"
                  className=" flex font-bold text-lg p-0.5 justify-center mt-3  border-2 border-t-black border-l-black border-b-orange-500 border-r-orange-500 rounded-lg hover:shadow-md hover:shadow-blue-900"
                >
                  <span className=" transition-transform duration-300 ease-out hover:scale-110 flex justify-center min-w-full">
                    Actively seeking opportunities
                  </span>
                </a>
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto mt-8 gap-6">
              {/* Location */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a
                  href="https://maps.app.goo.gl/oxKeV1C21XwP4awF8"
                  target="_blank"
                  className="
                  flex h-11 w-11 items-center justify-center
                  border border-black rounded-md
                  hover:scale-110 transition-transform
                  hover:border-orange-500 hover:shadow-md hover:shadow-blue-900
                  custom-icon
                "
                >
                  <IoLocationOutline size={18} />
                </a>
                <span>Dewas, Madhya Pradesh, India</span>
              </div>

              {/* Socials */}
              <div className="flex justify-center sm:justify-end gap-4">
                {socials.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onclick}
                    className="
                    relative group
                    p-3 rounded-md border-black border
                    hover:scale-110 transition-transform
                    hover:border-orange-500 hover:shadow-md hover:shadow-blue-900
                    custom-icon
                  "
                    aria-label={item.label}
                  >
                    {item.icon}

                    {/* Tooltip (desktop) */}
                    <span
                      className="
                      hidden lg:block pointer-events-none
                      absolute -bottom-6 left-1/2 -translate-x-1/2
                      scale-0 group-hover:scale-100
                      transition-transform duration-200
                      rounded-md bg-gray-950 text-white text-xs
                      px-2 py-1 whitespace-nowrap
                    "
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= DESKTOP ONLY ================= */}
          <div className="hidden lg:block justify-center ">
            <div className="grid grid-cols-2 items-center h-[300px] gap-10 justify-center justify-items-center  max-w-4xl m-auto ">
              <TiltedCard
                imageSrc={Ajay_2}
                altText="Ajay"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
              <div
                className="
                    absolute front
                    bg-contain bg-no-repeat
                    
                    z-0 w-[296px] font-bold [-webkit-text-stroke:0.5px_black]
                    pointer-events-none
                    uppercase text-orange-600  rotate-[-90deg]
                  "
              >
                Software Developer
              </div>

              <div className=" grid grid-rows-2 h-[300px] items-center gap-0 pt-1">
                <div>
                  <h1 className="bbh-bartle-regular text-[46px] scale-y-[4.5] ">
                    Ajay
                    {/* <DotLottieReact
                      src="https://lottie.host/7177a91a-0467-4723-84ea-001e2d99d028/r3qnzAsSon.lottie"
                      loop
                      autoplay
                      style={{ width: "30px", height: "30px" }}
                    /> */}
                  </h1>
                </div>
                <h1 className="bbh-bartle-regular text-[46px] scale-y-[4.5] ">
                  Kumar
                </h1>
              </div>
            </div>
            <div className="max-w-3xl m-auto pb-8 text-justify pt-8">
              <p>
                Hey, I am a <strong> B.Tech graduate</strong> in{" "}
                <b>Computer Science and Business Systems </b>
                from <i>
                  Bharati Vidyapeeth College of Engineering, Pune
                </i>, <b>India</b>. I am a <b>frontend-focused developer</b>{" "}
                with hands-on experience in{" "}
                <b>
                  <i>HTML, CSS, JavaScript, React, </i>{" "}
                </b>
                and{" "}
                <b>
                  <i>Tailwind CSS</i>
                </b>
                , along with a strong foundation in{" "}
                <b>Machine Learning & Data Science</b>. I’ve worked on ML
                projects involving{" "}
                <b>
                  <i>Python, CNNs, & deep learning</i>
                </b>
                , and I enjoy building scalable web interfaces backed by
                data-driven thinking. <br />
                <a
                  href="mailto:ajay.kumar.candidate@gmail.com?subject=Potential Opportunity – Frontend / Software Developer"
                  target="_blank"
                  className=" flex font-bold text-xl p-0.5 justify-center mt-3  border-2 border-t-black border-l-black border-b-orange-500 border-r-orange-500 rounded-lg hover:shadow-md hover:shadow-blue-900"
                >
                  <span className=" transition-transform duration-300 ease-out hover:scale-110 flex justify-center min-w-full">
                    Actively seeking opportunities
                  </span>
                </a>
              </p>
            </div>
            <div className="grid max-w-3xl grid-cols-2 m-auto">
              <div className="grid grid-cols-[54px_minmax(0,_1fr)]">
                <a
                  href="https://maps.app.goo.gl/oxKeV1C21XwP4awF8"
                  target="_blank"
                  className="flex justify-center align-middle h-11 w-11 items-center border border-black rounded-md hover:scale-110 transition-transform duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-blue-900 custom-icon"
                >
                  {<IoLocationOutline size={18} />}
                </a>
                <div className="flex items-center h-11">
                  Dewas, Madhya Pradesh, India
                </div>
              </div>

              <div className="flex justify-end gap-4 pb-8">
                {socials.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onclick}
                    className="
        relative group
        p-3 rounded-md border-black border
        hover:scale-110 transition-transform duration-300
        hover:border-orange-500 hover:shadow-md hover:shadow-blue-900
        custom-icon
      "
                    aria-label={item.label}
                  >
                    {item.icon}

                    {/* Tooltip */}
                    <span
                      className="
          pointer-events-none
          absolute -bottom-5 left-1/2 -translate-x-1/2
          scale-0 group-hover:scale-100
          transition-transform duration-200
          rounded-md bg-gray-950 text-white text-xs
          px-2 py-1 whitespace-nowrap
        "
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-11" /> */}
      </div>
    </section>
  );
}
