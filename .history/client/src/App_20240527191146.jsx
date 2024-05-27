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
        {/* Container for all icons and connecting lines */}
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: radius * 2,
            height: radius * 2,
            borderRadius: "50%",
            border: "1px dashed white",
          }}
          animate={{ rotate: 360 }} // Rotate animation
          transition={{ duration: 10, loop: Infinity, ease: "linear" }} // Continuous rotation
        >
          {/* Icons and connecting lines */}
          {icons.map((item, index) => {
            const angle = index * angleStep;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Individual Icon */}
                <FontAwesomeIcon icon={item.icon} className="text-white" />
                {/* Connecting Line */}
                <motion.div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    border: "1px dashed white",
                    borderRadius: "50%",
                    transformOrigin: "0% 0%",
                    rotate: angle * (180 / Math.PI) - 90, // Convert radians to degrees and adjust for starting position
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialBeam;
