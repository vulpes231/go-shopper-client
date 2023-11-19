import React from "react";
import { styles } from "../constants";

const Input = ({
  type,
  placeHolder,
  onChange,
  value,
  icon,
  name,
  autoComplete,
}) => {
  return (
    <div className="flex justify-between ">
      <span className="w-full">
        <input
          className={`w-full border ${styles.border.primary} p-2 outline-none`}
          placeholder={placeHolder}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          autoComplete={autoComplete}
        />
      </span>
      <span
        className={`w-[15%] flex justify-center items-center ${styles.bgColors.primary} ${styles.textColors.light} `}
      >
        {icon}
      </span>
    </div>
  );
};

export default Input;
