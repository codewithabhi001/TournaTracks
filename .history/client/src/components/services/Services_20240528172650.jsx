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
        <img src="girl.jpg" alt="Image 1" />
      </div>
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 1" />
      </div>
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 1" />
      </div>
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 1" />
      </div>
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 1" />
      </div>
    </div>
  );
};

export default Carousel;
