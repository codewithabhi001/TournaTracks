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
    <footer className="px-8 py-6 bg-gradient-to-r from-[#1a101f] via-[#dc2430] to-[#6a11cb] text-white">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <FaGamepad className="self-center text-4xl text-pink-400 animate-pulse" />
            <span className="self-center text-4xl font-bold">LiveResult</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-base gap-y-8 lg:w-2/3 lg:gap-x-4">
          {/* Products */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold text-lg">
              Products
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/AddSlotsForm"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaGamepad />
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaShoppingCart />
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaGamepad />
                  Consoles
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaTrophy />
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>
          {/* Community */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold text-lg">
              Community
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaUsers />
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaTrophy />
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaGamepad />
                  Contests
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaGamepad />
                  Challenges
                </Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div className="space-y-3">
            <h3 className="uppercase font-bold text-lg">Support</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaLifeRing />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaEnvelope />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="footer-icon text-lg font-bold flex items-center"
                >
                  <FaQuestionCircle />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          {/* Connect */}
          <div className="space-y-3">
            <h3 className="uppercase font-bold text-lg">Connect</h3>
            <div className="flex justify-start space-x-3">
              <Link
                to="#"
                title="Facebook"
                className="footer-icon-social bg-pink-600"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                title="Twitter"
                className="footer-icon-social bg-pink-600"
              >
                <FaTwitter />
              </Link>
              <Link
                to="#"
                title="Instagram"
                className="footer-icon-social bg-pink-600"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-base text-center text-white">
        & copy; {new Date().getFullYear()} LiveResult. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
