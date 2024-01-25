import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <span className="relative hidden md:flex">
      <input
        type="text"
        className={`bg-zinc-100 p-4 lg:py-6 lg:px-8 w-full rounded-lg  text-lg placeholder:text-2xl font-extralight`}
        placeholder="Search for products or categories"
      />
      <BsSearch className="absolute right-4 top-5 text-slate-400 text-xl lg:top-6 lg:right-6 " />
    </span>
  );
};

export default Search;
