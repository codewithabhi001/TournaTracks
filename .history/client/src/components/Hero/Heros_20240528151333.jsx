import React from "react";

function Hero() {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card 1 */}
      <div className="card w-96 glass mx-4 my-4">
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
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card w-96 glass mx-4 my-4">
        <figure>
          <img src="https://example.com/gaming-image.jpg" alt="gaming!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gaming Tips</h2>
          <p>Master your gaming skills with these pro tips!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore now!</button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card w-96 glass mx-4 my-4">
        <figure>
          <img src="https://example.com/gaming-image-2.jpg" alt="gaming 2!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Level Up Your Gaming Setup</h2>
          <p>Upgrade your gaming rig for an immersive experience!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Upgrade now!</button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card w-96 glass mx-4 my-4">
        <figure>
          <img src="https://example.com/gaming-image-3.jpg" alt="gaming 3!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gaming Community</h2>
          <p>Connect with fellow gamers and share experiences!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Join now!</button>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card w-96 glass mx-4 my-4">
        <figure>
          <img src="https://example.com/gaming-image-4.jpg" alt="gaming 4!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Game Reviews</h2>
          <p>Discover the latest game reviews and recommendations!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore now!</button>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="card w-96 glass mx-4 my-4">
        <figure>
          <img src="https://example.com/gaming-image-5.jpg" alt="gaming 5!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Game Development</h2>
          <p>Learn how to develop your own games from scratch!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Start learning!</button>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="card w-96 glass mx-4 my-4">
        <figure>
          <img src="https://example.com/gaming-image-6.jpg" alt="gaming 6!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gaming Merchandise</h2>
          <p>Get the coolest gaming merchandise to show off your passion!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Shop now!</button>
          </div>
        </div>
      </div>

      {/* Card 8 */}
      <div className="card w-96 glass mx-4 my-4">
        <figure>
          <img src="https://example.com/gaming-image-7.jpg" alt="gaming 7!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gaming Events</h2>
          <p>Stay updated on upcoming gaming events and tournaments!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Discover now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
