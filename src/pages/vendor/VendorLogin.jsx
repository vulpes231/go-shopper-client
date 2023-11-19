import React, { useState } from "react";

import { HiMail, HiLockOpen } from "react-icons/hi";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { styles } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { loginVendorApi } from "../../features/vendor/vendorLoginSlice";

const VendorLogin = () => {
  const dispatch = useDispatch();

  const { error, accessToken, isLoading } = useSelector(
    (state) => state.vendorlogin
  );

  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVendorLogin = (e) => {
    e.preventDefault();
    dispatch(loginVendorApi(formData));
  };

  return (
    <div className="p-6 min-h-screen flex justify-center items-center ">
      <article>
        <h3 className={`text-xl font-bold ${styles.textColors.primary} mb-5`}>
          Vendor Login
        </h3>
        <form action="" className="flex flex-col gap-2 lg:w-[500px] lg:mx-auto">
          <Input
            placeHolder="Enter email"
            type="text"
            icon={<HiMail />}
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />

          <Input
            placeHolder="Enter password"
            type="password"
            icon={<HiLockOpen />}
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            autoComplete="off"
          />
          <div
            className={`flex justify-between items-center text-sm font-extralight ${styles.textColors.primary}`}
          >
            <Link>Forgot email?</Link>
            <Link>Forgot password?</Link>
          </div>
          {/* error div */}
          <div
            className={
              !error
                ? "hidden"
                : "flex text-red-500 text-sm font-light bg-red-500 bg-opacity-10 rounded-md p-2"
            }
          >
            {error && <p>{error}</p>}
          </div>
          <button
            onClick={handleVendorLogin}
            className={`w-full ${styles.bgColors.primary} p-2 font-medium text-[#fff] rounded-md mt-5`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p className="text-sm font-extralight flex gap-1">
            Don't have a vendor account?
            <Link to="/signup" className={` ${styles.textColors.primary}`}>
              Create new account
            </Link>
          </p>
        </form>
      </article>
    </div>
  );
};

export default VendorLogin;
