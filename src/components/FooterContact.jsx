import React from "react";

const FooterContact = ({ icon, title, contact }) => {
  return (
    <div className="flex items-center gap-2">
      <span>{icon}</span>
      <span className="flex flex-col justify-center items-start font-extralight text-sm">
        <p className="ml-2 ">{title}</p>
        <p>{contact}</p>
      </span>
    </div>
  );
};

export default FooterContact;
