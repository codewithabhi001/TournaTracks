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
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-8 py-6 bg-gradient-to-r from-[#7b4397] via-[#dc2430] to-[#6a11cb] text-white">
      <div className="container flex flex-col lg:flex-row">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <Link
            to="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <FaGamepad className="self-center text-4xl text-pink-400 animate-pulse" />
            <span className="self-center text-4xl font-bold">LiveResult</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-base gap-y-8 lg:w-2/3 lg:gap-x-">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold text-lg">
              Products
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/AddSlotsForm"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaGamepad className="mr-2" />
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaShoppingCart className="mr-2" />
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaGamepad className="mr-2" />
                  Consoles
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaTrophy className="mr-2" />
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold text-lg">
              Community
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaUsers className="mr-2" />
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaTrophy className="mr-2" />
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaGamepad className="mr-2" />
                  Contests
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaGamepad className="mr-2" />
                  Challenges
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold text-lg">Support</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaLifeRing className="mr-2" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaEnvelope className="mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-lg font-bold hover:text-yellow-500"
                >
                  <FaQuestionCircle className="mr-2" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold text-lg">Connect</h3>
            <div className="flex justify-start space-x-3">
              <Link
                to="#"
                title="Facebook"
                className="flex items-center p-1 bg-pink-600 rounded-full"
              >
                <FaFacebookF className="text-white text-xl animate-pulse" />
              </Link>
              <Link
                to="#"
                title="Twitter"
                className="flex items-center p-1 bg-pink-600 rounded-full"
              >
                <FaTwitter className="text-white text-xl animate-pulse" />
              </Link>
              <Link
                to="#"
                title="Instagram"
                className="flex items-center p-1 bg-pink-600 rounded-full"
              >
                <FaInstagram className="text-white text-xl animate-pulse" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-base text-center text-white">
        &copy; {new Date().getFullYear()} LiveResult. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
