import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { H1, P } from "../../../common/headings/headings";
import heroSlide from "../../../../../public/mock-imges/img/hero-slide-1.png";
import Button from "../../../common/button/button";

export const Header = () => {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => swiper}
        onSlideChange={() => "Slide change"}>
        <SwiperSlide>
          <header className="w-full h-[450px] relative flex justify-between p-[40px] bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 ">
            <div className="w-[540px] z-10 dfcol gap-[55px] items-start">
              <div className="dfcol gap-[6px]">
                <P>Welcome to GreenShop</P>
                <H1>
                  Let’s Make a Better{" "}
                  <span className="text-green font-cera-pro font-extrabold text-[70px] leading-70 uppercase">
                    Planet
                  </span>
                </H1>
                <P color="text-grey-1">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create a unique Urban Jungle.
                  Order your favorite plants!
                </P>
              </div>
              <Button type="btn2">SHOP NOW</Button>
            </div>
            <div className="w-[380px]">
              <img src={heroSlide} alt="" className="w-full" />
            </div>
          </header>
        </SwiperSlide>
        <SwiperSlide>
          <header className="w-full h-[450px] relative flex justify-between p-[40px] bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 ">
            <div className="w-[540px] z-10 dfcol gap-[55px] items-start">
              <div className="dfcol gap-[6px]">
                <P>Welcome to GreenShop</P>
                <H1>
                  Let’s Make a Better{" "}
                  <span className="text-green font-cera-pro font-extrabold text-[70px] leading-70 uppercase">
                    Planet
                  </span>
                </H1>
                <P color="text-grey-1">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create a unique Urban Jungle.
                  Order your favorite plants!
                </P>
              </div>
              <Button type="btn2">SHOP NOW</Button>
            </div>
            <div className="w-[380px]">
              <img src={heroSlide} alt="" className="w-full" />
            </div>
          </header>
        </SwiperSlide>
        <SwiperSlide>
          <header className="w-full h-[450px] relative flex justify-between p-[40px] bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 ">
            <div className="w-[540px] z-10 dfcol gap-[55px] items-start">
              <div className="dfcol gap-[6px]">
                <P>Welcome to GreenShop</P>
                <H1>
                  Let’s Make a Better{" "}
                  <span className="text-green font-cera-pro font-extrabold text-[70px] leading-70 uppercase">
                    Planet
                  </span>
                </H1>
                <P color="text-grey-1">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create a unique Urban Jungle.
                  Order your favorite plants!
                </P>
              </div>
              <Button type="btn2">SHOP NOW</Button>
            </div>
            <div className="w-[380px]">
              <img src={heroSlide} alt="" className="w-full" />
            </div>
          </header>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};