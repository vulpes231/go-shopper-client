import React from "react";

import { HiMail, HiLockOpen } from "react-icons/hi";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { styles } from "../constants";

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
        <div className="flex justify-between items-center text-sm font-extralight ">
          <Link>Forgot email?</Link>
          <Link>Forgot password?</Link>
        </div>
        <button className={`${styles.bgColors.light} p-2`}>Login</button>
        <p className="text-sm font-extralight flex gap-1">
          Don't have a vendor account?
          <Link to="/signup" className="underline">
            Create new account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default VendorLogin;
