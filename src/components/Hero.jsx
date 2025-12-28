import TiltedCard from "./TitledCard";
import Ajay_2 from "../assets/Ajay_2.png";

export default function Hero() {
  return (
    <section className="back-color overflow-hidden">
      <div className="px-6 pt-32">
        <div className="mx-auto max-w-7xl">
          {/* ================= MOBILE ONLY ================= */}
          <div className="block lg:hidden">
            <div className="flex flex-col items-center gap-6">
              <h1 className="bbh-bartle-regular text-[50px] scale-y-[3]">
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

              <h1 className="bbh-bartle-regular text-[50px] scale-y-[3]">
                Kumar
              </h1>
              <div
                className="
                    front-md
                    z-0 w-[250px] font-bold [-webkit-text-stroke:0.5px_black]
                    pointer-events-none
                    uppercase text-orange-600  
                  "
              >
                Frontend Developer
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
                data-driven thinking. I’m <b>actively seeking opportunities</b>{" "}
                where I can contribute, learn, and grow as a developer.
              </p>
            </div>
          </div>

          {/* ================= DESKTOP ONLY ================= */}
          <div className="hidden lg:block justify-center ">
            <div className="grid grid-cols-2 items-center h-[300px] gap-10 justify-center justify-items-center  max-w-4xl m-auto ">
              {/* <div className="relative text-5xl inline-block">
                
                <div
                  className="
                    absolute
                    top-1/2 left-1/2
                    -translate-y-1/2 
                    w-60 h-60
                    bg-[url('https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp')]
                    bg-contain bg-no-repeat
                    opacity-70
                    z-0
                    pointer-events-none
                  "
                />

                
                <div className="relative z-10 leading-tight">
                  <h4>Hey!!!</h4>
                  <h4>I am</h4>
                </div>
              </div> */}

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
                Frontend Developer
              </div>

              <div className=" grid grid-rows-2 h-[300px] items-center gap-0 pt-1">
                {/* <TextPressure
                  text={`AJAY\nKUMAR`}
                  minFontSize={60}
                  weight
                  width
                  flex={false}
                  italic
                  textColor="rgb(0, 16, 0)"
                /> */}
                <h1 className="bbh-bartle-regular text-[48px] scale-y-[4.2] ">
                  Ajay
                </h1>
                <h1 className="bbh-bartle-regular text-[48px] scale-y-[4.2] ">
                  Kumar
                </h1>
              </div>
            </div>
            <div className="max-w-3xl m-auto pt-8 text-justify">
              <p>
                Hey, I am a 2024 <strong> B.Tech graduate</strong> in{" "}
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
                  className=" flex font-bold text-xl p-0.5 justify-center mt-3  border-2 border-b-orange-500 border-r-orange-500 rounded-lg "
                >
                  <span className=" transition-transform duration-300 ease-out hover:scale-110">
                    Actively seeking opportunities
                  </span>
                </a>
              </p>
            </div>
            <div className="h-32 max-w-4xl"></div>
          </div>
        </div>

        {/* <div className="h-32" /> */}
      </div>
    </section>
  );
}
