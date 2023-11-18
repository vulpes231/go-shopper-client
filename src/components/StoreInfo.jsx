import React from "react";
import StoreData from "./StoreData";
import NewestProducts from "./NewestProducts";

const StoreInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>Overview</h3>
        <p>Get up to minute reports about your store performance</p>
      </div>
      <article className="flex flex-col gap-4">
        <StoreData
          title="Total product viewed"
          info="Number of products clicked and viewed"
          amount="500"
          // status="increase"
          percent="2%"
        />
        <StoreData
          title="Total sales"
          info="Amount of product sold"
          amount="$ 1000.00"
          percent="4%"
          // status="decrease"
        />
      </article>
      <article>
        <NewestProducts />
      </article>
    </div>
  );
};

export default StoreInfo;
