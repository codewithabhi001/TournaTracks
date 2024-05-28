import React from "react";
import "./Services.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 1" />
      </div>
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 2" />
      </div>
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 3" />
      </div>
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 4" />
      </div>
      <div className="carousel-item">
        <img src="girl.jpg" alt="Image 5" />
      </div>
    </div>
  );
};

export default Carousel;
