import React from "react";

const CreateProductInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full"
      value={value}
      onChange={onChange}
    />
  );
};

export default CreateProductInput;
