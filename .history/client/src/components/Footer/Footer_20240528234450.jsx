import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Social Media Icons */}
          <div className="flex flex-col items-center space-y-2">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-3xl hover:text-blue-500 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-red-500 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-blue-800 transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-red-600 transition-colors duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <Link
              to="/help"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Help Desk
            </Link>
            <Link
              to="/faq"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/terms"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
          {/* More Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold mb-2">More Links</h4>
            <Link
              to="/about"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Gallery
            </Link>
          </div>
          {/* Contact */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <a
              href="mailto:info@liveresult.com"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <AiOutlineMail className="inline-block mr-2" />
              info@liveresult.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
