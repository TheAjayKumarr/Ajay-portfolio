import { useState } from "react";

function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="overflow-hidden bg-gray-950 text-color min-h-[700px]">
      <div className="max-w-4xl mx-auto px-4 pt-16 ">
        {/* Heading */}
        <div className="text-center font-extrabold uppercase pb-12 bbh-bartle-regular">
          <p className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl">
            Career
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 sm:gap-10 mb-12">
          {["experience", "education"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg sm:text-2xl font-bold pb-2 border-b-2 transition ${
                activeTab === tab
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab === "experience" ? "Experience" : "Education"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-sm sm:text-lg">
          {activeTab === "experience" && (
            <div className="space-y-8">
              {/* Item */}
              <div>
                <hr className="gradient-fade" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 place-items-center sm:place-items-stretch">
                  <h3 className="sm:col-span-2 text-lg sm:text-xl font-semibold text-center sm:text-left">
                    Shopify Developer
                  </h3>
                  <p className="text-center sm:text-right">May 2025</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-stretch">
                  <p className="text-center sm:text-left">Freelance</p>
                  <p className="text-center sm:text-right">Remote</p>
                </div>

                <hr className="gradient-fade" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 place-items-center sm:place-items-stretch">
                  <h3 className="sm:col-span-2 text-lg sm:text-xl font-semibold text-center sm:text-left">
                    Operations Manager
                  </h3>
                  <p className="text-center sm:text-right">
                    Feb 2025 – May 2025
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-stretch">
                  <p className="text-center sm:text-left">
                    Snack Savvy Innovations
                  </p>
                  <p className="text-center sm:text-right">
                    Kota, Rajasthan, India
                  </p>
                </div>

                <hr className="gradient-fade" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 place-items-center sm:place-items-stretch">
                  <h3 className="sm:col-span-2 text-lg sm:text-xl font-semibold text-center sm:text-left">
                    Planning Executive
                  </h3>
                  <p className="text-center sm:text-right">
                    Sept 2024 – Feb 2025
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-stretch">
                  <p className="text-center sm:text-left">V Stainless LLP</p>
                  <p className="text-center sm:text-right">
                    Siya, Madhya Pradesh, India
                  </p>
                </div>

                <hr className="gradient-fade" />
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-8">
              <div>
                <hr className="gradient-fade" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 place-items-center sm:place-items-stretch">
                  <h3 className="sm:col-span-2 text-lg sm:text-xl font-semibold text-center sm:text-left">
                    B.Tech – Computer Science & Business Systems
                  </h3>
                  <p className="text-center sm:text-right">2020 – 2024</p>
                </div>

                <p className="text-center sm:text-left">
                  Bharati Vidyapeeth Deemed University College of Engineering,
                  Pune, Maharashtra, India
                </p>

                <hr className="gradient-fade" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 place-items-center sm:place-items-stretch">
                  <h3 className="sm:col-span-2 text-lg sm:text-xl font-semibold text-center sm:text-left">
                    12th – PCM
                  </h3>
                  <p className="text-center sm:text-right">2018 – 2019</p>
                </div>

                <p className="text-center sm:text-left">
                  Army Public School, MHOW
                </p>

                <hr className="gradient-fade" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;

// import { useState } from "react";

// function Experience() {
//   const [activeTab, setActiveTab] = useState("experience");

//   return (
//     <div className="overflow-hidden bg-gray-950 text-color min-h-[700px]">
//       <div className="max-w-4xl m-auto mt-4 mb-4 pb-2 ">
//         <div className="max-w-3xl flex justify-center m-auto text-4xl lg:text-6xl font-extrabold uppercase pb-12 pt-16 bbh-bartle-regular">
//           <p className="text-orange-500">Career</p>
//         </div>

//         <div className="flex justify-center gap-8 mb-10">
//           <button
//             onClick={() => setActiveTab("experience")}
//             className={`text-2xl font-bold pb-2 border-b-2 transition ${
//               activeTab === "experience"
//                 ? "border-orange-500 text-orange-500"
//                 : "border-transparent text-gray-400 hover:text-white"
//             }`}
//           >
//             Experience
//           </button>

//           <button
//             onClick={() => setActiveTab("education")}
//             className={`text-2xl font-bold pb-2 border-b-2 transition ${
//               activeTab === "education"
//                 ? "border-orange-500 text-orange-500"
//                 : "border-transparent text-gray-400 hover:text-white"
//             }`}
//           >
//             Education
//           </button>
//         </div>

//         {/* CONTENT */}
//         <div className="max-w-3xl m-auto text-lg">
//           {activeTab === "experience" && (
//             <div className="space-y-4">
//               <div>
//                 <hr className="gradient-fade " />
//                 <div className="grid grid-cols-3 mb-1.5">
//                   <h3 className="col-span-2 text-xl">
//                     {" "}
//                     <strong>Shopify Developer</strong>
//                   </h3>
//                   <p className="justify-end text-end">May 2025</p>
//                 </div>

//                 <div className="grid grid-cols-2 ">
//                   <h3> Freelance </h3>
//                   <p className="justify-end text-end">Remote</p>
//                 </div>

//                 <hr className="gradient-fade" />
//                 <div className="grid grid-cols-3 mb-1.5">
//                   <h3 className="col-span-2 text-xl">
//                     {" "}
//                     <strong>Operations Manager</strong>
//                   </h3>
//                   <p className="justify-end text-end">Feb 2025 - May 2025</p>
//                 </div>

//                 <div className="grid grid-cols-2 ">
//                   <h3> Snack Snavvy Innovations </h3>
//                   <p className="justify-end text-end">Kota, Rajasthan, India</p>
//                 </div>

//                 <hr className="gradient-fade" />
//                 <div className="grid grid-cols-3 mb-1.5">
//                   <h3 className="col-span-2 text-xl">
//                     {" "}
//                     <strong>Planning Executive</strong>
//                   </h3>
//                   <p className="justify-end text-end">Sept 2024 - Feb 2025</p>
//                 </div>

//                 <div className="grid grid-cols-2 ">
//                   <h3> V Stainless LLP </h3>
//                   <p className="justify-end text-end">
//                     Siya, Madhya Pradesh, India
//                   </p>
//                 </div>

//                 <hr className="gradient-fade" />
//               </div>
//             </div>
//           )}

//           {activeTab === "education" && (
//             <div className="space-y-4">
//               <div>
//                 <hr className="gradient-fade" />
//                 <div className="grid grid-cols-3 mb-1.5">
//                   <h3 className="col-span-2 text-xl">
//                     {" "}
//                     <strong>
//                       B.Tech – Computer Science & Business Systems
//                     </strong>
//                   </h3>
//                   <p className="justify-end text-end">2020 - 2024</p>
//                 </div>

//                 <div className="">
//                   <h3 className="">
//                     {" "}
//                     Bharati Vidyapeeth Deemed University College of Engineering,
//                     Pune, Maharashtra, India
//                   </h3>
//                 </div>

//                 <hr className="gradient-fade" />

//                 <div className="grid grid-cols-3 mb-1.5">
//                   <h3 className="col-span-2 text-xl">
//                     {" "}
//                     <strong>12th- PCM</strong>
//                   </h3>
//                   <p className="justify-end text-end">2018 - 2019</p>
//                 </div>

//                 <div className=" ">
//                   <h3 className=""> Army Public School, MHOW</h3>
//                 </div>

//                 <hr className="gradient-fade" />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;
