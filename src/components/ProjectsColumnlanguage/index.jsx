import React from "react";

import { Img, Text } from "components";

const ProjectsColumnlanguage = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[432px] sm:h-auto object-cover w-full"
          alt="frame18557"
          src={props?.userimage}
        />
        <div className="flex flex-col items-start justify-start p-8 sm:px-5 w-full">
          <Text
            className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
            size="txtGaramond32Gray900"
          >
            {props?.projectname}
          </Text>
        </div>
      </div>
    </>
  );
};

ProjectsColumnlanguage.defaultProps = {
  userimage: "images/img_rectangle2.webp",
  projectname: "Project  Hareed Hotel",
};

export default ProjectsColumnlanguage;
