import React from "react";
import { styles } from "../constants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-blue-200 p-6">
      <article className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="w-full flex flex-col gap-4">
          <h3
            className={`${styles.textColors.primary} font-bold text-xl text-left leading-5 `}
          >
            GoShopper: Empowering Commerce
            <span className={`${styles.textColors.dark}`}>
              Connecting buyers and sellers seamlessly
            </span>
          </h3>
          <p className="leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            qui, ex impedit a velit optio quos dolores eius corrupti quibusdam
            porro officiis laudantium incidunt nulla animi excepturi voluptatum
            molestiae fuga.
          </p>
          <div className="flex gap-4">
            <Link
              className={`${styles.bgColors.primary} px-8 py-2 font-medium ${styles.textColors.light}`}
            >
              Buyer
            </Link>
            <Link
              className={`${styles.textColors.primary} px-8 py-2 font-medium border ${styles.border.primary}`}
            >
              Seller
            </Link>
          </div>
        </div>
        <figure className="w-full">
          <img src="" alt="hero-image" />
        </figure>
      </article>
    </section>
  );
};

export default Hero;
