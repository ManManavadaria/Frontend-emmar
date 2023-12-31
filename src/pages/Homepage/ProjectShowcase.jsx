import React, { useState } from "react";
import { Text, Img, Line, Button } from "components";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projectData = [
  { userimage: "images/img_frame18557_432x464.webp", projectname: "CocaCola Project" },
  { userimage: "images/img_rectangle2.webp", projectname: "Project Hareed Hotel" },
  { userimage: "images/img_frame18557_4.webp", projectname: "Project Ibrahim Guled" },
  { userimage: "images/img_frame18557_5.webp", projectname: "Project yeni som" },
  { userimage: "images/img_frame18557_6.webp", projectname: "Riyo Travel agency Project" },
  { userimage: "images/img_frame18557_7.webp", projectname: "Villa Duplex Project" },
  { userimage: "images/img_frame18557_8.webp", projectname: "G+4 GL Construction Project" },
  { userimage: "images/img_frame18557_9.webp", projectname: "Executive Restaurant" },
  { userimage: "images/img_frame18557_10.webp", projectname: "Aparment Project" },
  { userimage: "images/img_frame18557_11.webp", projectname: "Bakaro Apartment Project" },
  { userimage: "images/img_frame18557_12.webp", projectname: "G+4  Apartment" },
  { userimage: "images/img_frame18557_13.webp", projectname: "hijra Real Estate 10-20" },
  { userimage: "images/img_frame18557_14.webp", projectname: "hijra Real Estate 20-20" },
  { userimage: "images/img_frame18557_15.webp", projectname: "Himmah Property Duplex 10-20" },
  { userimage: "images/img_frame18557_16.webp", projectname: "Himmah Property Duplex 15-20" },
  { userimage: "images/img_frame18557_17.webp", projectname: "Himmah Property Villa" },
  { userimage: "images/img_frame18557_18.webp", projectname: "inland revenue director office" },
  { userimage: "images/img_frame18557_19.webp", projectname: "Kalkal Hospital" },
  { userimage: "images/img_frame18557_2.webp", projectname: "Laben Restaurant" },
  { userimage: "images/img_frame18557_20.webp", projectname: "Mesjid" },
  { userimage: "images/img_frame18557_21.webp", projectname: "QQ Hotel" },
  { userimage: "images/img_frame18557_22.webp", projectname: "QQ Resort" },
  { userimage: "images/img_frame18557_23.webp", projectname: "Smart techno" },
  { userimage: "images/img_frame18557_24.webp", projectname: "Waliyo Apartment" },
  { userimage: "images/img_frame18557_25.webp", projectname: "weding hall" },
  { userimage: "images/img_frame18557_26.webp", projectname: "airlines ethiopia" },
  { userimage: "images/img_frame18557_27.webp", projectname: "Amana" },
  { userimage: "images/img_frame18557_28.webp", projectname: "Aqua" },
  { userimage: "images/img_frame18557_29.webp", projectname: "Guled Yahye G+2" },
  { userimage: "images/img_frame18557_30.webp", projectname: "G+3 appartment" },
  { userimage: "images/img_frame18557_31.webp", projectname: "G+6 Apartment" },
  { userimage: "images/img_frame18557_32.webp", projectname: "G+9 Apartment" },
  { userimage: "images/img_frame18557_33.webp", projectname: "Landscape" },
];


const ProjectShowcase = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const handleChangeImage = (newIndex) => {
        if (newIndex < 0) {
          newIndex = projectData.length - 1;
        } else if (newIndex >= projectData.length) {
          newIndex = 0;
        }
        setCurrentImageIndex(newIndex);
      };
    return (
    <div className="flex sm:flex-col flex-row items-start justify-start w-full md:w-full">
      <Img
        className="object-cover w-[60vw] sm:w-full sm:h-[300px] md:h-[600px] lg:h-[600px]"
        src={projectData[currentImageIndex].userimage}
        alt="rectangleTwo"
      />
      <div className="bg-gray-900 flex flex-col items-center sm:h-auto h-[600px] w-[40vw] md:px-5  sm:w-full">
        <div className="m-auto flex flex-col md:gap-4 items-center justify-between w-[90%] h-full my-16 sm:my-4 sm:w-full sm:h-full">
          <div className="flex sm:flex-col flex-row sm:gap-4 items-center justify-start w-full p-4 ">
            <Text
              className="text-white-A700 text-xl text-center tracking-[2.40px] uppercase"
              size="txtPoppinsRegular20WhiteA700"
            >
              {currentImageIndex+1}/33
            </Text>
            <Line className="bg-white-A700 h-px sm:mt-0 my-[23px] w-[56%]" />
            <div className="sm:flex sm:flex-row flex flex-row">
            <FaChevronCircleLeft
              color="white"
              className="h-[60px] w-[60px]"
              onClick={() => handleChangeImage(currentImageIndex - 1)}
              />
            <FaChevronCircleRight
              color="white"
              className="h-[60px] w-[60px]"
              onClick={() => handleChangeImage(currentImageIndex + 1)}
            />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center w-auto sm:w-full">
            <Text
              className="text-center text-white-A700 text-xl tracking-[1.20px] uppercase w-auto"
              size="txtPoppinsMedium20WhiteA700"
            >
              Our Projects
            </Text>
            <Text
              className="md:text-5xl text-center text-[60px] text-white-A700 w-auto sm:text-[38px]"
              size="txtGaramond80WhiteA700"
            >
              {projectData[currentImageIndex].projectname}
            </Text>
          </div>
          <Button
            className="items-center justify-end cursor-pointer leading-[normal] min-w-[222px] text-center text-lg tracking-[0.18px] uppercase"
            shape="square"
            color="lime_900"
            size="sm"
            variant="fill"
            onClick={() => navigate("/projects")}
          >
            see all projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
