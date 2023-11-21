import React from "react";
import { Link } from "react-router-dom";
import TableData from "./TableData";
import { styles } from "../constants";
const NewestProducts = () => {
  return (
    <div
      className={`${styles.border.secondary} border-opacity-10 flex flex-col gap-6 border-2 shadow-sm rounded-xl p-4 md:p-6`}
    >
      <article className="flex items-center justify-between">
        <span>
          <h3 className="text-lg md:text-xl">Newest Products </h3>
          <p className="text-xs md:text-sm font-extralight">
            Newest product list for the month
          </p>
        </span>
        <Link
          className={`p-2 border ${styles.bgColors.primary} ${styles.textColors.light} border-opacity-20 rounded-xl font-medium text-sm md:text-lg md:p-3`}
        >
          See more
        </Link>
      </article>
      <article className="flex flex-col gap-3">
        <div
          className={`grid grid-cols-3 ${styles.bgColors.secondary} bg-opacity-10 uppercase text-xs md:text-sm px-3 rounded-sm py-1`}
        >
          <span>product</span>
          <span>price</span>
          <span>date</span>
        </div>
        {/* show 5 even if returned data is more than 5 */}
        <TableData
          title="iPhone"
          desc="Refurbished iPhone 6"
          price="$25.23"
          date="Nov 23rd, 2023"
        />
      </article>
    </div>
  );
};

export default NewestProducts;
