import React, { useEffect } from "react";

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
        <img
          src="https://via.placeholder.com/400x500?text=Item+1"
          alt="Item 1"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://via.placeholder.com/400x500?text=Item+2"
          alt="Item 2"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://via.placeholder.com/400x500?text=Item+3"
          alt="Item 3"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://via.placeholder.com/400x500?text=Item+4"
          alt="Item 4"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://via.placeholder.com/400x500?text=Item+5"
          alt="Item 5"
        />
      </div>
    </div>
  );
};

export default Carousel;
