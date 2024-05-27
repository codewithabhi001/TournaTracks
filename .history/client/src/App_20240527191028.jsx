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

const radius = 150;
const angleStep = (2 * Math.PI) / icons.length;

const SocialBeam = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative">
        {icons.map((item, index) => {
          const angle = index * angleStep;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <div key={index} className="absolute">
              {/* Dashed Line */}
              <motion.div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: radius * 2,
                  height: radius * 2,
                  borderRadius: "50%",
                  border: "1px dashed white",
                  transformOrigin: "0% 0%",
                  rotate: angle * (180 / Math.PI) - 90, // Convert radians to degrees and adjust for starting position
                }}
              />
              {/* Icon */}
              <motion.div
                className="flex items-center justify-center rounded-full w-12 h-12"
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  backgroundColor: item.color,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: 360 }} // Rotate animation
                transition={{ duration: 2, loop: Infinity, ease: "linear" }} // Continuous rotation
              >
                <FontAwesomeIcon icon={item.icon} className="text-white" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialBeam;
