import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", circle: "rounded-[50%]" };
const variants = {
  outline: { lime_900: "border-2 border-lime-900 border-solid text-lime-900" },
  fill: { lime_900: "bg-lime-900 text-white-A700", gray_900: "bg-gray-900" },
};
const sizes = { xs: "p-2.5", sm: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["lime_900", "gray_900"]),
};

export { Button };
