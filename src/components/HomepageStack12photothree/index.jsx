import React, { useState, useEffect } from "react";
import { Button, Img, Line, Text } from "components";
import { useNavigate } from "react-router-dom";
import "./HomepageStack12photothree.css"; // Import your CSS file for component-specific styles
import {Link} from 'react-router-dom';
import NavBar from "components/NavBar";
const HomepageStack12photothree = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "images/Hero_img_1.webp",
    "images/Hero_img_2.webp",
    "images/Hero_img_3.webp",
    "images/Hero_img_4.webp",
    // Add more image URLs as needed
  ];


  const data = {
    headertext: "Inspiring Designs, Solid Constructions.",
    contactbutton: "contact us",
    hometext: "home",
    servicestext: "Services",
    projectstext: "PROJECTS",
    contacttext: "contact",
    languagetext1: "English",
    languagetext2: "somalian",
  }

  useEffect(() => {
    // Automatically slide to the next image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once when the component mounts

  const navigate = useNavigate();
  
  const handleClick = () => {
    // Navigate to /contacts
    navigate('/contacts');
  };

  return (
    <>
      <div className={props.className}>
        <div className="image-slider">
          {images.map((image, index) => (
            <Img
              key={index}
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
              className="absolute h-screen inset-[0] justify-center object-cover w-full"
              src={image}
              alt={`12photoThree ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute bottom-[32%] flex flex-col gap-8 inset-x-[0] items-center justify-start mx-auto w-auto">
          <Text
            className="md:text-5xl text-[80px] text-center text-white-A700 w-auto"
            size="txtGaramond80WhiteA700"
          >
            {props?.headertext}
          </Text>
          <Button
            className="cursor-pointer font-poppins leading-[normal] min-w-[180px] text-center text-lg tracking-[0.18px] uppercase"
            shape="square"
            color="lime_900"
            size="sm"
            variant="fill"
            onClick={handleClick}
          >
            {props?.contactbutton}
          </Button>
        </div>
        <NavBar props={props}/>
      </div>
    </>
  );
};

HomepageStack12photothree.defaultProps = {
  headertext: "Inspiring Designs, Solid Constructions.",
  contactbutton: "contact us",
  hometext: "home",
  servicestext: "Services",
  projectstext: "PROJECTS",
  contacttext: "contact",
  languagetext1: "English",
  languagetext2: "somalian",
};

export default HomepageStack12photothree;
