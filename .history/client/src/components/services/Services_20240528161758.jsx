
import { useState } from "react";
import React, { useEffect } from 'react';
import './Services.css';
import M from 'materialize-css';

const Carousel = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      padding: 200
    });
    autoplay();

    function autoplay() {
      const elems = document.querySelectorAll('.carousel');
      const instances = M.Carousel.getInstance(elems[0]);
      instances.next();
      setTimeout(autoplay, 4500);
    }
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-item"></div>
      <div className="carousel-item"></div>
      <div className="carousel-item"></div>
      <div className="carousel-item"></div>
      <div className="carousel-item"></div>
    </div>
  );
};

export default Carousel;


export default Services;
