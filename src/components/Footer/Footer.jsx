import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className="flex flex-col justify-center bg-[#007BC2] ">
        <section className=" flex md:flex-row flex-col p-20 items-start justify-start space-y-10 md:space-y-0 md:justify-around h-auto">
          <section className="flex flex-col justify-center space-y-5 ">
            <span className="text-[16px] openSans font-bold text-white w-[50%]">
              {" "}
              Tradeneers GmbH
            </span>
            <span className="text-[16px] openSans  text-[#ffffff95] w-[50%]">
              {" "}
              Hermann-Ritter-Str. 112 28197 Bremen
            </span>
            <span className="text-[16px] openSans  text-[#ffffff95] w-[50%]">
              Telephone: +49 421 807 1834 0 Email: info@tradeneers.com
            </span>
          </section>
          <section className=" my-auto">
            <ul className="flex flex-col justify-center content-center space-y-5 footerListStyle">
              <li className="border-b-2 border-b-white text-white text-[16px] w-[90%] pb-2 hover:text-[#18395E]">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#18395E" : "",
                    };
                  }}
                  to="/imprint"
                >
                  imprint
                </NavLink>
              </li>
              <li className="border-b-2 border-b-white text-white text-[16px] w-[90%] pb-2 hover:text-[#18395E]">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#18395E" : "",
                    };
                  }}
                  to="/DataProtection"
                >
                  Data protection
                </NavLink>
              </li>
              <li className="border-b-2 border-b-white text-white text-[16px] w-[90%] pb-2 hover:text-[#18395E]">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#18395E" : "",
                    };
                  }}
                  to="/KlarnaPaymentInformation"
                >
                  Klarna Payment Information
                </NavLink>
              </li>
            </ul>
          </section>
        </section>
        <section className="bg-[#0E4094]">
          <p className="m-auto text-[#ffffff95] text-[14px] py-3 max-w-full text-center">
            © TRADENEERS GmbH 2021
          </p>
        </section>
      </section>
    </>
  );
}

export default Footer;
