import React, { useEffect } from "react";
import "./Services.css";

const Carousel = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {
      padding: 200,
    });
    autoplay();

    function autoplay() {
      const elems = document.querySelectorAll(".carousel");
      const instance = M.Carousel.getInstance(elems[0]);
      instance.next();
      setTimeout(autoplay, 4500);
    }
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-item">Item 1</div>
      <div className="carousel-item">Item 2</div>
      <div className="carousel-item">Item 3</div>
      <div className="carousel-item">Item 4</div>
      <div className="carousel-item">Item 5</div>
    </div>
  );
};

export default Carousel;
