import React from "react";

const H1 = ({ children }) => {
  return (
    <h1 className="text-black text-[70px] font-extrabold leading-[70px]">
      {children}
    </h1>
  );
};

const H2 = ({ children }) => {
  return (
    <h2 className="text-black text-[30px] font-bold leading-[16px]">
      {children}
    </h2>
  );
};
const H4 = ({ children }) => {
  return (
    <h2 className="text-black text-[20px] font-bold leading-[26px]">
      {children}
    </h2>
  );
};

const P = ({ children, color = "black" }) => {
  return (
    <>
      <p className={`text-[14px] ${color} Cera Pro leading-[16px] font-medium`}>
        {children}
      </p>
    </>
  );
};
const SmallP = ({ children, color = "text-green" }) => {
  return (
    <>
      <p className={`text-[14px] ${color} Cera Pro leading-[16px] font-medium`}>
        {children}
      </p>
    </>
  );
};

export { H1, H2, H4, P, SmallP };
