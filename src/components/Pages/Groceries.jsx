import React from "react";

function Groceries() {
  return (
    <>
      <section>
        <section className="flex flex-wrap w-full ">
          <div className="flex100 w-full h-[500px] pb-[4px] md:relative ">
            <img
              src="/assets/images/bellpeper.jpeg"
              className="w-full h-full object-cover md:overflow-hidden "
              alt="bellpeper"
            />
            <div className="bg-[rgba(255,255,255,0.9)] hidden md:block md:absolute right-0 lg:top-[150px] h-full w-[55%] lg:p-12 p-6 md:top-[160px] top-0">
              <p className="text-justify tracking-wide openSans text-[#18395e]">
                <span className="text-[42px] block openSansCon font-bold ">
                  Groceries
                </span>
                TRADENEERS offers a wide range of groceries. Our assortment
                ranges from local apples to exotic tropical fruits, dried fruit,
                various types of sugar and cooking oils, as well as high-quality
                spices. In addition to product diversity, the quality
                requirements of our customers are particularly important to us.
                Thanks to modern cooling technology with optimal temperature
                zones, the vegetables in our supply chains are always fresh and
                can be transported optimally.
              </p>
            </div>
          </div>
          <div className="block md:hidden flex100 p-16">
            <p className="text-justify tracking-wide openSans text-[#18395e]">
              <span className="text-[42px] block openSansCon font-bold ">
                Groceries
              </span>
              TRADENEERS offers a wide range of groceries. Our assortment ranges
              from local apples to exotic tropical fruits, dried fruit, various
              types of sugar and cooking oils, as well as high-quality spices.
              In addition to product diversity, the quality requirements of our
              customers are particularly important to us. Thanks to modern
              cooling technology with optimal temperature zones, the vegetables
              in our supply chains are always fresh and can be transported
              optimally.
            </p>
          </div>
          <div className="md:flex50 flex100 md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px] relative ">
            <img
              src="/assets/images/zucchini.jpg"
              className="w-full h-full object-cover object-top"
              alt="zucchini"
            />
            <div>
              <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
                FRESH PRODUCE
              </span>
            </div>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pl-[4px]">
            <img
              src="/assets/images/oil.jpg"
              className="w-full h-full object-cover"
              alt="oil"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              COOKING OILS
            </span>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pr-[4px]">
            {" "}
            <img
              src="/assets/images/suger.jpg"
              className="w-full h-full object-cover"
              alt="suger"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              SUGAR
            </span>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:py-[4px] md:pl-[4px]">
            {" "}
            <img
              src="/assets/images/raisin.jpg"
              className="w-full h-full object-cover"
              alt="raisin"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              DRIED FRUIT
            </span>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:pt-[4px] md:pr-[4px]">
            {" "}
            <img
              src="/assets/images/nuts.jpg"
              className="w-full h-full object-cover"
              alt="nuts"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              NUTS
            </span>
          </div>
          <div className="md:flex50 flex100 relative md:h-[400px] h-[175px] inline-block md:pt-[4px] md:pl-[4px]">
            {" "}
            <img
              src="/assets/images/spices.jpg"
              className="w-full h-full object-cover"
              alt="spices"
            />
            <span className="text-[#18395e] font-extrabold py-[15px] px-[45px] text-[18px] block openSansCon bg-[rgba(255,255,255,0.88)] absolute right-0 top-0 ">
              SPICES
            </span>
          </div>
        </section>
      </section>
    </>
  );
}

export default Groceries;
