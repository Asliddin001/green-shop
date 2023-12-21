import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch } from "react-redux";
import currencyFormatter from "../../../constants/currensy";
import { flowerAction } from "../../../features/flowers-slice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Card = ({ items }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Flower added");

  const addOrder = (item) => {
    notify();
    dispatch(flowerAction.addFlower(item));
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="card-container relative group">
          <div className="h-[300px] flex  items-center justify-center object-cover bg-grey relative">
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <img
              src={item.imgUrl}
              alt=""
              className="card-image w-full h-full object-contain"
            />
            <div
              onClick={() => addOrder(item)}
              className="icon-container absolute bottom-0 w-full flex justify-center transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-600 ease-in-out">
              <div className="icon w-[40px] h-[40px] animate-bounce bg-white text-black rounded-md p-[8px] hover:text-green transition-colors duration-300">
                <LocalGroceryStoreOutlinedIcon />
              </div>
              <div className="icon w-[40px] h-[40px] animate-bounce bg-white text-black rounded-md p-[8px] hover:text-red-500 transition-colors duration-300">
                <FavoriteBorderOutlinedIcon />
              </div>
              <span className="icon w-[40px] h-[40px] animate-bounce bg-white text-black rounded-md p-[8px] hover:text-green transition-colors duration-300">
                <SearchOutlinedIcon />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-base font-normal">{item.name}</p>
            <div className="flex justify-between">
              <span className="text-lg font-bold text-green">
                {
                  currencyFormatter(item.price, item.currency, item.discount)
                    .moneyDiscount
                }
              </span>
              <span className="text-lg font-bold text-grey-2 line-through">
                {item.discount > 0 &&
                  currencyFormatter(item.price, item.currency, item.discount)
                    .moneyWithoutDiscount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
