import React from "react";
import { Text, Img } from "components";
import "./index.css";

const VisionMission = () => {
  return (
    <div className="flex md:flex-col flex-row  items-start justify-start w-auto md:w-full">
      <div className="bg-gray-900 h-[472px] md:h-[394px] pl-[239px] md:px-5 relative w-[50vw] md:w-full">
        <div className="object-contain absolute flex flex-col h-full inset-y-[0] items-end justify-end my-auto right-[0] w-full">
          <Img
            className="h-[100%] w-full opacity-20"
            src="images/img_12photo2.webp"
            alt="12photoTwo"
          />
        </div>
        <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-center mx-auto w-[70%] h-full sm:w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
            size="txtGaramond48"
          >
            Vision
          </Text>
          <Text
            className="leading-[32.00px] sm:leading-[24.00px] max-w-[500px] md:max-w-full text-white-A700 md:text-[18px] md:mx-4 text-center text-xl"
            size="txtPoppinsRegular20WhiteA700"
          >
            To be the leading brand in construction recognized for quality and
            innovation, supporting our staff and the communities in which we
            work, by being the contractor of choice in our market.
          </Text>
        </div>
      </div>
      <div className="bg-gray-900 h-[472px] md:h-[394px] pl-[239px] md:px-5 relative w-[50vw] md:w-full">
        <div className="object-contain absolute flex flex-col h-full inset-y-[0] items-end justify-end my-auto right-[0] w-full">
          <Img
            className="h-[100%] w-full opacity-20"
            src="images/img_21071502549.webp"
            alt="12photoTwo"
          />
        </div>
        <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-center mx-auto w-[70%] h-full sm:w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
            size="txtGaramond48"
          >
            Mission
          </Text>
          <Text
            className="leading-[32.00px] sm:leading-[24.00px] max-w-[500px] md:max-w-full text-white-A700 md:text-[18px] md:mx-4 text-center text-xl"
            size="txtPoppinsRegular20WhiteA700"
          >
            Our purpose is to build environments where our clients, employee
            owners, and communities prosper. Modern Vision Architecture will
            provide architectural services for multifamily and mixed-use
            projects, condominium developments, villa-style subdivisions,
            assisted living, and facilities care throughout the country.
          </Text>
        </div>
      </div>
      
    </div>
  );
};

export default VisionMission;
