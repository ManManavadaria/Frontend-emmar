import React from "react";
import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import ProjectsColumnlanguage from "components/ProjectsColumnlanguage";
import NavBar from "components/NavBar";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900 h-[593px] relative w-full">
          <Img
            className="h-[593px] m-auto object-cover w-full"
            src="images/img_hero.png"
            alt="hero"
          />
          <div className="absolute bottom-[17%] flex flex-col gap-6 items-start justify-center left-[13%] w-auto">
            <Text
              className="text-white-A700 text-xl tracking-[1.20px] uppercase w-auto"
              size="txtPoppinsMedium20WhiteA700"
            >
              PROJECTS
            </Text>
            <Text
              className="md:text-5xl text-[80px] text-white-A700 w-auto"
              size="txtGaramond80WhiteA700"
            >
              Our Work
            </Text>
          </div>
          <NavBar />
        </div>
        <div className="bg-white-A700_01 flex flex-col font-garamond gap-10 items-start justify-start md:px-10 sm:px-5 px-60 py-20 w-auto md:w-full">
          <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1440px] min-h-[auto] mx-auto w-full">
            <div className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full">
              <Img
                className="h-[432px] md:h-auto object-cover w-full"
                src="images/img_frame18557_432x464.png"
                alt="frame18557"
              />
              <div className="flex flex-col items-start justify-start p-8 sm:px-5 w-full">
                <Text
                  className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                  size="txtGaramond32Gray900"
                >
                  CocaCola Project
                </Text>
              </div>
            </div>
            <ProjectsColumnlanguage className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full" />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_4.png"
              projectname="Project Ibrahim Guled"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_5.png"
              projectname="Project yeni som"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_6.png"
              projectname="Riyo Travel agency Project"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_7.png"
              projectname="Villa Duplex Project"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_8.png"
              projectname="G+4 GL Construction Project"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_9.png"
              projectname="Executive Restaurant"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_4.png"
              projectname="Project Ibrahim Guled"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_10.png"
              projectname="Aparment Project"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_11.png"
              projectname="Bakaro Apartment Project"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_12.png"
              projectname="G+4  Apartment"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col h-full items-start justify-start w-full"
              userimage="images/img_frame18557_13.png"
              projectname="hijra Real Estate 10-20"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col h-full items-start justify-start w-full"
              userimage="images/img_frame18557_14.png"
              projectname="hijra Real Estate 20-20"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col h-full items-start justify-start w-full"
              userimage="images/img_frame18557_15.png"
              projectname="Himmah Property Duplex 10-20"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col h-full items-start justify-start w-full"
              userimage="images/img_frame18557_16.png"
              projectname="Himmah Property Duplex 15-20"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col h-full items-start justify-start w-full"
              userimage="images/img_frame18557_17.png"
              projectname="Himmah Property Villa"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col h-full items-start justify-start w-full"
              userimage="images/img_frame18557_18.png"
              projectname="inland revenue director office "
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_19.png"
              projectname="Kalkal Hospital"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_2.png"
              projectname="Laben Restaurant"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_20.png"
              projectname="Mesjid"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_21.png"
              projectname="QQ Hotel"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_22.png"
              projectname="QQ Resort"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_23.png"
              projectname="Smart techno"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_24.png"
              projectname="Waliyo Apartment"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_25.png"
              projectname="weding hall"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_26.png"
              projectname="airlines ethiopia"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_27.png"
              projectname="Amana"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_28.png"
              projectname="Aqua"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_29.png"
              projectname="Guled Yahye G+2"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_30.png"
              projectname="G+3 appartment"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_31.png"
              projectname="G+6 Apartment"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_32.png"
              projectname="G+9 Apartment"
            />
            <ProjectsColumnlanguage
              className="border border-gray-600 border-solid flex flex-1 flex-col items-start justify-start w-full"
              userimage="images/img_frame18557_33.png"
              projectname="Landscape"
            />
          </div>
        </div>
        <Footer className="bg-white-A700 flex font-poppins gap-2 items-center justify-center md:px-5 px-60 py-[69px] w-full" />
      </div>
    </>
  );
};

export default ProjectsPage;
