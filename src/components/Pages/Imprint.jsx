import React from "react";
function Imprint() {
  return (
    <>
      <section>
        <section className="mt-24 bg-[#007BC2] p-[64px]">
          <span className="w-full block p-10 font-semibold text-white text-[36px] openSans pl-20">
            imprint
          </span>
        </section>
        <section className=" p-[64px]">
          <p className="flex flex-col justify-center space-y-4 pl-20 text-[#18395E] text-[14px]">
            <span>
              Tradeneers GmbH
              <br /> Hermann-Ritter-Str. 112
              <br /> 28197 Bremen
              <br /> Germany
            </span>
            <span> Tel: 0421 80718340 </span>
            <span> Email: info@tradeneers.com </span>
            <span> Registration court: Bremen district court</span>
            <span> Registration number: HRB 37081 HB Managing </span>
            <span> Director: Bamshad Yazdanshenass</span>
            <span>
              {" "}
              Platform of the EU Commission for online dispute resolution:
              https://ec.europa.eu/odr
            </span>
            <span>
              {" "}
              We are neither obliged nor willing to participate in a dispute
              settlement procedure before a consumer arbitration board.
            </span>
          </p>
        </section>
      </section>
    </>
  );
}

export default Imprint;
