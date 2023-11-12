import React from "react";
import Input from "../components/Input";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUserAdd,
} from "react-icons/hi";
import { BsShopWindow } from "react-icons/bs";
import { categories } from "../constants/text";
import { styles } from "../constants";
import { Link } from "react-router-dom";

// name, owner, address, email, phone, category, logo

const VendorSignup = () => {
  const myCategories = categories.map((opt, index) => {
    return (
      <option key={index} value={opt}>
        {opt}
      </option>
    );
  });

  return (
    <div className="p-6 min-h-screen flex flex-col gap-2">
      <h3 className={`text-xl font-bold ${styles.textColors.primary} mb-5`}>
        Create New Store
      </h3>
      <form action="" className="flex flex-col gap-4 font-extralight">
        <div>
          <h3 className="font-normal">Personal Information</h3>
          <Input
            type="text"
            icon={<HiOutlineUser />}
            placeHolder="Owner's Name"
          />
          <Input type="text" icon={<BsShopWindow />} placeHolder="Store Name" />
          <Input
            type="text"
            icon={<HiOutlineUserAdd />}
            placeHolder="Store Address (optional)"
          />
        </div>
        <div>
          <h3 className="font-normal">Store Information</h3>
          {/* categories */}
          <select
            name=""
            id=""
            className="w-full border border-[#333] p-2 outline-none"
          >
            <option value="">Select category</option>
            {myCategories}
          </select>

          {/* multi */}
          <div>
            <label htmlFor="">Upload Logo</label>
            <input
              className="w-full border border-[#333] p-2"
              type="file"
              name=""
              id=""
              placeholder="Select store logo"
            />
          </div>
        </div>
        <div>
          <h3 className="font-normal">Contact Information</h3>
          <Input type="text" placeHolder="Phone" icon={<HiOutlinePhone />} />
          <Input type="text" placeHolder="Email" icon={<HiOutlineMail />} />
        </div>
        <button
          className={`w-full ${styles.bgColors.primary} p-2 font-medium text-[#fff] rounded-md`}
        >
          Create Account
        </button>
        <p className="flex gap-2">
          Already have a vendor account?{" "}
          <Link
            className={`underline ${styles.textColors.primary}`}
            to="/vendor"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default VendorSignup;
