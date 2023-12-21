import React from "react";
import { Link } from "react-router-dom";
import logo from "/public/mock-imges/icons/logo.svg";
import SearchIcon from "/mock-imges/icons/search-icon.svg";
import ShopIcon from "/mock-imges/icons/shop-icon.svg";
import logOut from "/mock-imges/icons/exit-account.svg";
import Button from "../../common/button/button";
import Brightness6Icon from "@mui/icons-material/Brightness6";

const linkBaseStyle =
  "hover:underline hover:font-semibold hover:text-green-700 transition-all duration-300 text-black underline-offset-[25px] dark:text-white";

export const Navbar = ({toggleTheme}) => {

  const themeHandler = () =>{
    toggleTheme()
  }
  return (
    <div className="relative dark:text-white">
      <nav className="dfrowc justify-between py-[33px] transition-all .5s">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className={`${linkBaseStyle}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Shop" className={`${linkBaseStyle}`}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/Plant" className={`${linkBaseStyle}`}>
              Plant Care
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${linkBaseStyle}`}>
              Blogs
            </Link>
          </li>
        </ul>
        <div className="">
          <span onClick={themeHandler} className="cursor-pointer">
            <Brightness6Icon />
          </span>
        </div>
        <div className="logos dfrowc space-x-4 ">
          <div className="">
            <img src={SearchIcon} alt="Search" className="cursor-pointer" />
          </div>

          <div className="dfrowc relative">
            <img src={ShopIcon} alt="Shop" className="cursor-pointer" />
            <span className="absolute bg-green w-[12px] h-[12px] dfrowc justify-center mt-[-12px] ml-[15px] rounded-full text-white text-[10px] font-medium transition-all duration-300">
              6
            </span>
          </div>

          <Button type={"btn1"} iconLeft={logOut}>
            Button
          </Button>
        </div>
      </nav>
      <hr className="absolute  mt-[-20px] w-full" />
    </div>
  );
};
