import React from "react";
import { Card } from "../../../common/card/card";
import { flowers } from "../../../../data/data";

export const Products = () => {
  return (
    <>
      <div className="">
        <span className="hover:text-green hover:underline hover:font-bold underline-offset-[12px] transition-all duration-500 ease-in-out">
          Releted Products
        </span>
        <hr className="bg-green mt-[6px]" />
        <div className="grid grid-cols-5 grid-rows-1">
          <Card items={flowers} />
        </div>
      </div>
    </>
  );
};
