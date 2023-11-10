import React from "react";
import { BsCart } from "react-icons/bs";
const Cart = () => {
  return (
    <span className="relative py-8 pr-7">
      <BsCart className="text-xl" />
      <p className="absolute md:top-1 md:right-8  bg-red-500 p-0.5 rounded-full text-[#fff] font-bold">
        0
      </p>
    </span>
  );
};

export default Cart;
