import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUserAdd,
  HiThumbUp,
} from "react-icons/hi";
import { BsShopWindow } from "react-icons/bs";
import { categories } from "../constants/text";
import { styles } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "../features/vendor/createStoreSlice";
import { Modal } from "../components";

const initState = {
  name: "",
  owner: "",
  address: "",
  email: "",
  phone: "",
  category: "",
  password: "",
  logo: "", // new field for the logo file
};

const VendorSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(initState);
  const [showModal, setShowModal] = useState(true);

  const isLoading = useSelector((state) => state.createstore.isLoading);
  const isError = useSelector((state) => state.createstore.isError);
  const isCreated = useSelector((state) => state.createstore.isCreated);

  // handle input change
  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === "file" ? e.target.files[0] : e.target.value;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send files
    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }
    // Dispatch the action with the formData
    dispatch(createStore(form));
  };

  useEffect(() => {
    if (isCreated) {
      // If store creation is successful, show the modal
      setShowModal(true);

      // Set a timer to hide the modal after 3 seconds and redirect to the login page
      const timer = setTimeout(() => {
        setShowModal(false);
        navigate("/vendor");
      }, 3000);

      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [isCreated]);

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
            value={form.owner}
            onChange={handleChange}
            name="owner"
          />

          <Input
            type="text"
            icon={<HiOutlineUserAdd />}
            placeHolder="Store Address (optional)"
            value={form.address}
            onChange={handleChange}
            name="address"
          />
          <Input
            type="text"
            placeHolder="Phone"
            icon={<HiOutlinePhone />}
            value={form.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-normal">Store Information</h3>
          <Input
            type="text"
            icon={<BsShopWindow />}
            placeHolder="Store Name"
            value={form.name}
            onChange={handleChange}
            name="name"
          />
          {/* categories */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-[#333] p-2 outline-none"
          >
            <option value="">Store category</option>
            {myCategories}
          </select>

          {/* multi */}
          <div>
            <label htmlFor="">Upload Logo</label>
            <input
              className="w-full border border-[#333] p-2"
              type="file"
              name="logo"
              value={form.logo}
              onChange={handleChange}
              placeholder="Select store logo"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-normal">Login Information</h3>
          <Input
            type="text"
            placeHolder="Email"
            icon={<HiOutlineMail />}
            value={form.email}
            onChange={handleChange}
            name="email"
          />
          <Input
            type="password"
            placeHolder="Password"
            icon={<HiOutlinePhone />}
            value={form.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className={!isError ? "hidden" : "flex text-red-500"}>
          {isError && <p>{isError}</p>}
        </div>
        <button
          className={`w-full ${styles.bgColors.primary} p-2 font-medium text-[#fff] rounded-md mt-5`}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>
        {showModal && (
          <Modal message="Store created successfully!" icon={<HiThumbUp />} />
        )}
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
