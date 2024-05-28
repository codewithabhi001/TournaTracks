import React from "react";

function Services() {
  return (
    <div className="container mx-auto mt-5 px-4">
      <h2 className="text-3xl font-bold text-gray-900">Services</h2>
      <p className="text-lg text-gray-500 mb-8">
        Here are a few of the awesome services we provide.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ServiceCard
          title="DAPP Development"
          description="A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface."
          color="indigo"
        />
        <ServiceCard
          title="Web 3.0 Development"
          description="Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web."
          color="purple"
        />
        <ServiceCard
          title="Project Audit"
          description="A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld."
          color="blue"
        />
        <ServiceCard
          title="Hacking / RE"
          description="A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network."
          color="yellow"
        />
        <ServiceCard
          title="Bot/Script Development"
          description="Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process."
          color="green"
        />
      </div>
    </div>
  );
}

function ServiceCard({ title, description, color }) {
  return (
    <div className={`bg-white border-2 border-${color}-500 rounded-lg p-6`}>
      <div className={`h-4 w-full bg-${color}-500 mb-4`} />
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
    </div>
  );
}

export default Services;
