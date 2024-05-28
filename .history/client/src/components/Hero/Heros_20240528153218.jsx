// src/App.js
import React from "react";

const images = [
  {
    url: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
    title: "Lossless Youths",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    url: "https://i.redd.it/tc0aqpv92pn21.jpg",
    title: "Estrange Bond",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    url: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
    title: "The Gate Keeper",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    url: "https://images7.alphacoders.com/878/878663.jpg",
    title: "Last Trace Of Us",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    url: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
    title: "Urban Decay",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
  {
    url: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
    title: "The Migration",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="h-screen grid place-items-center overflow-hidden">
      <div className="relative w-full h-full shadow-lg">
        <ul className="relative flex items-center h-full overflow-hidden">
          {images.map((image, index) => (
            <li
              key={index}
              className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "left-1/2 transform -translate-x-1/2 w-full h-full rounded-none opacity-100"
                  : index === (currentIndex + 1) % images.length
                  ? "left-[calc(50%+220px)] w-[200px] h-[300px] opacity-100"
                  : "left-[calc(50%+440px)] w-[200px] h-[300px] opacity-0"
              }`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {index === currentIndex && (
                <div className="absolute top-1/2 left-12 transform -translate-y-1/2 text-white">
                  <h2 className="font-black uppercase text-xl">
                    {image.title}
                  </h2>
                  <p className="mt-4 mb-6 text-lg">{image.description}</p>
                  <button className="bg-opacity-10 bg-black border-2 border-white rounded py-2 px-4 cursor-pointer">
                    Read More
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <nav className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={handlePrev}
            className="bg-white bg-opacity-50 text-black border-2 border-black rounded-full p-3 mx-2 cursor-pointer hover:bg-opacity-30"
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
          <button
            onClick={handleNext}
            className="bg-white bg-opacity-50 text-black border-2 border-black rounded-full p-3 mx-2 cursor-pointer hover:bg-opacity-30"
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
