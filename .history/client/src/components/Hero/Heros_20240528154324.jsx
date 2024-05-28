import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css"; // Import Materialize CSS
import M from "materialize-css/dist/js/materialize.min.js"; // Import Materialize JS
import "./Hero.css"; // Import your custom CSS

function CardCarousel() {
  useEffect(() => {
    // Initialize the carousel on component mount
    let carousel = document.querySelector(".carousel");
    M.Carousel.init(carousel, { padding: 200 });

    // Autoplay function
    const autoplay = () => {
      M.Carousel.getInstance(carousel).next();
      setTimeout(autoplay, 4500);
    };

    // Start autoplay
    autoplay();

    // Clean up function to clear timeout on component unmount
    return () => clearTimeout(autoplay);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="carousel">
      <div className="carousel-item">Item 1</div>
      <div className="carousel-item">Item 2</div>
      <div className="carousel-item">Item 3</div>
      <div className="carousel-item">Item 4</div>
      <div className="carousel-item">Item 5</div>
    </div>
  );
}

export default CardCarousel;
