import React from "react";

const CreateProductInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded-md"
      value={value}
      onChange={onChange}
    />
  );
};

export default CreateProductInput;
