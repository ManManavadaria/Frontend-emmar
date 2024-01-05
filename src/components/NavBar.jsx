import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Text } from "./Text/index";
import { Img } from "./Img";
import { Line } from "./Line/index";
import { RxHamburgerMenu } from "react-icons/rx";

const props = {
  headertext: "Inspiring Designs, Solid Constructions.",
  contactbutton: "contact us",
  hometext: "home",
  servicestext: "Services",
  projectstext: "PROJECTS",
  contacttext: "contact",
  languagetext1: "English",
  languagetext2: "somalian",
};

const isActive = (path) => window.location.pathname === path;

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="h-52 absolute flex md:flex-col justify-between flex-row md:gap-5 inset-x-[0] items-center  mx-auto top-[0] w-screen transition-all duration-300">
        <Img
          className="h-[250px] md:[200px] md:w-[200px] sm:w-[150px] sm:h-[150px] md:h-auto object-cover w-[250px] md:absolute md:left-[0px] md:top-[0px]"
          src="images/img_emaarlogo021.webp"
          alt="emaarlogo021"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="absolute md:nav-btn md:block top-[40px] right-[40px] transition-all duration-700">
          <button
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <RxHamburgerMenu color="white" className="md:block lg:hidden w-[20px]" />
          </button>
        </div>
        <div
          className={
            navOpen
              ? "flex md:flex-1 md:flex-col lg:flex-row sm:gap-[49px] items-center justify-between md:justify-center md:ml-[0] md:mt-0 my-[106px] md:w-full md:bg-black md:bg-opacity-90 md:text-white md:p-8 transition-transform duration-700"
              : "md:hidden"
          }
        >
          <div className="flex flex-col gap-[7px] items-center justify-start md:justify-center md:w-full md:mt-[100px] transition-transform duration-700">
            <ul className="md:flex-col flex lg:flex-row gap-[50px] items-center lg:items-center justify-start w-auto md:w-full common-row-list">
              <li>
                <Link
                  to="/"
                  className={`text-center text-lg text-white-A700 tracking-[0.18px] uppercase ${
                    isActive("/") ? "border-b" : ""
                  }`}
                >
                  <Text size="txtPoppinsRegular18WhiteA700">
                    {props?.hometext}
                  </Text>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`text-center text-lg text-white-A700 tracking-[0.18px] uppercase ${
                    isActive("/services") ? "border-b" : ""
                  }`}
                >
                  <Text size="txtPoppinsRegular18WhiteA700">
                    {props?.servicestext}
                  </Text>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`text-center text-lg text-white-A700 tracking-[0.18px] uppercase ${
                    isActive("/projects") ? "border-b" : ""
                  }`}
                >
                  <Text size="txtPoppinsRegular18WhiteA700">
                    {props?.projectstext}
                  </Text>
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className={`text-center text-lg text-white-A700 tracking-[0.18px] uppercase ${
                    isActive("/contacts") ? "border-b" : ""
                  }`}
                >
                  <Text size="txtPoppinsRegular18WhiteA700">
                    {props?.contacttext}
                  </Text>
                </Link>
              </li>
              <li>
                <select className="text-center text-white-A700 bg-transparent rounded tracking-[0.18px] uppercase items-center">
                  <option value={props?.languagetext1}>
                    {props?.languagetext1}
                  </option>
                  <option value={props?.languagetext2}>
                    {props?.languagetext2}
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
