import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="mx-auto flex flex-col md:flex-row justify-center items-center py-24 px-4 md:px-8 lg:px-16 pr-4 md:pr-8 lg:pr-16">
        <div className="md:mr-8 text-center md:text-left hover-effect-container">
          <div className="h-[10vh] flex justify-center flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to the Tournament Hub",
                    "Create, manage, & view live results",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-text",
                }}
              />
            </h1>
          </div>
          <p className="text-lg md:text-xl lg:text-3xl text-white w-fit ">
            Your ultimate solution for{" "}
            <span className="highlight">
              organizing and tracking tournaments
            </span>
            . <br /> Seamlessly{" "}
            <span className="highlight">create and manage events</span>, keep
            track of scores, <br /> and provide{" "}
            <span className="highlight">real-time updates</span> to participants
            and fans.
          </p>
          <br />
          <button className="bg-gradient-to-r from-[#7b4397] via-[#dc2430] to-[#6a11cb] hover:from-blue-500 text-white font-bold py-2 px-4 rounded glow-button">
            Explore More
          </button>
        </div>
        <div className="mt-4 md:mt-0 relative">
          <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>
          <img
            src="/logo2.png"
            alt="Tournament Management"
            className=" rounded-md hover:scale-95 duration-700 ease-out transform transition-transform animated-logo"
          />
        </div>
      </div>
      <style jsx>{`
        .typewriter-text {
          display: inline-block;
          background: linear-gradient(90deg, #7b4397, #dc2430, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(
            0 0 20px rgba(108, 17, 203, 0.4)
              /* Match with the button gradient */
          ); /* Adjust glow color */
        }

        .highlight {
          background: linear-gradient(90deg, #7b4397, #dc2430, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(
            0 0 20px rgba(108, 17, 203, 0.4)
              /* Match with the button gradient */
          ); /* Adjust glow color */
        }

        .glow-button {
          filter: drop-shadow(
            0 0 20px rgba(108, 17, 203, 0.5)
              /* Match with the button gradient */
          ); /* Adjust glow color */
        }

        .animated-logo {
          animation: moveUpDown 3s infinite alternate ease-in-out;
          transition: filter 0.3s ease-in-out;
        }

        @keyframes moveUpDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50px); /* Adjust movement */
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
