import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <header className="h-[80px] fixed mb-[80px] bg-[#fff] w-full grid content-center px-4">
      <nav className="flex justify-between items-center">
        <Logo />
        {/* desktop links */}
        <Links customClass="hidden md:flex md:items-center gap-4" />

        {/* mobile links */}
        <Links
          customClass={
            !toggle
              ? "hidden"
              : "flex flex-col gap-4 w-full absolute items-center justify-center min-h-screen top-0 left-0"
          }
          onClick={closeMenu}
        />

        <HiMenu onClick={handleToggle} className="z-50" />
      </nav>
    </header>
  );
};

export default NavBar;
