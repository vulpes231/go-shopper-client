import React from "react";
import { logo } from "../assets/";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      {/* logo */}
      <Link to="/" className="flex items-center gap-2 ">
        <img src={logo} alt="go-shopper-logo" className="w-[30px]" />
        <h1 className="text-[#1E91D9] text-xl font-bold">
          Go<span className="text-[#333]">Shopper</span>
        </h1>
      </Link>
    </>
  );
};

export default Logo;
