// src/components/Home/Home.jsx
import React from "react";
import Hero from "../Hero/Hero";
import GamingCarousel from "../GamingCarousel/GamingCarousel";

const Home = () => {
  return (
    <div>
      <Hero />
      <GamingCarousel />
      <Footer />
    </div>
  );
};

export default Home;