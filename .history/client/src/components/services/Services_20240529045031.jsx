import React from "react";
import { Button } from "@nextui-org/react";

function Services() {
  return (
    <div className="relative">
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1a1a1a"
          fillOpacity="1"
          d="M0,64L48,58.7C96,53,192,43,288,85.3C384,128,480,224,576,234.7C672,245,768,171,864,160C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="container mx-auto mt-10 px-8 mb-28">
        <h1 className="text-4xl font-bold text-center text-white mb-10 relative">
          Enter the Gaming Arena
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
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
        border: "2px solid",
        borderColor: color,
        borderRadius: "10px",
        padding: "1rem",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#3a04ae] to-black opacity-60 transition duration-300 group-hover:opacity-50"></div>
      <div
        className={`absolute inset-0 bg-${color}-500 opacity-30 transition duration-300 group-hover:opacity-20`}
      ></div>
      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-white mb-4">{description}</p>
        <Button color="primary" variant="bordered">
          Learn More
        </Button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition duration-1000 ease-out"></div>
    </div>
  );
}

export default Services;
