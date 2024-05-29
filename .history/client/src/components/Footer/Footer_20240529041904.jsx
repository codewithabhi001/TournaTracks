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
    <footer className="bg-gray-900 bg-opacity-80 text-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Link
              to="/"
              className="flex items-center text-2xl font-bold text-white"
            >
              <FaGamepad className="mr-3 text-3xl hover:glow-icon" />
              LiveResult
            </Link>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul>
              <li className="mb-2">
                <Link to="/AddSlotsForm" className="flex items-center text-lg">
                  <FaGamepad className="mr-2 hover:glow-icon" />
                  Games
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaShoppingCart className="mr-2 hover:glow-icon" />
                  Accessories
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaGamepad className="mr-2 hover:glow-icon" />
                  Consoles
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaTrophy className="mr-2 hover:glow-icon" />
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <ul>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaUsers className="mr-2 hover:glow-icon" />
                  Forums
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaTrophy className="mr-2 hover:glow-icon" />
                  Events
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaGamepad className="mr-2 hover:glow-icon" />
                  Contests
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaGamepad className="mr-2 hover:glow-icon" />
                  Challenges
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaLifeRing className="mr-2 hover:glow-icon" />
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaEnvelope className="mr-2 hover:glow-icon" />
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="flex items-center text-lg">
                  <FaQuestionCircle className="mr-2 hover:glow-icon" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Help Desk</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex space-x-4">
            <Link
              to="#"
              title="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF className="text-2xl hover:glow-icon" />
            </Link>
            <Link
              to="#"
              title="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter className="text-2xl hover:glow-icon" />
            </Link>
            <Link
              to="#"
              title="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram className="text-2xl hover:glow-icon" />
            </Link>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-400">
          &copy; {new Date().getFullYear()} LiveResult. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
