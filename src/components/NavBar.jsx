import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import { HiMenu } from "react-icons/hi";
import Search from "./Search";
import { styles } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <header className="h-[80px] md:h-[120px] fixed bg-[#fff] w-full grid content-center px-4">
      <nav className="flex flex-row md:flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <Logo />
          {/* search */}
          <Search />
          <HiMenu onClick={handleToggle} className="z-50 sm:hidden text-xl" />
        </div>
        <div>
          {/* desktop links */}
          <Links
            customClass={`hidden md:flex md:items-center gap-4 ${styles.textColors.primary}`}
          />

          {/* mobile links */}
          <Links
            customClass={
              !toggle
                ? "hidden"
                : `flex flex-col gap-4 w-full absolute items-center justify-center min-h-screen top-0 left-0 ${styles.textColors.primary}`
            }
            onClick={closeMenu}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
