import React, { useState } from "react";
import { styles } from "../constants";

const StoreData = ({ title, info, amount, map, percent }) => {
  const statuses = ["increase", "decrease", "idle"];

  const [status, setStatus] = useState("idle");
  return (
    <div className="w-full flex flex-col justify-between border p-6 rounded-lg ">
      <span className="flex flex-col gap-1">
        <h3 className="text-xl">{title}</h3>
        <p className={`text-xs ${styles.textColors.dark} font-extralight`}>
          {info}
        </p>
        <h3 className={`text-3xl ${styles.textColors.secondary} font-semibold`}>
          <p>{amount}</p>
        </h3>
      </span>
      <span className="flex flex-row justify-between">
        <p className="flex gap-2">
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
          <span>{status}</span>
        </p>
        <span>{map}</span>
      </span>
    </div>
  );
};

export default StoreData;
