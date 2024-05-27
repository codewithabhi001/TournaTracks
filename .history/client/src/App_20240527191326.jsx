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
            <motion.div
              key={index}
              className="absolute flex items-center justify-center rounded-full w-12 h-12"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                backgroundColor: item.color,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={item.icon} className="text-white" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialBeam;
