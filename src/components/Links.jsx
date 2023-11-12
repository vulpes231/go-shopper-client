import React from "react";
import { navLinks } from "../constants/text";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Links = ({ customClass, onClick }) => {
  const drop = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 0.5, 1],
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 3,
      },
    },
  };

  const links = navLinks.map((link) => {
    return (
      <li key={link.id} className="capitalize">
        <Link to={link.path} onClick={onClick}>
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <motion.ul
      variants={drop}
      initial="hidden"
      animate="visible"
      className={customClass}
    >
      {links}
    </motion.ul>
  );
};

export default Links;
