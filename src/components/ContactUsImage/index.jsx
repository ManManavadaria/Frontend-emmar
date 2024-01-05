import React from "react";

import { Img, Text } from "components";

const ContactUsImage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute border border-lime-900 border-solid h-[375px] inset-[0] justify-center m-auto w-[95%] "></div>
        <div className="absolute flex flex-col gap-10 h-max inset-[0] items-center p-2.5 justify-start m-auto w-auto">
          <Img
            className="h-[60px] md:h-auto object-cover w-[60px]"
            alt="icon"
            src={props?.iconimage}
          />
          <div className="flex flex-col gap-6 items-center justify-center w-auto sm:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-full"
              size="txtGaramond32"
            >
              {props?.locationtext}
            </Text>
            <Text
              className="leading-[32.00px] max-w-[380px] md:max-w-full text-center text-white-A700 text-xl"
              size="txtPoppinsRegular20WhiteA700"
            >
              {props?.addresstext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ContactUsImage.defaultProps = {
  iconimage: "images/img_icon_6.webp",
  locationtext: "Our Location",
  addresstext:
    "1st Floor, Office 101, Sultan Business Park , Wabero Road, Mogadishu, Somalia",
};

export default ContactUsImage;
