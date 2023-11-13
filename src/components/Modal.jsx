import React from "react";

const Modal = ({ message, icon }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white opacity-90 flex items-center justify-center">
      <div className="w-full lg:w-[400px] h-[200px] mx-auto bg-[#176FA6] flex flex-col items-center justify-center text-white">
        <h3 className="text-xl font-light capitalize">{message}</h3>
        <span className="text-green-500 text-4xl">{icon}</span>
      </div>
    </div>
  );
};

export default Modal;
