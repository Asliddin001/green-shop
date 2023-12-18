import React from "react";
import searchIcon from "/mock-imges/icons/search-icon.svg";
import shopIcon from "/mock-imges/icons/shop-icon.svg";
import heartIcon from "/mock-imges/icons/heart.svg";
export const Card = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="card-container relative group">
          <div className="w-[260px] h-[300px] flex items-center justify-center bg-grey relative">
            <img src={item.image} alt="" className="card-image w-full h-full" />
            <div className="icon-container absolute bottom-0 w-full flex justify-center transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-600 ease-in-out">
              <span className="icon animate-bounce">
                <img src={shopIcon} alt="" className="w-6 h-6" />
              </span>
              <span className="icon animate-bounce">
                <img src={heartIcon} alt="" className="w-6 h-6" />
              </span>
              <span className="icon animate-bounce">
                <img src={searchIcon} alt="" className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-base font-normal">{item.name}</p>
            <span className="text-lg font-bold text-green">{item.price}</span>
          </div>
        </div>
      ))}
    </>
  );
};
