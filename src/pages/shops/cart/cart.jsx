import React, { useState } from "react";
import shopImg1 from "/mock-imges/img/shop-card-1.png";
import shopImg2 from "/mock-imges/img/shop-card-2.png";
import shopImg3 from "/mock-imges/img/shop-card-3.png";
import shopImg4 from "/mock-imges/img/shop-card-4.png";
import search from "/mock-imges/icons/search-icon.svg";
import { CH, P, SmallP } from "../../../components/common/headings/headings";
import StarIcon from "@mui/icons-material/Star";
import Button from "../../../components/common/button/button";
import heart from "/mock-imges/icons/heart-green.svg";

const SizeOption = ({ size }) => {
  return (
    <button className="w-[40px] mt-[11px] mb-[23px] h-[40px] flex items-center justify-center focus:border-green  focus:text-green text-center border-[1px] px-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
      <P>{size}</P>
    </button>
  );
};
export const Cart = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [num, setNum] = useState(0);
  const inc = () => {
    setNum(num + 1);
  };
  const dec = () => {
    setNum(num - 1);
  };

  const imageList = [shopImg1, shopImg2, shopImg3, shopImg4];

  return (
    <>
      <div>
        <div>
          <p>
            <b>Home</b>/Shop
          </p>
        </div>
        <div className="flex gap-[52px] mt-[43px]">
          <div className="card h-[480px] ">
            <div className="flex gap-[29px]">
              <div className="imgs dcol gap-[16px]">
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="w-[100px] cursor-pointer mb-[16px]"
                    onClick={() => setSelectedImage(index)}>
                    <img
                      src={image}
                      alt=""
                      className="w-full rounded-md bg-grey"
                    />
                  </div>
                ))}
              </div>
              <div
                className={`relative w-[444px] bg-grey rounded-md ${
                  selectedImage !== null ? "expanded" : "collapsed"
                }`}>
                {selectedImage !== null ? (
                  <>
                    <img
                      src={imageList[selectedImage]}
                      alt="asdf"
                      className="absolute w-[444px]"
                    />
                    <span className="absolute right-[13px] top-[13px] rounded-full">
                      <img src={search} alt="" className="w-full" />
                    </span>
                  </>
                ) : (
                  <img
                    src={shopImg4}
                    alt="Default"
                    className="w-full h-full rounded-md"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="content">
            <div className="dfcol gap-[15px]">
              <CH>Barberton Daisy</CH>
              <div className="flex justify-between">
                <CH size="text-[22px]" color="text-green">
                  $119.00
                </CH>
                <div className="flex gap-[11px]">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= 4 ? "text-[#ffac0c]" : "text-[#c4c4c4]"
                        }>
                        <StarIcon />
                      </span>
                    ))}
                  </div>
                  <div>
                    <span>19 Customer Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-green-500 bg-opacity-50 mt-[12px] mb-[15px]" />
            <div className="dfcol gap-[10px] mb-[24px]">
              <P>Short Description:</P>
              <SmallP color="text-grey-1">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </SmallP>
            </div>
            <div className="size">
              <P>Size:</P>
              <div className="flex gap-2">
                <SizeOption size="S" />
                <SizeOption size="M" />
                <SizeOption size="L" />
                <SizeOption size="XL" />
              </div>
            </div>
            <div className="flex gap-[26px]">
              <div className="dfrowc gap-[23px] ">
                <Button type={"incDec"} clickHandler={dec}>
                  -
                </Button>
                <span className="text-[20px] font-bold">{num}</span>
                <Button type={"incDec"} clickHandler={inc}>
                  +
                </Button>
              </div>
              <div className="dfrowc gap-[10px]">
                <Button type="wb">BUY NOW</Button>
                <Button type="wob">Add to cart</Button>
                <div className="w-[40px] py-[10px] px-[10px] border-[1px] border-green bg-white text-green rounded-md dfrowc justify-center">
                  <img src={heart} alt="" className="fill-green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
