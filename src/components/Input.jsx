import React from "react";

const Input = ({ type, placeHolder, myClass, onChange, value, icon }) => {
  return (
    <div className="flex justify-between bg-red-500">
      <span className="w-full">
        <input
          className={`w-full border border-[#333] p-2`}
          placeholder={placeHolder}
          type={type}
          onChange={onChange}
          value={value}
        />
      </span>
      <span className="w-[15%] flex justify-center items-center">{icon}</span>
    </div>
  );
};

export default Input;
