import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const GamingCarousel = () => {
  const games = [
    { src: "Hero.png", title: "Game 1" },
    { src: "Hero2.png", title: "Game 2" },
    { src: "Hero3.png", title: "Game 3" },
    { src: "Hero4.png", title: "Game 4" },
    { src: "Hero3.png", title: "Game 5" },
  ];

  return (
    <div className=" text-white p-8 ">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-center">
        Gaming ZONE
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-2"
            style={{ minWidth: "200px" }}
          >
            <div className="border-4 border-transparent rounded-lg bg-gradient-to-r from-[#7b4397] via-[#dc2430] to-[#6a11cb] p-1">
              <img
                src={`/${game.src}`}
                alt={game.title}
                className="rounded-lg"
              />
            </div>
            <p className="mt-2 text-center text-lg font-bold bg-gradient-to-r from-[#7b4397] via-[#dc2430] to-[#6a11cb] bg-clip-text text-transparent">
              {game.title}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GamingCarousel;
