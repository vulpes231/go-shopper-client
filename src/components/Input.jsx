import React from "react";
import { styles } from "../constants";

const Input = ({ type, placeHolder, onChange, value, icon }) => {
  return (
    <div className="flex justify-between ">
      <span className="w-full">
        <input
          className={`w-full border border-[#333] p-2 outline-none`}
          placeholder={placeHolder}
          type={type}
          onChange={onChange}
          value={value}
        />
      </span>
      <span
        className={`w-[15%] flex justify-center items-center border border-[#333] ${styles.textColors.primary} `}
      >
        {icon}
      </span>
    </div>
  );
};

export default Input;
