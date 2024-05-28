import React from "react";
import "..services.services.css/";

function Services() {
  return (
    <div className="container mx-auto mt-10 px-8 mb-28">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Enter the Gaming Arena
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="carousel">
          <div class="carousel-item"></div>
          <div class="carousel-item"></div>
          <div class="carousel-item"></div>
          <div class="carousel-item"></div>
          <div class="carousel-item"></div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, color }) {
  return (
    <div
      className="relative rounded-lg overflow-hidden group mb-10 transition-all ease-out hover:translate-y-1 border-2 border-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-opacity-30 bg-gray-900 blur-sm group-hover:blur-md transition duration-300 hover:shadow-lg"></div>
      <div
        className={`absolute inset-0 bg-${color}-500 opacity-30 transition duration-300 group-hover:opacity-20`}
      ></div>
      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-white">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition duration-1000 ease-out"></div>
    </div>
  );
}

export default Services;
