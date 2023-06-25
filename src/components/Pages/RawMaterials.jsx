import React from "react";

function RawMaterials() {
  return (
    <>
      <section>
        <section className="flex flex-wrap w-full ">
          <div className="flex100 w-full h-[500px] pb-[4px] md:relative ">
            <img
              src="/assets/images/coal.jpg"
              className="w-full h-full object-cover md:overflow-hidden "
              alt="coal"
            />
            <div className="bg-[rgba(255,255,255,0.9)] hidden md:block md:absolute left-0 lg:top-[150px] h-full w-[55%] lg:p-12 p-6 md:top-[160px] top-0">
              <p className=" openSans text-[#18395e]">
                <span className="text-[42px] block openSansCon font-bold ">
                  raw materials
                </span>
                One focus of the trading company TRADENEERS is the purchase and
                sale of wood and natural stone: TRADENEERS has the opportunity
                to arrange special and unusual contingents via mature sales
                networks. A special material is essential for further processing
                into high-quality tables, cupboards and interior fittings for
                living spaces. Do you need chemical raw materials, metals or
                ores? We would be happy to advise you on this over the phone.
              </p>
            </div>
          </div>
          <div className="block md:hidden flex100 p-16">
            <p className="text-justify tracking-wide openSans text-[#18395e]">
              <span className="text-[42px] block openSansCon font-bold ">
                raw materials
              </span>
              One focus of the trading company TRADENEERS is the purchase and
              sale of wood and natural stone: TRADENEERS has the opportunity to
              arrange special and unusual contingents via mature sales networks.
              A special material is essential for further processing into
              high-quality tables, cupboards and interior fittings for living
              spaces. Do you need chemical raw materials, metals or ores? We
              would be happy to advise you on this over the phone.
            </p>
          </div>
          <div className="md:flex50 flex100 md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px] relative ">
            <img
              src="/assets/images/wood.jpeg"
              className="w-full h-full object-cover object-top"
              alt="wood"
            />
            <div>
              <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
                WOOD
              </span>
            </div>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pl-[4px]">
            <img
              src="/assets/images/stone.jpg"
              className="w-full h-full object-cover"
              alt="NATURAL STONE"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              NATURAL STONE
            </span>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px]">
            {" "}
            <img
              src="/assets/images/chemical rawmaterial.jpg"
              className="w-full h-full object-cover"
              alt="CHEMICAL RAW MATERIALS"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              CHEMICAL RAW MATERIALS
            </span>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pl-[4px]">
            {" "}
            <img
              src="/assets/images/metal.jpg"
              className="w-full h-full object-cover"
              alt="metal"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              METALS
            </span>
          </div>
          <div className="flex100 relative md:h-[400px] h-[175px] inline-block md:pt-[4px] md:pr-[4px]">
            {" "}
            <img
              src="/assets/images/mountain.jpg"
              className="w-full h-full object-cover"
              alt="mountain"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              ORES
            </span>
          </div>
        </section>
      </section>
    </>
  );
}

export default RawMaterials;
