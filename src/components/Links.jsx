import React from "react";
import { navLinks } from "../constants/text";
import { Link } from "react-router-dom";
const Links = () => {
  const links = navLinks.map((link) => {
    return (
      <li key={link.id} className="capitalize">
        <Link>{link.title}</Link>
      </li>
    );
  });
  return <ul className="hidden md:flex md:items-center gap-4">{links}</ul>;
};

export default Links;
