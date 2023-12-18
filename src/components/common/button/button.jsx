import React from "react";

const Button = ({ children, iconRight, iconLeft, type }) => {

  const iconPositionClasses = iconRight
    ? "flex-row px-[17px] py-[7px]"
    : iconLeft
    ? "flex-row"
    : "";

  const buttonStyle = {
    btn1: "px-[17px] py-[7px]",
    btn2: "px-[26px] py-[10px] font-bold",
  };

  return (
    <>
      <button
        className={`bg-green text-white rounded-[6px] ${buttonStyle[type]} ${iconPositionClasses} flex items-center  space-x-2 gap-[4px]`}>
        {iconLeft && typeof iconLeft === "string" ? (
          <img src={iconLeft} alt="Icon" className="w-6 h-6" />
        ) : (
          <span className="material-icons">{iconLeft}</span>
        )}
        {children}
        {iconRight && <span className="material-icons">{iconRight}</span>}
      </button>
    </>
  );
};

export default Button;
