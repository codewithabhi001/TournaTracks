import React from "react";

function Hero() {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card 1 */}
      <div className="card w-full sm:w-96 glass mx-4 my-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-primary rounded-full">
              Learn now!
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card w-full sm:w-96 glass mx-4 my-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gaming Tips</h2>
          <p>Master your gaming skills with these pro tips!</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-primary rounded-full">
              Explore now!
            </a>
          </div>
        </div>
      </div>

      {/* Repeat the same structure for the remaining cards */}
      {/* Cards 3-8 */}
      {[...Array(6)].map((_, index) => (
        <div key={index} className="card w-full sm:w-96 glass mx-4 my-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>Card Description</p>
            <div className="card-actions justify-end">
              <a href="#" className="btn btn-primary rounded-full">
                Button
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
