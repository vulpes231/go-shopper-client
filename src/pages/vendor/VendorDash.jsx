import React, { useEffect, useState } from "react";
import { StoreInfo, StoreStatusBar } from "../../components";
import VendorProduct from "./VendorProduct";
import VendorOrder from "./VendorOrder";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const VendorDash = () => {
  const [active, setActive] = useState(1);

  const { accessToken } = useSelector((state) => state.vendorlogin);

  let token;

  if (accessToken && accessToken !== null) {
    sessionStorage.setItem("token", accessToken);
    token = sessionStorage.getItem("token", accessToken);
    console.log(token);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || token === null) {
      navigate("/vendor");
    }
  }, [token]);

  const setTabActive = (tabNo) => {
    setActive(tabNo);
  };

  return (
    <div className="w-full flex flex-col ">
      <StoreStatusBar active={active} setTabActive={setTabActive} />
      <div className="p-6 flex flex-col gap-6 mt-24">
        {active === 1 && <StoreInfo />}
        {active === 2 && <VendorProduct />}
        {active === 3 && <VendorOrder />}
      </div>
    </div>
  );
};

export default VendorDash;
