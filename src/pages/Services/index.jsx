import React from "react";
import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { useNavigate } from "react-router-dom";


const ServicesPage = () => {
  const navigate = useNavigate()
  
  const handleClick = ()=>{
    navigate("/contacts")
  }
  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900 h-[593px] relative w-full">
          <Img
            className="h-[593px] m-auto object-cover w-full"
            src="images/img_hero_2.webp"
            alt="hero"
          />
          <div className="absolute bottom-[17%] flex flex-col gap-6 items-start justify-center left-[12%] w-auto">
            <Text
              className="text-white-A700 text-xl tracking-[1.20px] uppercase w-auto"
              size="txtPoppinsMedium20WhiteA700"
            >
              Services
            </Text>
            <Text
              className="md:text-5xl text-[80px] text-white-A700 w-auto"
              size="txtGaramond80WhiteA700"
            >
              What We Do
            </Text>
          </div>
            <NavBar/>
        </div>
        <div className="bg-white-A700_01 font-garamond gap-10 grid md:grid-cols-1 grid-cols-2 items-start min-h-[auto] md:px-10 sm:px-5 px-60 py-20 w-auto md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="relative w-full">
              <Img
                className="h-[432px] m-auto object-cover w-full"
                src="images/img_frame18557.webp"
                alt="frame18557"
              />
              <div className="absolute bg-gray-900 bottom-[0] flex flex-col h-[100px] items-center justify-start left-[0] p-5 w-[100px]">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_television_white_a700.webp"
                  alt="television"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                size="txtGaramond32Gray900"
              >
                Architecture Design
              </Text>
              <div className="flex flex-row font-poppins gap-6 items-start justify-start w-auto" onClick={handleClick}>
                <Text
                  className="text-center text-lg text-lime-900 tracking-[0.18px] uppercase w-auto"
                  size="txtPoppinsRegular18Lime900"
                  
                >
                  learn more
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.webp"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Img
                className="h-[432px] md:h-auto object-cover w-full"
                src="images/img_frame18557_432x700.webp"
                alt="frame18557"
              />
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                size="txtGaramond32Gray900"
              >
                MEP Engineering
              </Text>
              <div className="flex flex-row font-poppins gap-6 items-start justify-start w-auto" onClick={handleClick}>
                <Text
                  className="text-center text-lg text-lime-900 tracking-[0.18px] uppercase w-auto"
                  size="txtPoppinsRegular18Lime900"
                >
                  learn more
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.webp"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Img
                className="h-[432px] md:h-auto object-cover w-full"
                src="images/img_frame18557_1.webp"
                alt="frame18557"
              />
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                size="txtGaramond32Gray900"
              >
                Civil Engineering
              </Text>
              <div className="flex flex-row font-poppins gap-6 items-start justify-start w-auto" onClick={handleClick}>
                <Text
                  className="text-center text-lg text-lime-900 tracking-[0.18px] uppercase w-auto"
                  size="txtPoppinsRegular18Lime900"
                >
                  learn more
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.webp"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[432px] items-start justify-end md:pr-10 sm:pr-5 pr-[332px] pt-[332px] w-full"
                style={{
                  backgroundImage: "url('images/img_frame18557_34.webp')",
                }}
              >
                <div className="bg-gray-900 flex flex-col h-[100px] items-center 
                -start p-5 w-[100px]">
                  <Img
                    className="h-[60px] md:h-auto object-cover w-[60px]"
                    src="images/img_maskgroup.webp"
                    alt="maskgroup"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                size="txtGaramond32Gray900"
              >
                Landscape Design
              </Text>
              <div className="flex flex-row font-poppins gap-6 items-start justify-start w-auto" onClick={handleClick}>
                <Text
                  className="text-center text-lg text-lime-900 tracking-[0.18px] uppercase w-auto"
                  size="txtPoppinsRegular18Lime900"
                >
                  learn more
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.webp"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Img
                className="h-[432px] md:h-auto object-cover w-full"
                src="images/img_frame18557_2.webp"
                alt="frame18557"
              />
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                size="txtGaramond32Gray900"
              >
                Interior Fitout Works
              </Text>
              <div className="flex flex-row font-poppins gap-6 items-start justify-start w-auto" onClick={handleClick}>
                <Text
                  className="text-center text-lg text-lime-900 tracking-[0.18px] uppercase w-auto"
                  size="txtPoppinsRegular18Lime900"
                >
                  learn more
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.webp"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Img
                className="h-[432px] md:h-auto object-cover w-full"
                src="images/img_frame18557_3.webp"
                alt="frame18557"
              />
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                size="txtGaramond32Gray900"
              >
                Construction Management
              </Text>
              <div className="flex flex-row font-poppins gap-6 items-start justify-start w-auto" onClick={handleClick}>
                <Text 
                  className="text-center text-lg text-lime-900 tracking-[0.18px] uppercase w-auto"
                  size="txtPoppinsRegular18Lime900"
                >
                  learn more
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.webp"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex font-poppins gap-2 items-center justify-center md:px-5 px-60 py-[69px] w-full" />
      </div>
    </>
  );
};

export default ServicesPage;
