import React from "react";

function Services() {
  return (
    <div className="container mx-auto mt-5 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Enter the Gaming Arena
      </h1>
      <p className="text-lg text-center text-gray-500 mb-8">
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
    <div className={`border-2 border-${color}-500 rounded-lg p-6`}>
      <div className={`h-4 w-full bg-${color}-500 mb-4 mx-auto`} />
      <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
}

export default Services;
