import React from "react";
import Hero from "../Hero/Hero";
import Services from "../services/Services";
import Features from "../features/Features";

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