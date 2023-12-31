import React from "react";

const Tab = ({ customCLass, onClick, title, icon }) => {
  return (
    <li className={customCLass} onClick={onClick}>
      {icon}
      {title}
    </li>
  );
};

export default Tab;
