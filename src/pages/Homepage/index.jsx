import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";
import HomepageStack12photothree from "components/HomepageStack12photothree";
import HomepageTeam from "components/HomepageTeam";
import HomepageTeamGallery from "./HomepageTeamGallery";
import { Gallery } from "react-grid-gallery";
import Footer from "components/Footer";
import CoreValues from "./CoreValues";
import OurStory from "./OurStory";
import "./index.css";
import VisionMission from "./VisionMission";
import ProjectShowcase from "./ProjectShowcase";
import OurServices from "./OurServices";

const images = [
  {
    src: "images/img_emaarlogo011.png",
    width: "100vw",
    height: "100vh",
    isSelected: true,
  },
  {
    src: "images/img_emaarlogo011.png",
    width: "100vw",
    height: "100vh",
  },
  {
    src: "images/img_emaarlogo011.png",
    width: "100vw",
    height: "100vh",
  },
];

const HomepagePage = () => {
  const navigate = useNavigate();
  const teamMembersData = [
    { username: "Eng Ma Kresta Reyes", jobtitle: "Business Dev Manager" },
    { username: "Eng MohamedAbdullahi Haile", jobtitle: "Project Manager" },
    { username: "Fuad Hussien", jobtitle: "Architect" },
    { username: "Natnael", jobtitle: "Architect" },
    { username: "Awoke", jobtitle: "Architect" },
    { username: "Birhanab", jobtitle: "Architect" },
    { username: "Abdullahi", jobtitle: "Site Surveying" },
    { username: "Yasir", jobtitle: "Site Surveying" },
    { username: "Fahad Waseem", jobtitle: "MEP" },
    { username: "Faisal Ameer", jobtitle: "Technician" },
    { username: "Ismail Abdirahin", jobtitle: "Marketing Officer" },
    { username: "Guuled Mohamed Yaxye", jobtitle: "PRO" },
    { username: "Siraaji Mukhtar Abubakar", jobtitle: "CRO" },
    { username: "Shehaab Ali Ahmed", jobtitle: "Team Leader" },
    { username: "Abdulaziz Abdiqadir", jobtitle: "Worker" },
    { username: "Omar Ali", jobtitle: "Worker" },
    { username: "Anwar Saeed", jobtitle: "Worker" },
    { username: "Mohamed Salah Ahmed", jobtitle: "Worker" },
    { username: "Maged Ali", jobtitle: "Worker" },
    { username: "Dheyab Abdulbaset", jobtitle: "Worker" },
    { username: "Abdulkadir Mohamed", jobtitle: "Worker" },
    { username: "Attiq-ur-Rehman", jobtitle: "Worker" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <HomepageStack12photothree className="bg-gray-900 relative w-full h-screen" />

        <OurStory />

        <VisionMission />

        <OurServices />

        <ProjectShowcase />

        <CoreValues />

        {/* <div className="bg-gray-100 flex flex-col items-start justify-start max-w-[1920px] md:px-10 sm:px-5 items-center py-[100px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start overflow-auto w-auto">
            <div className="flex flex-row md:gap-10 gap-[1120px] items-start justify-between w-auto md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 w-auto"
                size="txtGaramond48Gray900"
              >
                Our Team
              </Text>
              <Button
                className="cursor-pointer font-poppins leading-[normal] min-w-[127px] text-center text-lg tracking-[0.18px] uppercase"
                shape="square"
                color="lime_900"
                size="sm"
                variant="outline"
              >
                see all
              </Button>
            </div>

             <HomepageTeamGallery teamData={teamMembersData} /> 

            <Img
              className="h-3 w-[1440px]"
              src="images/img_slider.svg"
              alt="slider"
            />
          </div>
        </div> 
        */}
        {/* <div className="h-[550px] mt-9 relative w-full ">
            <div
              className="bg-cover bg-no-repeat flex flex-col gap-6 w-[80%] items-center justify-center max-w-[1440px] h-[500px] mx-auto md:px-10 sm:px-5 z-[1] brightness-50"
              style={{
                backgroundImage: "url('images/img_section_523x1440.png')",
              }}
            ></div>
            <div className="absolute top-[140px] gap-4 left-[22%] items-center text-center m-auto flex flex-col justify-between">
              <Text
                className="leading-[120.00%] max-w-[855px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 brightness-100"
                size="txtGaramond48"
              >
                Explore the limitless possibilities with EMAAR Construction and
                Real Estate!
              </Text>
              <Line className="bg-white-A700 h-px w-[8%]" />
              <Text
                className="text-center text-white-A700 text-xl w-auto"
                size="txtPoppinsRegular20WhiteA700"
              >
                Join us in building excellence together! Your dream project
                starts here!
              </Text>
              <Button
                className=" cursor-pointer font-poppins leading-[normal] min-w-[180px] text-center text-lg tracking-[0.18px] uppercase"
                shape="square"
                color="lime_900"
                size="sm"
                variant="fill"
                onClick={() => navigate("/contacts")}
                
              >
                Contact Us
              </Button>
            </div>
            
          </div> */}
        <div className="h-[550px] mt-9 relative w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-6 w-full md:w-full items-center justify-center max-w-[1440px] h-[500px] mx-auto md:px-5 sm:px-3 z-[1] brightness-50"
            style={{
              backgroundImage: "url('images/img_section_523x1440.png')",
            }}
          ></div>
          <div className="absolute items-center md:top-[70px] md:p-[30px] lg:top-[110px] gap-4 text-center m-auto w-full flex flex-col justify-between md:h-[70%]">
            <Text
              className="leading-[120.00%] max-w-[855px] md:max-w-full text-5xl sm:text-[26px] md:text-[40px] text-center text-white-A700 brightness-100"
              size="txtGaramond48"
            >
              Explore the limitless possibilities with EMAAR Construction and
              Real Estate!
            </Text>
            <Line className="bg-white-A700 h-px w-[8%] mx-auto md:mx-0" />
            <Text
              className="text-center text-white-A700 text-xl sm:text-[18px] w-auto"
              size="txtPoppinsRegular20WhiteA700"
            >
              Join us in building excellence together! Your dream project starts
              here!
            </Text>
            <Button
              className="cursor-pointer font-poppins leading-[normal] min-w-[180px] text-center text-lg tracking-[0.18px] uppercase"
              shape="square"
              color="lime_900"
              size="sm"
              variant="fill"
              onClick={() => navigate("/contacts")}
            >
              Contact Us
            </Button>
          </div>
        </div>

        <Footer className="bg-white-A700 flex font-poppins gap-2 items-center justify-center md:px-5 px-60 py-[69px] w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
