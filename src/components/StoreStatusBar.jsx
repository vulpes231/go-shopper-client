import React, { useState } from "react";
import { logo } from "../assets";
import { HiUserCircle } from "react-icons/hi";
import Tab from "./Tab";
import { styles } from "../constants";

const StoreStatusBar = ({ active, setTabActive }) => {
  return (
    <div>
      <nav className="flex justify-between items-center p-6">
        <figure className="flex items-center gap-1">
          <img src={logo} alt="app-logo" className="w-[30px]" />
          <h1
            className={`hidden lg:flex text-xl font-bold ${styles.textColors.primary}`}
          >
            Go <span className={`${styles.textColors.dark}`}>Shopper</span>
          </h1>
        </figure>
        <ul className="hidden md:flex gap-8">
          <Tab
            customCLass={
              active === 1
                ? `${styles.textColors.primary} text-xl border-b-2 ${styles.border.primary}`
                : "text-xl"
            }
            onClick={() => setTabActive(1)}
            title="Dashboard"
          />
          <Tab
            customCLass={
              active === 2
                ? `${styles.textColors.primary} text-xl border-b-2 ${styles.border.primary}`
                : "text-xl"
            }
            onClick={() => setTabActive(2)}
            title="Products"
          />
          <Tab
            customCLass={
              active === 3
                ? `${styles.textColors.primary} text-xl border-b-2 ${styles.border.primary}`
                : "text-xl"
            }
            onClick={() => setTabActive(3)}
            title="Orders"
          />
        </ul>
        <div className="flex gap-2 items-center">
          <HiUserCircle className="text-4xl" />
          <div className="flex flex-col leading-3">
            <span className="font-light text-md">Username</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StoreStatusBar;
