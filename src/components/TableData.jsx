import React from "react";

const TableData = ({ title, desc, price, date }) => {
  return (
    <div className="grid grid-cols-3 pl-2">
      <span className="flex flex-col">
        <p>{title}</p>
        <p>{desc}</p>
      </span>
      <span>{price}</span>
      <span>{date}</span>
    </div>
  );
};

export default TableData;
