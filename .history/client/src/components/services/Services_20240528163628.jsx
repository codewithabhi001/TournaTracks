import React, { useEffect, useRef } from "react";
import "./Services.css";

const Carousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const items = carouselRef.current.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    const showNextItem = () => {
      items[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add("active");
    };

    intervalRef.current = setInterval(showNextItem, 4500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel-item active">
        <img src="path/to/your/image1.jpg" alt="Item 1" />
      </div>
      <div className="carousel-item">
        <img src="path/to/your/image2.jpg" alt="Item 2" />
      </div>
      <div className="carousel-item">
        <img src="path/to/your/image3.jpg" alt="Item 3" />
      </div>
      <div className="carousel-item">
        <img src="path/to/your/image4.jpg" alt="Item 4" />
      </div>
      <div className="carousel-item">
        <img src="path/to/your/image5.jpg" alt="Item 5" />
      </div>
    </div>
  );
};

export default Carousel;
