import React from "react";
import { HiBackspace } from "react-icons/hi";
import { styles } from "../constants";
import CreateProductInput from "./CreateProductInput";

const CreateProductForm = ({ toggle, handleToggle }) => {
  return (
    <div
      className={
        !toggle
          ? "hidden"
          : "fixed top-0 left-0 w-full h-full bg-white p-6 opacity-90 flex items-center justify-center"
      }
    >
      <div
        className={`${styles.bgColors.primary} ${styles.textColors.light} w-full p-6 rounded-xl`}
      >
        <span onClick={handleToggle} className="flex items-center gap-1">
          Close form <HiBackspace />
        </span>
        <form action="" className="flex flex-col gap-2 ">
          <label htmlFor="product_name">
            Name
            <CreateProductInput type="text" placeholder="Enter product name" />
          </label>
          <label htmlFor="product_desc">
            Description
            <textarea
              className="w-full p-2 rounded-md"
              placeholder="Enter product description"
            ></textarea>
          </label>
          <label htmlFor="price">
            Price
            <CreateProductInput type="text" placeholder="Enter price" />
          </label>
          <label htmlFor="product_image">
            Select Image
            <CreateProductInput type="file" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;
