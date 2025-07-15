import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  size = "large",
  bgColor = "bg-linear-to-r from-[#98AA28] to-[#D6FF7E]",
  textColor = "text-white",
  variation = "normal",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-semibold  transition-all cursor-pointer duration-200 inline-flex items-center justify-center";

  const sizeStyles = {
    large: "px-6 py-3 text-base",
    small: "size-[68px] flex items-center justify-center rounded-full",
  };

  const variationStyles = {
    normal: `${bgColor} ${textColor} hover:opacity-90 rounded-full w-[8rem]`,
    outline: `border-2 border-[#EDFF8166] bg-transparent  ${textColor} rounded-full  `,
    link: `bg-transparent underline bg-0 text-[#A3B938] flex items-center gap-3  `,
  };

  return (
    <button
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variationStyles[variation],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
