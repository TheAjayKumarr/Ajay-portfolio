import { useState } from "react";

function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="overflow-hidden bg-gray-950 text-color min-h-[600px]">
      <div className="max-w-4xl m-auto mt-4 mb-4 pb-2 ">
        <div className="max-w-3xl flex justify-center m-auto text-4xl lg:text-6xl font-extrabold uppercase pb-12 pt-16 bbh-bartle-regular">
          <p className="text-orange-500">Career</p>
        </div>

        <div className="flex justify-center gap-8 mb-10">
          <button
            onClick={() => setActiveTab("experience")}
            className={`text-2xl font-bold pb-2 border-b-2 transition ${
              activeTab === "experience"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            Experience
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`text-2xl font-bold pb-2 border-b-2 transition ${
              activeTab === "education"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            Education
          </button>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl m-auto text-lg">
          {activeTab === "experience" && (
            <div className="space-y-4">
              <div>
                <hr className="gradient-fade" />
                <div className="grid grid-cols-3 mb-1.5">
                  <h3 className="col-span-2 text-xl">
                    {" "}
                    <strong>Operations Manager</strong>
                  </h3>
                  <p className="justify-end text-end">Feb 2025 - May 2025</p>
                </div>

                <div className="grid grid-cols-2 ">
                  <h3> Snack Snavvy Innovations </h3>
                  <p className="justify-end text-end">Kota, Rajasthan, India</p>
                </div>

                <hr className="gradient-fade" />
                <div className="grid grid-cols-3 mb-1.5">
                  <h3 className="col-span-2 text-xl">
                    {" "}
                    <strong>Planning Executive</strong>
                  </h3>
                  <p className="justify-end text-end">Sept 2024 - Feb 2025</p>
                </div>

                <div className="grid grid-cols-2 ">
                  <h3> V Stainless LLP </h3>
                  <p className="justify-end text-end">
                    Siya, Madhya Pradesh, India
                  </p>
                </div>

                <hr className="gradient-fade" />
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4">
              <div>
                <hr className="gradient-fade" />
                <div className="grid grid-cols-3 mb-1.5">
                  <h3 className="col-span-2 text-xl">
                    {" "}
                    <strong>
                      B.Tech – Computer Science & Business Systems
                    </strong>
                  </h3>
                  <p className="justify-end text-end">2020 - 2024</p>
                </div>

                <div className="grid grid-cols-3 ">
                  <h3 className="col-span-2">
                    {" "}
                    Bharati Vidyapeeth Deemed University College of Engineering,
                    Pune, Maharashtra, India
                  </h3>
                  <p className="justify-end text-end">8.63 CGPA </p>
                </div>

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
