import React from "react";
import { logo } from "../assets/";
const NavBar = () => {
  return (
    <header className="h-[80px] fixed mb-[80px] bg-[#fff] w-full">
      <nav>
        <span>
          <img src={logo} alt="go-shopper-logo" className="w-[30px]" />
          <h1>
            Go <span className="text-[#1E91D9]">Shopper</span>
          </h1>
        </span>
      </nav>
    </header>
  );
};

export default NavBar;
