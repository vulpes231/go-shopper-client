import React from "react";
import { Link } from "react-router-dom";
import TableData from "./TableData";
import { styles } from "../constants";
const NewestProducts = () => {
  return (
    <div className="flex flex-col gap-3 border rounded-lg p-6">
      <article className="flex items-center justify-between">
        <span>
          <h3>Newest Products </h3>
          <p className="text-xs font-extralight">
            Newest product list for the month
          </p>
        </span>
        <Link className="p-2 border rounded-lg">See more</Link>
      </article>
      <article className="flex flex-col gap-3">
        <div
          className={`grid grid-cols-3 ${styles.bgColors.light} capitalize px-3 rounded-md`}
        >
          <span>product</span>
          <span>price</span>
          <span>date</span>
        </div>
        <TableData title="iPhone" price="$25.23" date="Nov 23rd, 2023" />
      </article>
    </div>
  );
};

export default NewestProducts;
