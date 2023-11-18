import React from "react";
import StoreData from "./StoreData";
import NewestProducts from "./NewestProducts";

const StoreInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold tracking-wide">Overview</h3>
        <p className="font-extralight text-sm md:text-lg">
          Get up to minute reports about your store performance
        </p>
      </div>
      <article className="flex flex-col gap-4 md:flex-row">
        <StoreData
          title="Total product viewed"
          info="Number of products clicked and viewed"
          amount="500"
          percent="2%"
        />
        <StoreData
          title="Total sales"
          info="Amount of product sold"
          amount="$ 1000.00"
          percent="4%"
        />
      </article>
      <article>
        <NewestProducts />
      </article>
    </div>
  );
};

export default StoreInfo;
