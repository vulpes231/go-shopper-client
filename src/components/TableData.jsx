import React from "react";
import { styles } from "../constants";

const TableData = ({ title, desc, price, date }) => {
  return (
    <div
      className={`grid grid-cols-3 pl-2 text-xs md:text-lg font-light border-b ${styles.border.secondary} border-opacity-10`}
    >
      <span className="flex flex-col gap-1 p-1">
        <p>{title}</p>
        <p className="font-extralight">{desc}</p>
      </span>
      <span className="p-1">{price}</span>
      <span className="p-1">{date}</span>
    </div>
  );
};

export default TableData;
