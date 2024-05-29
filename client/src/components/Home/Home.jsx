import React from "react";
import Hero from "../Hero/Hero";
import Services from "../services/Services";
import Features from "../features/Features";
import Card from "../pricecard/Pricecard";
// import Game from "../GamingCarousel/GamingCarousel";

const Home = () => {
  return (
    <div>
      <Hero />

      <Services />
      <Card />
      <Features />
    </div>
  );
};

export default Home;
