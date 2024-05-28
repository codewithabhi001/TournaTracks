// src/Hero.js
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-between p-8 custom-bg min-h-screen">
      <div>
        <h1 className="text-5xl font-bold mb-4 text-white">
          Bring your team together. Right here.
        </h1>
        <p className="text-gray-400 mb-8">
          The quick brown fox jumps over the lazy dog.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
          Learn how
        </button>
      </div>
      <div className="relative">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member"
          className="rounded-full w-40 h-40"
        />
        <div className="absolute top-0 right-0 mt-4 mr-4 bg-gray-800 text-white p-2 rounded-lg">
          Week 5
          <div className="mt-2 bg-gray-700 h-2 w-full rounded-full">
            <div className="bg-purple-600 h-full w-1/2 rounded-full"></div>
          </div>
          <span className="block mt-2 text-sm">+9%</span>
        </div>
        <div className="absolute bottom-0 left-0 mb-4 ml-4 bg-gray-800 text-white p-2 rounded-lg">
          Day 32
          <div className="mt-2">
            <svg width="100" height="50">
              <polyline
                points="0,40 20,10 40,30 60,20 80,10 100,40"
                style={{ fill: "none", stroke: "#00f", strokeWidth: "3" }}
              />
            </svg>
          </div>
          <span className="block mt-2 text-sm">+0.49%</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
