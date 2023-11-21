import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { styles } from "../constants";
import CreateProductInput from "./CreateProductInput";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../features/vendor/createProductSlice";

const initialState = {
  product_name: "",
  product_desc: "",
  price: "",
  product_image: "",
};

const CreateProductForm = ({ toggle, handleToggle }) => {
  const dispatch = useDispatch();
  const navigate = useDispatch();

  const { isCreated, isLoading, data, isError } = useSelector(
    (state) => state.createproduct
  );

  const [formData, setFormData] = useState(initialState);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setForm((prev) => ({
      ...prev,
      product_image: file,
    }));
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, form[key]);
    }
    dispatch(createProduct(formData));
  }

  return (
    <div
      className={
        !toggle
          ? "hidden"
          : "fixed top-0 left-0 w-full h-full bg-white p-4 md:p-6 opacity-90 flex items-center justify-center"
      }
    >
      <div
        className={`${styles.bgColors.primary} bg-opacity-80 ${styles.textColors.light} w-full p-4 md:p-6 rounded-xl lg:w-[500px] lg:mx-auto`}
      >
        <span
          onClick={handleToggle}
          className="flex gap-1 justify-end items-center"
        >
          Close form <FaBackward />
        </span>
        <form
          action=""
          className="flex flex-col gap-2"
          onSubmit={handleFormSubmit}
        >
          <label htmlFor="product_name">
            Name
            <CreateProductInput
              type="text"
              placeholder="Enter product name"
              name="product_name"
              value={formData.product_name}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="product_desc">
            Description
            <textarea
              className="w-full p-2 rounded-md text-[#333]"
              placeholder="Enter product description"
              value={formData.product_desc}
              onChange={handleInputChange}
              name="product_desc"
            ></textarea>
          </label>
          <label htmlFor="price">
            Price
            <CreateProductInput
              type="text"
              placeholder="Enter price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="product_image">
            Select Image
            <CreateProductInput
              type="file"
              name="product_image"
              onChange={handleFileChange}
            />
          </label>
          <button
            type="submit"
            className={`p-2 border rounded-md ${styles.border.light}`}
          >
            Create product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;
