import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { styles } from "../constants";
import Hero from "./Hero";

const Content = () => {
  return (
    <section
      className={`min-h-screen w-full ${styles.bgColors.light} flex flex-col`}
    >
      <NavBar />
      <main className="min-h-screen mt-28">
        <Hero />
      </main>
      <Footer />
    </section>
  );
};

export default Content;
