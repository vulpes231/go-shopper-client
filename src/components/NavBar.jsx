import React from "react";

import Logo from "./Logo";
import Links from "./Links";
import Cart from "./Cart";
const NavBar = () => {
  return (
    <header className="h-[80px] fixed mb-[80px] bg-[#fff] w-full grid content-center px-4">
      <nav className="flex justify-between items-center">
        <Logo />
        <Links />
        <Cart />
      </nav>
    </header>
  );
};

export default NavBar;
