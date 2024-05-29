import React from "react";
import Hero from "../Hero/Hero";
import Services from "../services/Services";
import Features from "../features/Features";
import pricecard from "../services/Pricecard";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Pricecard />
      <Features />
    </div>
  );
};

export default Home;
