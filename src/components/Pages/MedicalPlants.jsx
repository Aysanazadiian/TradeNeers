import React from "react";
function MedicalPlants() {
  return (
    <>
      <section>
        <section className="flex flex-wrap w-full ">
          <div className="flex100 w-full h-[500px] pb-[4px] md:relative ">
            <img
              src="/assets/images/AdobeStock_94839391_Preview.jpeg"
              className="w-full h-full object-cover md:overflow-hidden "
              alt="Medical Equipment"
            />
            <div className="bg-[rgba(255,255,255,0.9)] hidden md:block md:absolute left-0 lg:top-[150px] h-full w-[60%] lg:p-12 p-6 md:top-[160px] top-0">
              <p className=" openSans text-[#18395e]">
                <span className="lg:text-[36px] text-[30px] block openSansCon font-bold ">
                  Medical Equipment & Spare Parts
                </span>
                TRADENEERS trades in professional medical technology equipment
                with great care and the highest quality standards. Smooth
                product purchasing is essential for medical practices, hospitals
                and medical care centers. TRADENEERS delivers medical technology
                safely and reliably worldwide.
              </p>
            </div>
          </div>
          <div className="block md:hidden flex100 p-16">
            <p className="text-justify tracking-wide openSans text-[#18395e]">
              <span className="lg:text-[36px] text-[30px] block openSansCon font-bold ">
              Medical Equipment & Spare Parts
              </span>
              TRADENEERS trades in professional medical technology equipment
              with great care and the highest quality standards. Smooth product
              purchasing is essential for medical practices, hospitals and
              medical care centers. TRADENEERS delivers medical technology
              safely and reliably worldwide.
            </p>
          </div>
          <div className="md:flex50 flex100 md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px] relative ">
            <img
              src="/assets/images/TRADENEERS_Monitor.jpg"
              className="w-full h-full object-cover object-top"
              alt="CARDIOLOGY"
            />
            <div>
              <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              CARDIOLOGY
              </span>
            </div>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pl-[4px]">
            <img
              src="/assets/images/TRADENEERS_Radiologie.jpg"
              className="w-full h-full object-cover"
              alt="RADIOLOGY"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
            RADIOLOGY
            </span>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px]">
            {" "}
            <img
              src="/assets/images/TRADENEERS_Op-Saal.jpg"
              className="w-full h-full object-cover"
              alt="SURGERY"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
            SURGERY
            </span>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px]">
            {" "}
            <img
              src="/assets/images/AdobeStock_312508645_Preview.jpeg"
              className="w-full h-full object-cover"
              alt="LABORATORY"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
            LABORATORY
            </span>
          </div>
        </section>
      </section>
    </>
  );
}

export default MedicalPlants;
