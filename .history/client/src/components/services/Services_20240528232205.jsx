import React from "react";
import { Button } from "@nextui-org/react";

function Services() {
  return (
    <div className="relative container mx-auto mt-10 px-8 mb-28">
      <BackgroundSVG />
      <h1 className="text-4xl font-bold text-center text-white mb-10 relative z-20">
        Enter the Gaming Arena
      </h1>
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          title="Esports Tournaments"
          description="Participate in thrilling esports tournaments and showcase your skills to the world."
          color="indigo"
        />
        <ServiceCard
          title="Gaming Communities"
          description="Connect with fellow gamers, join communities, and share your gaming experiences."
          color="purple"
        />
        <ServiceCard
          title="Game Development"
          description="Bring your gaming ideas to life with our comprehensive game development services."
          color="blue"
        />
        <ServiceCard
          title="Game Streaming"
          description="Stream your gameplay live to your audience and build your gaming brand."
          color="yellow"
        />
        <ServiceCard
          title="Gaming Merchandise"
          description="Explore our exclusive collection of gaming merchandise and accessories."
          color="green"
        />
        <ServiceCard
          title="Gaming News & Reviews"
          description="Stay updated with the latest gaming news, reviews, and trends in the industry."
          color="pink"
        />
      </div>
    </div>
  );
}

function ServiceCard({ title, description, color }) {
  return (
    <div
      className="relative rounded-lg overflow-hidden group mb-10 transition-all ease-out hover:translate-y-1 border-2 border-white bg-slate-100"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-pink-500 to-black opacity-60 transition duration-300 group-hover:opacity-50"></div>
      <div
        className={`absolute inset-0 bg-${color}-500 opacity-30 transition duration-300 group-hover:opacity-20`}
      ></div>
      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-white mb-4">{description}</p>
        <Button color="secondary" auto>
          Learn More
        </Button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition duration-1000 ease-out"></div>
    </div>
  );
}

function BackgroundSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#1E293B"
        fillOpacity="1"
        d="M0,160L60,186.7C120,213,240,267,360,250.7C480,235,600,149,720,122.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
}

export default Services;
