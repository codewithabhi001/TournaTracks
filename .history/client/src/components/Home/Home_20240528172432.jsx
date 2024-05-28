import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services"; // Ensure this path is correct
// import GamingCarousel from "../GamingCarousel/GamingCarousel";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <GamingCarousel /> */}
      <Services />
    </div>
  );
};

export default Home;
