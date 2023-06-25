import React from "react";

function IndustrialPlants() {
  return (
    <>
      <section>
        <section className="flex flex-wrap w-full ">
          <div className="flex100 w-full h-[500px] pb-[4px] md:relative ">
            <img
              src="/assets/images/TRADENEERS_Industrieanlagen-1.jpg"
              className="w-full h-full object-cover md:overflow-hidden "
              alt="Industrieanlagen"
            />
            <div className="bg-[rgba(255,255,255,0.9)] hidden md:block md:absolute left-0 lg:top-[150px] h-full w-[60%] lg:p-12 p-6 md:top-[160px] top-0">
              <p className=" openSans text-[#18395e]">
                <span className="lg:text-[36px] text-[30px] block openSansCon font-bold ">
                  Medical Equipment & Spare Parts
                </span>
                TRADENEERS is an expert in buying and selling used industrial
                equipment, production lines and large format tools. This also
                includes the procurement of suitable spare parts for industrial
                systems. The spectrum ranges from food processing, solar
                systems, wind turbines (WKA) to sawing machines. Whether
                titanium screws that are required in maintenance and in
                petrochemical plant construction, or parts of large printing and
                packaging machines - we are the right contact.
              </p>
            </div>
          </div>
          <div className="block md:hidden flex100 p-16">
            <p className="text-justify tracking-wide openSans text-[#18395e]">
              <span className="lg:text-[36px] text-[30px] block openSansCon font-bold ">
                Industrial equipment & spare parts
              </span>
              TRADENEERS is an expert in buying and selling used industrial
              equipment, production lines and large format tools. This also
              includes the procurement of suitable spare parts for industrial
              systems. The spectrum ranges from food processing, solar systems,
              wind turbines (WKA) to sawing machines. Whether titanium screws
              that are required in maintenance and in petrochemical plant
              construction, or parts of large printing and packaging machines -
              we are the right contact.
            </p>
          </div>
          <div className="md:flex50 flex100 md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px] relative ">
            <img
              src="/assets/images/TRADENEERS_Petrochemie.jpg"
              className="w-full h-full object-cover object-top"
              alt="PETROCHEMICALS"
            />
            <div>
              <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
                PETROCHEMICALS
              </span>
            </div>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pl-[4px]">
            <img
              src="/assets/images/TRADENEERS_Lebensmittelindustrie.jpg"
              className="w-full h-full object-cover"
              alt="FOOD PRODUCTION"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              FOOD PRODUCTION
            </span>
          </div>
          <div className=" flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px]">
            {" "}
            <img
              src="/assets/images/TRADENEERS_GreenEnergy.jpg"
              className="w-full h-full object-cover"
              alt="GREEN ENERGY"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              GREEN ENERGY
            </span>
          </div>
        </section>
      </section>
    </>
  );
}

export default IndustrialPlants;
