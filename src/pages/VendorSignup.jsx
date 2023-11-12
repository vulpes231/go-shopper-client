import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "../features/vendor/createStoreSlice";

const initState = {
  store_name: "",
  owner_name: "",
  address: "",
  email: "",
  phone: "",
  category: "",
  password: "",
  logo: null, // new field for the logo file
};

const VendorSignup = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initState);

  const isLoading = useSelector((state) => state.createstore.isLoading);

  // handle input change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? files[0] : value,
    });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send files
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    // Dispatch the action with the formData
    dispatch(createStore(formData));
  };

  // get and populate categories
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
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
          <h3 className="font-normal">Contact Information</h3>
          <Input type="text" placeHolder="Phone" icon={<HiOutlinePhone />} />
          <Input type="text" placeHolder="Email" icon={<HiOutlineMail />} />
        </div>
        <button
          className={`w-full ${styles.bgColors.primary} p-2 font-medium text-[#fff] rounded-md mt-5`}
          onClick={handleSubmit}
          disabled={isLoading} // Disable the button if isLoading is true
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>
        <p className="flex gap-2">
          Already have a vendor account?
          <Link className={` ${styles.textColors.primary}`} to="/vendor">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default VendorSignup;
