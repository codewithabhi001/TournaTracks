import React, { useEffect } from "react";
import "./Services.css";

const Carousel = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".carousel");
    const instances = M.Carousel.init(elems, {
      padding: 200,
    });

    const autoplay = () => {
      const instance = M.Carousel.getInstance(elems[0]);
      if (instance) {
        instance.next();
        setTimeout(autoplay, 4500);
      }
    };

    autoplay(); // Start the autoplay

    // Cleanup function to destroy carousel instances on component unmount
    return () => {
      instances.forEach((instance) => instance.destroy());
    };
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src="hero.jpg" alt="Image 1" />
      </div>
      <div className="carousel-item">
        <img src="image2.jpg" alt="Image 2" />
      </div>
      <div className="carousel-item">
        <img src="image3.jpg" alt="Image 3" />
      </div>
      <div className="carousel-item">
        <img src="image4.jpg" alt="Image 4" />
      </div>
      <div className="carousel-item">
        <img src="image5.jpg" alt="Image 5" />
      </div>
    </div>
  );
};

export default Carousel;
