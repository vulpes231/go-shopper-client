import React from "react";
import { styles } from "../constants";

const TableData = ({ title, desc, price, date }) => {
  return (
    <div
      className={`grid grid-cols-3 pl-2 text-xs md:text-lg font-extralight border-b ${styles.border.secondary} border-opacity-10 pb-2`}
    >
      <span className="flex flex-col gap-1 ">
        <p className="text-sm">{title}</p>
        <p
          className={`font-extralight text-xs leading-2 ${styles.textColors.primary}`}
        >
          {desc}
        </p>
      </span>
      <span className="p-1">{price}</span>
      <span className="p-1">{date}</span>
    </div>
  );
};

export default TableData;
