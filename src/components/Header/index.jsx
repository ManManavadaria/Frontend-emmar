import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[250px] md:h-auto object-cover w-[250px]"
          src="images/img_emaarlogo021.png"
          alt="emaarlogo021"
        />
        <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between md:ml-[0] ml-[577px] md:mt-0 my-[106px] w-[44%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[78%] sm:w-full">
            <ul className="flex sm:flex-col flex-row gap-[60px] sm:hidden items-start justify-start w-auto sm:w-full common-row-list">
              <li>
                <Text
                  className="text-center text-lg text-white-A700 tracking-[0.18px] uppercase"
                  size="txtPoppinsRegular18WhiteA700"
                >
                  home
                </Text>
              </li>
              <li>
                <Text
                  className="text-center text-lg text-white-A700 tracking-[0.18px] uppercase"
                  size="txtPoppinsRegular18WhiteA700"
                >
                  Services
                </Text>
              </li>
              <li>
                <Text
                  className="text-center text-lg text-white-A700 tracking-[0.18px] uppercase"
                  size="txtPoppinsRegular18WhiteA700"
                >
                  PROJECTS
                </Text>
              </li>
              <li>
                <Text
                  className="text-center text-lg text-white-A700 tracking-[0.18px] uppercase"
                  size="txtPoppinsRegular18WhiteA700"
                >
                  contact
                </Text>
              </li>
            </ul>
          </div>
          <div className="bg-white-A700_1e flex flex-row gap-1 items-center justify-start px-3 py-2 rounded-lg w-auto">
            <Text
              className="capitalize text-center text-sm text-white-A700 tracking-[0.14px] w-auto"
              size="txtPoppinsRegular14"
            >
              English
            </Text>
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
