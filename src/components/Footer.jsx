import React from "react";
import FooterContact from "./FooterContact";
import { HiMail, HiPhone } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

import { styles } from "../constants/";
import { aboutGoshopper, extras } from "../constants/text";
import { Link } from "react-router-dom";
import { android, apple } from "../assets";

const Footer = () => {
  const about = aboutGoshopper.map((abt) => {
    return <Link key={abt.id}>{abt.title}</Link>;
  });
  const myExtras = extras.map((abt) => {
    return <Link key={abt.id}>{abt.title}</Link>;
  });
  return (
    <footer className="hidden md:flex md:flex-col w-full ">
      <div className="p-6">
        <p className="text-sm font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          temporibus commodi labore! Nam doloremque aliquid similique, quae
          sapiente explicabo deleniti, asperiores quia dicta, dolor modi quaerat
          nesciunt laboriosam placeat eum cumque unde. Odit perferendis neque
          pariatur reiciendis et, culpa voluptatem inventore obcaecati
          temporibus quas, ad labore tempore expedita, id eligendi at. Unde
          nemo, quo animi, officiis assumenda doloremque, est architecto fuga
          quam consequatur veritatis ullam facere reprehenderit eligendi libero
          esse sint quisquam eaque soluta. Pariatur, nihil? Tempore, optio
          debitis quis molestiae esse et ut hic architecto earum pariatur
          reprehenderit, fugit autem libero, neque voluptatem sed commodi quod
          aperiam? Ducimus, ea?
        </p>
      </div>
      <div className="bg-[#333] text-[#fff] px-10 py-4 flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex justify-between gap-6 lg:gap-16 ">
          <FooterContact
            title={"Email"}
            icon={<HiMail />}
            contact={"goshopper@support.com"}
          />
          <FooterContact
            title={"Phone"}
            icon={<HiPhone />}
            contact={"+2348125100249"}
          />
          <FooterContact
            title={"Whatsapp"}
            icon={<BsWhatsapp />}
            contact={"+2348125100249"}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 w-[70%]"
          />
          <button className={`${styles.bgColors.primary} p-3 w-[30%]`}>
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden bg-black text-white p-6  lg:grid lg:grid-cols-3">
        <article className="flex flex-col gap-4 px-4">
          <h3 className="uppercase">Quick Links</h3>
          <span className="flex flex-col gap-4 font-extralight">{about}</span>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="uppercase">Extra Links</h3>
          <span className="flex flex-col gap-4 font-extralight">
            {myExtras}
          </span>
        </article>
        <article className="flex flex-col gap-6">
          <h3 className="uppercase font-semibold">
            download and connect with us
          </h3>
          <div className="flex items-center gap-8">
            <span className="flex gap-2">
              <img src={apple} alt="apple-logo" className="w-[40px]" />
              <span className="font-extralight">
                <p>Download on</p>
                <h3>Apple Store</h3>
              </span>
            </span>
            <span className="flex gap-2">
              <img src={android} alt="android-logo" className="w-[40px]" />
              <span className="font-extralight">
                <p>Download on</p>
                <h3>Google Play</h3>
              </span>
            </span>
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
