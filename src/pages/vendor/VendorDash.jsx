import React, { useState } from "react";
import { StoreInfo, StoreStatusBar } from "../../components";
import VendorProduct from "./VendorProduct";
import VendorOrder from "./VendorOrder";

const VendorDash = () => {
  const [active, setActive] = useState(1);

  const setTabActive = (tabNo) => {
    setActive(tabNo);
  };

  return (
    <div className="w-full flex flex-col">
      <StoreStatusBar active={active} setTabActive={setTabActive} />
      <div className="p-6 flex flex-col gap-6 mt-5 md:mt-0">
        {active === 1 && <StoreInfo />}
        {active === 2 && <VendorProduct />}
        {active === 3 && <VendorOrder />}
      </div>
    </div>
  );
};

export default VendorDash;
