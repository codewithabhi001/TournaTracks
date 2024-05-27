import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="mx-auto flex flex-col justify-center items-center py-24 px-4 md:px-8 lg:px-16 pr-4 md:pr-8 lg:pr-16">
        <div className="text-center hover-effect-container">
          <div className="h-[10vh] flex justify-center flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-glow">
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
          <p className="text-lg md:text-xl lg:text-3xl text-white w-fit">
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
          <button className="bg-gradient-to-r from-pink-400 via-green-300 to-blue-500 hover:from-blue-500 text-white font-bold py-2 px-4 rounded glow-button animate-blink">
            Explore More
          </button>
        </div>
      </div>
      <style jsx>{`
        .typewriter-text {
          display: inline-block;
          background: linear-gradient(90deg, #7b4397, #dc2430, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(108, 17, 203, 0.4));
        }

        .highlight {
          background: linear-gradient(90deg, #7b4397, #dc2430, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(108, 17, 203, 0.4));
        }

        .glow-button {
          filter: drop-shadow(0 0 20px rgba(108, 17, 203, 0.5));
        }

        .animate-glow {
          animation: glow 1.5s infinite;
        }

        .animate-blink {
          animation: blink 0.5s infinite;
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.9),
              0 0 30px rgba(255, 255, 255, 0.7),
              0 0 40px rgba(255, 255, 255, 0.5),
              0 0 50px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 1),
              0 0 40px rgba(255, 255, 255, 0.9),
              0 0 50px rgba(255, 255, 255, 0.7),
              0 0 60px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
