import React from "react";
import { Card } from "../../../common/card/card";
import { flowersShop } from "../../../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export const Products = () => {
  return (
    <div className="">
      <span className="hover:text-green hover:underline hover:font-bold underline-offset-[12px] transition-all duration-500 ease-in-out">
        Related Products
      </span>
      <hr className="bg-green mt-[6px]" />
      <Swiper spaceBetween={50} slidesPerView={5}>
        {flowersShop.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-5 grid-rows-1 gap-[30px]">
              <Card items={[data]} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
