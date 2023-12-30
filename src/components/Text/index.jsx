import React from "react";

const sizeClasses = {
  txtPoppinsBold18: "font-bold font-poppins",
  txtGaramond80WhiteA700: "font-garamond font-normal",
  txtGaramond32Gray900: "font-garamond font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtGaramond48Gray900: "font-garamond font-normal",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtGaramond80: "font-garamond font-normal",
  txtPoppinsRegular18Lime900: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtGaramond48: "font-garamond font-normal",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsMedium20WhiteA700: "font-medium font-poppins",
  txtGaramond32: "font-garamond font-normal",
  txtPoppinsBold120: "font-bold font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtGaramond24: "font-garamond font-normal",
  txtPoppinsRegular18Gray900: "font-normal font-poppins",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
