import React from "react";
import Navbar from "../Components/Navbar";
import Categoryitem from "../Components/Categoryitem";
import Categories from "../Components/Categories";
import Slider from "../Components/Slider";
import Hero from "../Components/Hero";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Categoryitem />
      <Categories />
      <Slider />
      <Hero />

      <Products />
    </div>
  );
};

export default Home;
