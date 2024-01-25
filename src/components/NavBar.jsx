import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import { HiMenu } from "react-icons/hi";
import Search from "./Search";
import { styles } from "../constants";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <header className="fixed bg-[#fff] w-full grid content-center p-4 shadow-sm">
      <nav className="flex flex-row md:flex-col gap-4 lg:hidden">
        <div className="flex justify-between items-center w-full ">
          <Logo />
          <BsCart
            className={`${styles.textColors.primary} text-2xl font-bold hidden md:flex mr-3 cursor-pointer`}
          />
          <HiMenu
            onClick={handleToggle}
            className="z-50 sm:hidden text-xl cursor-pointer"
          />
        </div>
        <Search />
      </nav>
      <nav className="hidden lg:flex">
        <div className="flex justify-between items-center w-full ">
          <Logo />
          <span className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Search products or categories..."
              className="bg-zinc-100 w-[450px] p-4 placeholder:text-xl rounded-lg placeholder:font-extralight"
            />
          </span>
          <Link
            className={`${styles.bgColors.primary} text-teal-50 p-3 text-lg rounded-lg font-extralight`}
          >
            Signin / Signup
          </Link>
          <BsCart
            className={`${styles.textColors.primary} text-2xl font-bold hidden md:flex mr-3 cursor-pointer`}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
