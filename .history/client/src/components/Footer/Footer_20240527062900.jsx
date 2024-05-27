import React from "react";
import {
  FaGamepad,
  FaHeadset,
  FaShoppingCart,
  FaTrophy,
  FaLifeRing,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-8 py-6 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-40 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <FaGamepad className="self-center text-4xl text-pink-400 animate-pulse" />
            <span className="self-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-green-300 to-blue-500 animate-pulse">
              LiveResult
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-base gap-y-8 lg:w-2/3 lg:gap-x-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-green-300 to-blue-500 animate-glow">
              Products
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/AddSlotsForm"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-pink-400"
                >
                  <FaGamepad className="mr-2 text-pink-400" />
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-green-300"
                >
                  <FaShoppingCart className="mr-2 text-green-300" />
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-blue-500"
                >
                  <FaGamepad className="mr-2 text-blue-500" />
                  Consoles
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-yellow-300"
                >
                  <FaTrophy className="mr-2 text-yellow-300" />
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-green-300 to-blue-500 animate-glow">
              Community
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-green-300"
                >
                  <FaUsers className="mr-2 text-green-300" />
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-blue-500"
                >
                  <FaTrophy className="mr-2 text-blue-500" />
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-yellow-300"
                >
                  <FaGamepad className="mr-2 text-yellow-300" />
                  Contests
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-pink-400"
                >
                  <FaGamepad className="mr-2 text-pink-400" />
                  Challenges
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-green-300 to-blue-500 animate-glow">
              Support
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-green-300"
                >
                  <FaLifeRing className="mr-2 text-green-300" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-blue-500"
                >
                  <FaEnvelope className="mr-2 text-blue-500" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-pink-300 flex items-center animate-blink text-yellow-300"
                >
                  <FaQuestionCircle className="mr-2 text-yellow-300" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-green-300 to-blue-500 animate-glow">
              Connect
            </h3>
            <div className="flex justify-start space-x-3">
              <Link
                to="#"
                title="Facebook"
                className="flex items-center p-2 bg-blue-600 rounded-full hover:bg-blue-400 animate-blink"
              >
                <FaFacebookF className="text-white text-xl animate-pulse" />
              </Link>
              <Link
                to="#"
                title="Twitter"
                className="flex items-center p-2 bg-blue-400 rounded-full hover:bg-blue-200 animate-blink"
              >
                <FaTwitter className="text-white text-xl animate-pulse" />
              </Link>
              <Link
                to="#"
                title="Instagram"
                className="flex items-center p-2 bg-pink-600 rounded-full hover:bg-pink-400 animate-blink"
              >
                <FaInstagram className="text-white text-xl animate-pulse" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-base text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-green-300 to-blue-500 animate-glow">
        &copy; {new Date().getFullYear()} LiveResult. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
