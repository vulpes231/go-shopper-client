import React, { useState } from "react";
import { CreateProductForm, NewestProducts } from "../../components";
import { styles } from "../../constants";

const VendorProduct = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <div className="flex flex-col gap-4 lg:max-w-[1100px] lg:mx-auto w-full">
      <div className="flex justify-between items-start md:items-center">
        <article className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold tracking-wide">Products</h3>
          <p className="font-extralight text-sm">
            Create and manage your products.
          </p>
        </article>
        <button
          onClick={handleToggle}
          className={`${styles.bgColors.primary} ${styles.textColors.light} md:px-4 md:py-3 rounded-xl md:font-semibold text-xs whitespace-nowrap px-2 py-2 cursor-pointer`}
        >
          Create product
        </button>
      </div>
      {/* product list */}
      <NewestProducts />

      {/* create product form */}
      <CreateProductForm toggle={toggle} handleToggle={handleToggle} />
    </div>
  );
};

export default VendorProduct;
