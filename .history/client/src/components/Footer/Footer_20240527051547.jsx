import React from "react";
import { Link } from "react-router-dom";
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

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <Link to="/" className="logo">
            <FaGamepad className="logo-icon" />
            <span className="logo-text">LiveResult</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-base gap-y-8 lg:w-2/3 lg:gap-x-4">
          <div className="footer-section">
            <h3 className="section-title">Products</h3>
            <ul className="section-list">
              <li>
                <Link to="/AddSlotsForm" className="section-link">
                  <FaGamepad className="section-icon" />
                  Games
                </Link>
              </li>
              <li>
                <Link to="#" className="section-link">
                  <FaShoppingCart className="section-icon" />
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="#" className="section-link">
                  <FaGamepad className="section-icon" />
                  Consoles
                </Link>
              </li>
              <li>
                <Link to="#" className="section-link">
                  <FaTrophy className="section-icon" />
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="section-title">Community</h3>
            <ul className="section-list">
              <li>
                <Link to="#" className="section-link">
                  <FaUsers className="section-icon" />
                  Forums
                </Link>
              </li>
              <li>
                <Link to="#" className="section-link">
                  <FaTrophy className="section-icon" />
                  Events
                </Link>
              </li>
              <li>
                <Link to="#" className="section-link">
                  <FaGamepad className="section-icon" />
                  Contests
                </Link>
              </li>
              <li>
                <Link to="#" className="section-link">
                  <FaGamepad className="section-icon" />
                  Challenges
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="section-title">Support</h3>
            <ul className="section-list">
              <li>
                <Link to="#" className="section-link">
                  <FaLifeRing className="section-icon" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="section-link">
                  <FaEnvelope className="section-icon" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="section-link">
                  <FaQuestionCircle className="section-icon" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="section-title">Connect</h3>
            <div className="social-icons">
              <Link to="#" title="Facebook" className="social-icon">
                <FaFacebookF className="icon" />
              </Link>
              <Link to="#" title="Twitter" className="social-icon">
                <FaTwitter className="icon" />
              </Link>
              <Link to="#" title="Instagram" className="social-icon">
                <FaInstagram className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} LiveResult. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
