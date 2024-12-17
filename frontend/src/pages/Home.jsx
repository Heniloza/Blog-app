import React from "react";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
    <Navbar />
      <div className="md:px-[70px]">
        <HomePage />
        <HomePage />
        <HomePage />
        <HomePage />
        <HomePage />
      </div>
    <Footer />
    </>
  );
};

export default Home;
