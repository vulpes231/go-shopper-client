import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { styles } from "../constants";

const Content = () => {
  return (
    <section
      className={`min-h-screen w-full ${styles.bgColors.light} flex flex-col`}
    >
      <NavBar />
      <main className="min-h-screen mt-24">
        <h1>Welcome to go shopper</h1>
      </main>
      <Footer />
    </section>
  );
};

export default Content;
