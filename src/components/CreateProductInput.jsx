import React from "react";

const CreateProductInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded-md text-[#333]"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default CreateProductInput;
