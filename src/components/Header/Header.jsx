import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
import { FaBars } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const OpenMenu = () => setOpen(!open);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header>
      <section>
        <section
          className={`md:block hidden  ${
            color
              ? "md:fixed top-0 lg:h-[98px] z-50 h-[150px] w-full bg-[#18395e] transition-all duration-300"
              : "md:fixed shadow-lg shadow-slate-500 top-0 lg:h-[98px] z-50 h-[150px] w-full bg-white transition-all duration-300"
          }`}
        >
          <section className="flex flex-row justify-evenly lg:leading-[98px] OpenSans flex-wrap">
            <section id="Logo">
              <a href="/">
                <img
                  src="/assets/images/TRADENEERS_LOGO.png"
                  alt="logo"
                  className={` ${
                    color
                      ? "hidden transition-all duration-300"
                      : "block transition-all duration-300"
                  }`}
                />
                <img
                  src="/assets/images/TRADENEERS_LOGO_semi.png"
                  alt="logo"
                  className={
                    color
                      ? "block transition-all duration-300"
                      : "hidden transition-all duration-300"
                  }
                />
              </a>
            </section>
            <section id="Navbar">
              <ul
                className={`flex flex-row justify-evenly lg:space-x-3 space-x-3 font-bold text-[14px]
          ${color ? "text-white" : ""}
        }`}
              >
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#347ABC" : "",
                        borderBottomWidth: isActive ? "2px" : "",
                        borderBottomColor: isActive ? "#347ABC" : "",
                      };
                    }}
                    className="navbar"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#347ABC" : "",
                        borderBottomWidth: isActive ? "2px" : "",
                        borderBottomColor: isActive ? "#347ABC" : "",
                      };
                    }}
                    className="navbar"
                    to="/Groceries"
                  >
                    Groceries
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#347ABC" : "",
                        borderBottomWidth: isActive ? "2px" : "",
                        borderBottomColor: isActive ? "#347ABC" : "",
                      };
                    }}
                    className="navbar"
                    to="/RawMaterials"
                  >
                    raw materials
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#347ABC" : "",
                        borderBottomWidth: isActive ? "2px" : "",
                        borderBottomColor: isActive ? "#347ABC" : "",
                      };
                    }}
                    className="navbar"
                    to="/ConstructionMachinary"
                  >
                    construction machinary
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#347ABC" : "",
                        borderBottomWidth: isActive ? "2px" : "",
                        borderBottomColor: isActive ? "#347ABC" : "",
                      };
                    }}
                    className="navbar"
                    to="/IndustrialPlants"
                  >
                    industrial plants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#347ABC" : "",
                        borderBottomWidth: isActive ? "2px" : "",
                        borderBottomColor: isActive ? "#347ABC" : "",
                      };
                    }}
                    className="navbar"
                    to="/MedicalPlants"
                  >
                    medical plants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#347ABC" : "",
                        borderBottomWidth: isActive ? "2px" : "",
                        borderBottomColor: isActive ? "#347ABC" : "",
                      };
                    }}
                    className="navbar"
                    to="/"
                  >
                    contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#347ABC" : "",
                        borderBottomWidth: isActive ? "2px" : "",
                        borderBottomColor: isActive ? "#347ABC" : "",
                      };
                    }}
                    className="navbar"
                    to="/Imprint"
                  >
                    imprint
                  </NavLink>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section className="md:hidden block relative ">
          <section className=" h-[104px] OpenSans flex-wrap relative  z-[2]">
            <section
              id="Logo"
              className="py-5 px-8 items-center flex flex-row justify-between bg-white"
            >
              <a href="/">
                <img
                  src="/assets/images/TRADENEERS_ICON2x.png"
                  alt="logo"
                  className="w-auto h-auto max-h-[64px]"
                />
              </a>
              <FaBars
                className="text-xl text-[#9ea0a4] cursor-pointer"
                onClick={OpenMenu}
              />
            </section>

            <ul
              className={`flex flex-col bg-[#F6F6F6] font-bold text-[14px] absolute transition-all duration-300 ease-in w-full -z-20 ${
                !open ? " top-[-490px]" : " top-[100px]"
              } `}
            >
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#347ABC" : "",
                    };
                  }}
                  className="navbarMobile"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#347ABC" : "",
                    };
                  }}
                  className="navbarMobile"
                  to="/Groceries"
                >
                  Groceries
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#347ABC" : "",
                    };
                  }}
                  className="navbarMobile"
                  to="/RawMaterials"
                >
                  raw materials
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#347ABC" : "",
                    };
                  }}
                  className="navbarMobile"
                  to="/ConstructionMachinary"
                >
                  construction machinary
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#347ABC" : "",
                    };
                  }}
                  className="navbarMobile"
                  to="/IndustrialPlants"
                >
                  industrial plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#347ABC" : "",
                    };
                  }}
                  className="navbarMobile"
                  to="/MedicalPlants"
                >
                  medical plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#347ABC" : "",
                    };
                  }}
                  className="navbarMobile"
                  to="/"
                >
                  contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#347ABC" : "",
                    };
                  }}
                  className="navbarMobile"
                  to="/Imprint"
                >
                  imprint
                </NavLink>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </header>
  );
}

export default Header;
