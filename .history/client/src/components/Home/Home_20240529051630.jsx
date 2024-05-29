import React from "react";
import Hero from "../Hero/Hero";
import Services from "../services/Services";
import Features from "../features/Features";
import Card from "../pricecard/Pricecard";

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Services />
      <Features />
    </div>
  );
};

export default Home;
