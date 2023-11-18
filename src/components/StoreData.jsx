import React, { useState } from "react";
import { styles } from "../constants";

const StoreData = ({ title, info, amount, map, percent }) => {
  const statuses = ["increase", "decrease", "idle"];

  const [status, setStatus] = useState("idle");
  return (
    <div
      className={`w-full flex flex-col justify-between border-2 ${styles.border.secondary} border-opacity-10 shadow-sm p-6 rounded-xl gap-4`}
    >
      <span className="flex flex-col gap-4">
        <span>
          <h3 className="text-lg md:text-xl capitalize">{title}</h3>
          <p
            className={`text-xs md:text-sm md:tracking-wide ${styles.textColors.dark} font-extralight`}
          >
            {info}
          </p>
        </span>
        <h3
          className={`text-2xl md:text-3xl ${styles.textColors.primary} font-semibold`}
        >
          {amount}
        </h3>
      </span>
      <span className="flex flex-row justify-between">
        <p className="flex gap-2 font-light text-md">
          <span
            className={
              status.includes("increase")
                ? "text-green-500"
                : status.includes("decrease")
                ? "text-red-500"
                : "text-slate-700"
            }
          >
            {percent}
          </span>
          <span className="font-extralight">{status}</span>
        </p>
        <span>{map}</span>
      </span>
    </div>
  );
};

export default StoreData;
