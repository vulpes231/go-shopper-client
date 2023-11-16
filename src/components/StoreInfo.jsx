import React from "react";
import StoreData from "./StoreData";

const StoreInfo = () => {
  return (
    <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default StoreInfo;
