import React, { useState } from "react";
import { logo } from "../assets";
import {
  HiBeaker,
  HiChevronDown,
  HiCog,
  HiCollection,
  HiCube,
  HiHome,
  HiPresentationChartLine,
  HiUser,
  HiUserCircle,
} from "react-icons/hi";
import Tab from "./Tab";
import { styles } from "../constants";

const StoreStatusBar = ({ active, setTabActive }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 md:py-6 lg:max-w-[1100px] lg:mx-auto">
        <figure className="flex items-center gap-1">
          <img src={logo} alt="app-logo" className="w-[30px]" />
          <h1
            className={`flex text-lg font-semibold md:font-bold ${styles.textColors.primary}`}
          >
            Go <span className={`${styles.textColors.dark}`}>Shopper</span>
          </h1>
        </figure>
        <ul className="hidden md:flex gap-8">
          <Tab
            customCLass={
              active === 1
                ? `${styles.textColors.primary} cursor-pointer  border-b-2 ${styles.border.primary} flex gap-1 items-center`
                : " cursor-pointer flex gap-1 items-center font-extralight"
            }
            onClick={() => setTabActive(1)}
            title="Dashboard"
            icon={<HiHome />}
          />
          <Tab
            customCLass={
              active === 2
                ? `${styles.textColors.primary} cursor-pointer  border-b-2 ${styles.border.primary} flex gap-1 items-center`
                : " cursor-pointer flex gap-1 items-center font-extralight"
            }
            onClick={() => setTabActive(2)}
            title="Products"
            icon={<HiCollection />}
          />
          <Tab
            customCLass={
              active === 3
                ? `${styles.textColors.primary} cursor-pointer  border-b-2 ${styles.border.primary} flex gap-1 items-center`
                : " cursor-pointer flex gap-1 items-center font-extralight"
            }
            onClick={() => setTabActive(3)}
            title="Orders"
            icon={<HiCube />}
          />
        </ul>
        <div className="relative">
          <HiUserCircle className="text-3xl" onClick={handleToggle} />
          <div
            className={
              !toggle
                ? "hidden"
                : "absolute top-8 bg-[#333] text-[#fff] p-3 h-[130px] right-0 font-light text-md rounded-md w-[120px] flex flex-col gap-3"
            }
          >
            <span className="flex gap-1 items-center">
              <HiUser /> Profile
            </span>
            <span className="flex gap-1 items-center">
              <HiPresentationChartLine /> Settings
            </span>
            <span className="flex gap-1 items-center">
              <HiChevronDown /> Sign Out
            </span>
          </div>
        </div>
      </nav>
      {/* mobile */}
      <ul className="flex sm:hidden gap-8 justify-center">
        <Tab
          customCLass={
            active === 1
              ? `${styles.textColors.primary} cursor-pointer  border-b-2 ${styles.border.primary} flex gap-1 items-center`
              : " cursor-pointer flex gap-1 items-center font-extralight"
          }
          onClick={() => setTabActive(1)}
          title="Dashboard"
          icon={<HiHome />}
        />
        <Tab
          customCLass={
            active === 2
              ? `${styles.textColors.primary} cursor-pointer  border-b-2 ${styles.border.primary} flex gap-1 items-center`
              : " cursor-pointer flex gap-1 items-center font-extralight"
          }
          onClick={() => setTabActive(2)}
          title="Products"
          icon={<HiCollection />}
        />
        <Tab
          customCLass={
            active === 3
              ? `${styles.textColors.primary} cursor-pointer  border-b-2 ${styles.border.primary} flex gap-1 items-center`
              : " cursor-pointer flex gap-1 items-center font-extralight"
          }
          onClick={() => setTabActive(3)}
          title="Orders"
          icon={<HiCube />}
        />
      </ul>
    </div>
  );
};

export default StoreStatusBar;
