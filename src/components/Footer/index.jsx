import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1440px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-auto">
              <Img
                className="h-52 sm:h-auto object-cover w-[280px] md:w-full"
                src="images/img_emaarlogo021_208x280.png"
                alt="emaarlogo021_One"
              />
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  <a href="https://web.facebook.com/emaarsomalia" target="true">
                    <Img
                      className="h-5"
                      src="images/img_lafacebookf.svg"
                      alt="facebook"
                    />
                  </a>
                </Button>

                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  <a
                    href="https://twitter.com/emaarsom?fbclid=IwAR31ywCLfNs1AkwPakn4GLttxBCsxTt8z1BQBjSZOLjP5Pm7O8mSdMFbpto"
                    target="true"
                  >
                    <Img
                      className="h-5"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                  </a>
                </Button>
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  <a
                    href="https://www.linkedin.com/in/emaarsom/?fbclid=IwAR1c7B6vF6qd7XFuiTE_lx5Td0hoJGXZfGo08ValFPrKz_nTipEOOFeb-SY"
                    target="true"
                  >
                    <Img
                      className="h-5"
                      src="images/img_lalinkedinin.svg"
                      alt="lalinkedinin"
                    />
                  </a>
                </Button>
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  <a
                    href="https://www.instagram.com/emaarcosomalia/?fbclid=IwAR1s_7fDJmtf2vIlAdWSP3gpvSR62nrXs5-5rRHwpDhWJBs8mkfV-w-L7BI"
                    target="true"
                  >
                    <Img className="h-4" src="images/img_info.svg" alt="info" />
                  </a>
                </Button>
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  <a
                    href="https://www.tiktok.com/@emaarsom?fbclid=IwAR0k6Nxzgndj-OIOpNgrJUhQvRGa6OyAe0Zc6D9-k7bFTnlOxQ4MoMRpfKU"
                    target="true"
                  >
                    <Img src="images/img_vector.svg" alt="vector" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-40 items-start md:w-full justify-between w-auto sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtPoppinsSemiBold18"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    {/* Use Link instead of a tag for navigation */}
                    <Link to="/">
                      <Text
                        className="text-gray-600 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Home
                      </Text>
                    </Link>
                  </li>
                  <li>
                    {/* Example: link to a services page */}
                    <Link to="/services">
                      <Text
                        className="text-gray-600 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Services
                      </Text>
                    </Link>
                  </li>
                  <li>
                    {/* Example: link to a projects page */}
                    <Link to="/projects">
                      <Text
                        className="text-gray-600 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Projects
                      </Text>
                    </Link>
                  </li>
                  <li>
                    {/* Example: link to a contact page */}
                    <Link to="/contacts">
                      <Text
                        className="text-gray-600 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Contact
                      </Text>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-[292px]">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtPoppinsSemiBold18"
                >
                  Contact
                </Text>
                <ul className="flex flex-col gap-4 items-start justify-start w-full common-column-list">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/6aoJb1m1Ycb7VgJD8 "
                      target="true"
                    >
                      <div
                        className="flex flex-row gap-4 items-start justify-center md:w-full"
                      >
                        <Img
                          className="h-6 w-6"
                          src="images/img_carbonlocationfilled.svg"
                          alt="carbonlocationf"
                        />
                        <Text
                          className="flex-1 leading-[30.00px] max-w-[252px] md:max-w-full text-gray-600 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          1st Floor, Office 101, Sultan Business Park ,
                          Mogadishu, Somalia
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:252611110099" target="true">
                      <div
                        className="flex flex-row gap-4 items-center justify-center md:w-full"
                      >
                        <Img
                          className="h-6 w-6"
                          src="images/img_carbonphonefilled.svg"
                          alt="carbonphonefill"
                        />
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtPoppinsRegular18"
                        >
                          252611110099
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@emaar.so">
                      <div
                        className="flex flex-row gap-4 items-center justify-center md:w-full"
                      >
                        <Img
                          className="h-6 md:h-auto object-cover w-6"
                          src="images/img_icon_24x24.png"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtPoppinsRegular18"
                        >
                          info@emaar.so
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-full md:w-full">
            <Line className="bg-gray-600 h-px w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1440px] w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-1.5 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsRegular16"
                >
                  ©2023
                </Text>
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsRegular16"
                >
                  EMAAR Construction and Real Estate.
                </Text>
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsRegular16"
                >
                  All rights reserved.
                </Text>
              </div>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsRegular16"
                  onClick={() => {
                    navigate("/privacypolicy");
                  }}
                >
                  Privacy Policy
                </Text>
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsRegular16"
                  onClick={() => {
                    navigate("/termsofservice");
                  }}
                >
                  Terms of Service
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
