import React from "react";
import { Button } from "@nextui-org/react";

function Pricing() {
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
          d="M0,64L48,58.7C96,53,192,43,288,85.3C384,128,480,224,576,234.7C672,245,768,171,864,160C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1440,320Z"
        ></path>
      </svg>
      <div className="container mx-auto mt-10 px-8 mb-28">
        <h1 className="text-4xl font-bold text-center text-white mb-10 relative">
          Choose Your Plan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          <PricingCard
            title="Basic Plan"
            price="RS 2000 / mo"
            features={[
              "✓ Own organization page",
              "✓ Quick registration",
              "✓ Confirmation mail with slot",
              "✓ Get slot within 3 seconds",
              "✓ Instantly view slot list",
              "✓ Instantly view points table",
              "✓ Slot full confirmation",
              "✓ Book slot by prize and time",
              "✓ View IDP of registered slots",
            ]}
            adminFeatures={[
              "✓ Send IDP to teams",
              "✕ Delete teams",
              "✕ Delete points table",
              "✕ Delete IDP",
              "✕ View details of team",
              "✕ Create an instant points table",
            ]}
            color="blue"
            orderLink="https://wa.me/+919304514787?text=I%20am%20interested%20in%20the%20Basic%20Plan.%20Please%20provide%20more%20information."
          />
          <PricingCard
            title="Standard Plan"
            price="RS 2500 / mo"
            features={[
              "✓ Own organization page",
              "✓ Quick registration",
              "✓ Confirmation mail with slot",
              "✓ Get slot within 3 seconds",
              "✓ Instantly view slot list",
              "✓ Instantly view points table",
              "✓ Slot full confirmation",
              "✓ Book slot by prize and time",
              "✓ View IDP of registered slots",
            ]}
            adminFeatures={[
              "✓ Send IDP to teams",
              "✓ Delete teams",
              "✓ Delete points table",
              "✕ Delete IDP",
              "✕ View details of team",
              "✕ Create an instant points table",
            ]}
            color="purple"
            orderLink="https://wa.me/+919304514787?text=I%20am%20interested%20in%20the%20Standard%20Plan.%20Please%20provide%20more%20information."
          />
          <PricingCard
            title="Premium Plan"
            price="RS 3000 / mo"
            features={[
              "✓ Own organization page",
              "✓ Quick registration",
              "✓ Confirmation mail with slot",
              "✓ Get slot within 3 seconds",
              "✓ Instantly view slot list",
              "✓ Instantly view points table",
              "✓ Slot full confirmation",
              "✓ Book slot by prize and time",
              "✓ View IDP of registered slots",
            ]}
            adminFeatures={[
              "✓ Send IDP to teams",
              "✓ Delete teams",
              "✓ Delete points table",
              "✓ Delete IDP",
              "✓ View details of team",
              "✓ Create an instant points table",
            ]}
            color="green"
            orderLink="https://wa.me/+919304514787?text=I%20am%20interested%20in%20the%20Premium%20Plan.%20Please%20provide%20more%20information."
          />
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
  adminFeatures,
  color,
  orderLink,
}) {
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
        <h3 className="text-2xl sm:text-xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-xl sm:text-lg text-white mb-4">{price}</p>
        <ul className="text-lg sm:text-base text-white mb-4 list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="text-lg sm:text-base text-white mb-2 font-semibold">
          Admin Panel Features:
        </p>
        <ul className="text-lg sm:text-base text-white mb-4 list-disc pl-5">
          {adminFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a href={orderLink} target="_blank" rel="noopener noreferrer">
          <Button
            color="primary"
            className="glow-button"
            variant="bordered"
            css={{
              "&:hover": {
                boxShadow: `0 0 20px ${color}`,
              },
            }}
          >
            Order Now
          </Button>
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition duration-1000 ease-out"></div>
    </div>
  );
}

export default Pricing;
