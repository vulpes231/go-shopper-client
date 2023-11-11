import React from "react";
import { logo } from "../assets/";
const Logo = () => {
  return (
    <>
      {/* logo */}
      <span className="flex items-center gap-2">
        <img src={logo} alt="go-shopper-logo" className="w-[30px]" />
        <h1 className="text-[#1E91D9]">
          Go<span className="text-[#333]">Shopper</span>
        </h1>
      </span>
    </>
  );
};

export default Logo;
