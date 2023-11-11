import React from "react";
import { BsCart } from "react-icons/bs";
import { styles } from "../constants";

const Search = () => {
  return (
    <span className="relative hidden md:flex gap-2 items-center">
      <input
        type="text"
        className={`border ${styles.border.primary} rounded-sm px-2`}
        placeholder="Search"
      />
      <BsCart
        className={`${styles.textColors.primary} text-xl font-semibold`}
      />
    </span>
  );
};

export default Search;
