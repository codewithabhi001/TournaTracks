import React from "react";

function Services() {
  return (
    <div className="container mx-auto mt-5 px-4">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Enter the Gaming Arena
      </h1>
      <p className="text-lg text-center text-white mb-8">
        Experience the ultimate gaming platform. Create, manage, and track your
        tournaments effortlessly.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      className={`relative rounded-lg p-6 overflow-hidden group bg-${color}-500`}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-${color}-500 bg-opacity-50 blur group-hover:blur-sm transition duration-300"></div>
      <h3 className="text-lg font-bold text-white text-center mb-2 group-hover:text-${color}-200 transition duration-300">
        {title}
      </h3>
      <p className="text-sm text-white text-center group-hover:text-${color}-200 transition duration-300">
        {description}
      </p>
    </div>
  );
}

export default Services;
