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
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-8 flex flex-wrap justify-between">
        <div className="w-full lg:w-auto mb-6 lg:mb-0 flex items-center">
          <Link to="/" className="flex items-center text-white">
            <FaGamepad className="text-3xl mr-2" />
            <span className="text-2xl font-bold">LiveResult</span>
          </Link>
        </div>
        <div className="w-full lg:w-auto flex flex-wrap justify-between lg:justify-start space-y-6 lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col">
            <h3 className="text-xl mb-4 border-b-2 border-gray-600 pb-1 inline-block">
              Products
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/AddSlotsForm"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaGamepad className="mr-2" /> Games
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaShoppingCart className="mr-2" /> Accessories
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaGamepad className="mr-2" /> Consoles
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaTrophy className="mr-2" /> Merchandise
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl mb-4 border-b-2 border-gray-600 pb-1 inline-block">
              Community
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaUsers className="mr-2" /> Forums
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaTrophy className="mr-2" /> Events
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaGamepad className="mr-2" /> Contests
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaGamepad className="mr-2" /> Challenges
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl mb-4 border-b-2 border-gray-600 pb-1 inline-block">
              Support
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaLifeRing className="mr-2" /> Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaEnvelope className="mr-2" /> Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="flex items-center text-gray-300 hover:text-teal-400"
                >
                  <FaQuestionCircle className="mr-2" /> FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl mb-4 border-b-2 border-gray-600 pb-1 inline-block">
              Connect
            </h3>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-gray-300 hover:text-teal-400"
                title="Facebook"
              >
                <FaFacebookF className="text-2xl" />
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-teal-400"
                title="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-teal-400"
                title="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LiveResult. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
