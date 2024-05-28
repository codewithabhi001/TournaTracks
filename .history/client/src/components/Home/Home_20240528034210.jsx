// src/components/Home/Home.jsx
import React from "react";
import Hero from "../Hero/Hero";
import GamingCarousel from "../GamingCarousel/GamingCarousel";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <GamingCarousel />
      <Services />
    </div>
  );
};

export default Home;
