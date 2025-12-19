import TiltedCard from "./TitledCard";
import Ajay_2 from "../assets/Ajay_2.png";
import TextPressure from "./Intro";

export default function Hero() {
  return (
    // <section className="bg-zinc-400 overflow-hidden">
    //   <div className="px-6 pt-24">
    //     {/* HERO WRAPPER */}
    //     <div className="mx-auto max-w-7xl">
    //       {/* MOBILE → STACKED */}
    //       <div className="flex flex-col items-center gap-6 lg:hidden">
    //         <h1 className="bbh-bartle-regular text-[50px] scale-y-110">Ajay</h1>

    //         <TiltedCard
    //           imageSrc={Ajay_2}
    //           altText="Ajay"
    //           containerHeight="260px"
    //           containerWidth="260px"
    //           imageHeight="260px"
    //           imageWidth="260px"
    //           rotateAmplitude={10}
    //           scaleOnHover={1.1}
    //           showMobileWarning={false}
    //           showTooltip={false}
    //           displayOverlayContent={false}
    //         />

    //         <h1 className="bbh-bartle-regular text-[50px] scale-y-110">
    //           Kumar
    //         </h1>
    //       </div>

    //       {/* DESKTOP → SIDE BY SIDE */}
    //       {/* <div className="relative hidden lg:flex items-center justify-center gap-10 top-8 left-[4.5%]">
    //         <div className="h-[300px] flex items-center">
    //           <h1 className="bbh-bartle-regular text-[60px] scale-y-[7]">
    //             Ajay
    //           </h1>
    //         </div>

    //         <TiltedCard
    //           imageSrc={Ajay_2}
    //           altText="Ajay"
    //           containerHeight="300px"
    //           containerWidth="300px"
    //           imageHeight="300px"
    //           imageWidth="300px"
    //           rotateAmplitude={12}
    //           scaleOnHover={1.15}
    //           showMobileWarning={false}
    //           showTooltip={false}
    //           displayOverlayContent={false}
    //         />

    //         <div className="h-[300px] flex items-center">
    //           <h1 className="bbh-bartle-regular text-[60px] scale-y-[7]">
    //             Kumar
    //           </h1>
    //         </div>
    //       </div> */}
    //       {/* DESKTOP → SIDE BY SIDE */}
    //       <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-8">
    //         {/* LEFT TEXT PRESSURE */}
    //         <div className="h-[300px]">
    //           <TextPressure
    //             text="Ajay"
    //             flex={false}
    //             width={true}
    //             weight={true}
    //             italic={true}
    //             alpha={false}
    //             stroke={false}
    //             textColor="#000000"
    //             minFontSize={60}
    //           />
    //         </div>

    //         {/* IMAGE */}
    //         <TiltedCard
    //           imageSrc={Ajay_2}
    //           altText="Ajay"
    //           containerHeight="300px"
    //           containerWidth="300px"
    //           imageHeight="300px"
    //           imageWidth="300px"
    //           rotateAmplitude={12}
    //           scaleOnHover={1.15}
    //           showMobileWarning={false}
    //           showTooltip={false}
    //           displayOverlayContent={false}
    //         />

    //         {/* RIGHT TEXT PRESSURE */}
    //         <div className="h-[300px]">
    //           <TextPressure
    //             text="Kumar"
    //             flex={false}
    //             width={true}
    //             weight={true}
    //             italic={true}
    //             alpha={false}
    //             stroke={false}
    //             textColor="#000000"
    //             minFontSize={60}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-32" />
    //   </div>
    // </section>
    <section className="bg-zinc-400 overflow-hidden">
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
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1fr_300px_1fr] items-center h-[300px] gap-10">
              <div className="h-full">
                <TextPressure
                  text="AJAY"
                  minFontSize={60}
                  weight
                  width
                  italic
                  textColor="rgb(0, 16, 0)"
                />
              </div>

              <TiltedCard
                imageSrc={Ajay_2}
                altText="Ajay"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />

              <div className="h-full">
                <TextPressure
                  text="KUMAR"
                  minFontSize={60}
                  weight
                  width
                  italic
                  textColor="rgb(0, 16, 0)"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-32" />
      </div>
    </section>
  );
}
