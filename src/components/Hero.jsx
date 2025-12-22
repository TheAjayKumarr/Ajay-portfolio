import TiltedCard from "./TitledCard";
import Ajay_2 from "../assets/Ajay_2.png";
import TextPressure from "./Intro";

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
            </div>
          </div>

          {/* ================= DESKTOP ONLY ================= */}
          <div className="hidden lg:block justify-center">
            <div className="grid grid-cols-3 items-center h-[300px] gap-10 justify-center justify-items-center  max-w-7xl">
              <div className="relative text-5xl inline-block">
                {/* Background emoji */}
                <div
                  className="
      absolute
      top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-72 h-72
      bg-[url('https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp')]
      bg-contain bg-no-repeat
      opacity-50
      z-0
      pointer-events-none
    "
                />

                {/* Text */}
                <div className="relative z-10 leading-tight">
                  <h4>Hey!!!</h4>
                  <h4>I am</h4>
                </div>
              </div>

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
              <div className="h-full flex items-center">
                <TextPressure
                  text={`AJAY\nKUMAR`}
                  minFontSize={60}
                  weight
                  width
                  flex={false}
                  italic
                  textColor="rgb(0, 16, 0)"
                />
              </div>

              {/* <div className="h-full">
                <TextPressure
                  text="KUMAR"
                  minFontSize={60}
                  weight
                  width
                  italic
                  textColor="rgb(0, 16, 0)"
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className="h-32" />
      </div>
    </section>
  );
}
