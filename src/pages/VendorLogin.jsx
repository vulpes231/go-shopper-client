import React from "react";

import { HiMail, HiLockOpen } from "react-icons/hi";
import Input from "../components/Input";

const VendorLogin = () => {
  return (
    <div className="p-6 min-h-screen">
      <h3>Vendor Area</h3>
      <form action="" className="flex flex-col gap-2">
        <Input placeHolder="Enter email" type="text" icon={<HiMail />} />

        <Input
          placeHolder="Enter password"
          type="password"
          icon={<HiLockOpen />}
        />
      </form>
    </div>
  );
};

export default VendorLogin;
