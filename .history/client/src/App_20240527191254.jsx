import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faFacebookMessenger,
  faTwitter,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  { icon: faFacebook, color: "#4267B2" },
  { icon: faWhatsapp, color: "#25D366" },
  { icon: faInstagram, color: "#E1306C" },
  { icon: faFacebookMessenger, color: "#0084FF" },
  { icon: faTwitter, color: "#1DA1F2" },
  { icon: faGoogleDrive, color: "#0F9D58" },
];

const SocialBeam = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative">
        {/* Main Icon */}
        <motion.div
          className="flex items-center justify-center rounded-full w-16 h-16 bg-white text-black"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
        </motion.div>
        {/* Connecting Lines and Icons */}
        {icons.map((item, index) => {
          const angle = (index * 360) / icons.length; // Calculate angle for each icon
          const x = Math.cos((angle * Math.PI) / 180) * 100; // Calculate X position
          const y = Math.sin((angle * Math.PI) / 180) * 100; // Calculate Y position
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: "50%", top: "50%", x: `${x}%`, y: `${y}%` }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-white">
                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              </div>
              {/* Connecting Line */}
              <motion.div
                className="absolute"
                style={{
                  width: "100px",
                  height: "2px",
                  backgroundColor: "white",
                  top: "50%",
                  left: "50%",
                  transformOrigin: "left",
                  rotate: angle,
                }}
                animate={{
                  scaleX: [0, 1],
                  transition: {
                    duration: 1,
                    delay: index * 0.1,
                  },
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialBeam;
