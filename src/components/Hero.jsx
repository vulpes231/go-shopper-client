import React from "react";
import { styles } from "../constants";
import { Link } from "react-router-dom";
import { shop } from "../assets";

const Hero = () => {
  return (
    <section className="min-h-screen p-6 bg-zinc-50 lg:flex lg:items-center lg:justify-center md:mt-20 lg:mt-0">
      <article className="flex flex-col-reverse md:flex-row md:items-center gap-8 lg:max-w-[1100px] lg:mx-auto">
        <div className="w-full flex flex-col gap-6">
          <h3
            className={`${styles.textColors.primary} font-semibold text-3xl capitalize leading-8 lg:text-4xl`}
          >
            GoShopper:
            <span className={`${styles.textColors.dark}`}>
              Connecting buyers and sellers seamlessly.
            </span>
          </h3>
          <p className="leading-6 font-extralight md:text-xl lg:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            qui, ex impedit a velit optio quos dolores eius corrupti quibusdam
            porro officiis laudantium incidunt nulla animi excepturi voluptatum
            molestiae fuga.
          </p>
          <div className="flex gap-4 ">
            <Link
              className={`${styles.bgColors.primary} px-8 py-2 font-medium ${styles.textColors.light} rounded-md md:w-[150px] text-center md:py-3 md:text-xl`}
              to={"/buyer"}
            >
              Buyer
            </Link>
            <Link
              className={`${styles.textColors.primary} px-8 py-2 font-medium border ${styles.border.primary} rounded-md md:w-[150px] text-center md:py-3 md:text-xl`}
              to={"/vendor"}
            >
              Seller
            </Link>
          </div>
        </div>
        <figure className="w-full lg:mt-5">
          <img src={shop} alt="hero-image" className="rounded-full" />
        </figure>
      </article>
    </section>
  );
};

export default Hero;
