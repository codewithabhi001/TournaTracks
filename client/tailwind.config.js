const { nextui } = require("@nextui-org/react");
const tailwindcss = require("tailwindcss");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "neon-button":
          "0 0 5px rgba(40, 38, 38, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5)",
        "neon-button-hover":
          "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.7)",
        "shadow-lg":
          "0 0 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 0, 0, 0.7)",
        glassmorphism: "0 8px 32px 0 rgba(31, 38, 135, 2.0)",
        "glass-button": "0 4px 8px 0 rgba(31, 38, 135, 2.0)",
        "glass-button-hover": "0 8px 16px 0 rgba(31, 38, 135, 2.0)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(18px)",
        "blur-sm": "blur(10px)",
        "blur-button": "blur(4px)",
      },
      borderRadius: {
        lg: "10px",
      },
      fontFamily: {
        gaming: ["Staatliches", "sans-serif"],
      },
      colors: {
        "glass-bg": "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.18)",
        "glass-container-bg": "rgba(255, 255, 255, 0.6)",
        "glass-button-bg": "rgba(255, 255, 255, 1)",
        "glass-button-hover-bg": "rgba(255, 255, 255, 0.35)",
      },
    },
  },
  darkMode: "class",
  plugins: [tailwindcss, nextui()],
};
