import React from "react";
import { StoreInfo, StoreStatusBar } from "../../components";

const VendorDash = () => {
  return (
    <div className="w-full flex flex-col">
      <StoreStatusBar />
      <div className="p-6 flex flex-col gap-6 ">
        <div>
          <h3>Overview</h3>
          <p>Get up to minute reports about your store performance</p>
        </div>
        <StoreInfo />
      </div>
    </div>
  );
};

export default VendorDash;
