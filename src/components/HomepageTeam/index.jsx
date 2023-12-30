import React from "react";

import { Text } from "components";

const HomepageTeam = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-100 h-[343px] w-full"></div>
        <div className="flex flex-col gap-3 items-center justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl w-full"
            size="txtGaramond24"
          >
            {props?.username}
          </Text>
          <Text
            className="text-base text-center text-lime-900 tracking-[0.96px] uppercase w-full"
            size="txtPoppinsMedium16"
          >
            {props?.jobtitle}
          </Text>
        </div>
      </div>
    </>
  );
};

HomepageTeam.defaultProps = {
  username: "Mr. Mohamed Abdi",
  jobtitle: "Finance / HR Manager",
};

export default HomepageTeam;
