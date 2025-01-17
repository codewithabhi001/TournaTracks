import React, { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import { motion } from "framer-motion";
import download from "downloadjs"; // Importing downloadjs library for downloading the image
import "./App.css";

function App() {
  const [slots, setSlots] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [selectedSlotId, setSelectedSlotId] = useState("");

  useEffect(() => {
    async function fetchSlots() {
      try {
        let url = "https://tournatracks.onrender.com/api/auth/GetSlots";
        if (selectedSlotId) {
          url += `/${selectedSlotId}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setSlots(data);
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    }

    fetchSlots();
  }, [selectedSlotId]);

  const handleBackgroundImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    const element = document.getElementById("main-container");

    try {
      const dataUrl = await toPng(element, {
        quality: 1,
        cacheBust: true,
        pixelRatio: 2,
        style: {
          backgroundImage: `url(${backgroundImage}), linear-gradient(to bottom, #00000, #000000)`,
          backgroundSize: "cover",
          transform: "scale(1)",
          transformOrigin: "top left",
        },
        filter: (node) => node.className !== "exclude-from-capture",
      });

      // Using downloadjs to initiate the download of the generated image
      download(dataUrl, "slotList.png");
    } catch (error) {
      console.error("Error generating the image:", error);
    }
  };

  const handleSlotSelect = (event) => {
    setSelectedSlotId(event.target.value);
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center py-10">
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="mr-2 mb-2 md:mb-0">
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageChange}
            className="hidden"
            id="background-image-input"
          />
          <label
            htmlFor="background-image-input"
            className="cursor-pointer bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 hover:from-blue-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded block md:inline-block neon-button"
          >
            Upload Background Image
          </label>
        </div>
        <button
          className="bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 hover:from-blue-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded mr-2 md:mr-4 neon-button"
          onClick={handleDownload}
        >
          Download
        </button>
        <select
          className="!bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 hover:from-blue-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded neon-button bg-zinc-900"
          onChange={handleSlotSelect}
          value={selectedSlotId}
        >
          <option value="">Select Slot</option>
          {slots.map((slot) => (
            <option key={slot._id} value={slot._id}>
              {slot.organizationName}
            </option>
          ))}
        </select>
      </div>

      <motion.main
        id="main-container"
        className="w-full max-w-xl p-4 md:p-6 rounded-lg shadow-lg border-1 border-[#c1a7d4] glassmorphism"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage}) no-repeat center center / cover`
            : "linear-gradient(350deg, #00051a, #2e003e, #a2004b, #50008a, #8e0051, #2e003e, #2e003e, #00051a)",
          backgroundSize: "cover",
          backgroundColor: "#0000",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {slots.length > 0 && selectedSlotId && (
          <div className="text-center mb-4 md:mb-8">
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold text-purple-300 tracking-wider gaming-font"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {
                slots.find((slot) => slot._id === selectedSlotId)
                  .organizationName
              }
            </motion.h1>
            <motion.p
              className="md:text-lg text-white font-bold gaming-font"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slots.find((slot) => slot._id === selectedSlotId).matchTitle}
            </motion.p>
            <motion.p
              className="md:text-lg font-bold text-white text-left gaming-font"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {slots.find((slot) => slot._id === selectedSlotId).matchDate}
            </motion.p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          <div className="col-span-1 w-full">
            <motion.h2
              className="text-lg md:text-2xl font-semibold text-center p-2 mb-2 md:mb-4 bg-[#00000055] gaming-font glassmorphism"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Slot Team Name
            </motion.h2>
            {Array.from({ length: 12 }).map((_, index) => {
              const team = slots.find((slot) => slot._id === selectedSlotId)
                ?.teams[index];
              return (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-2 md:p-4 mb-2 h-12 md:h-
                  12 rounded-lg border border-[#FFF] w-full bg-[#00000055] gaming-font glassmorphism"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-center">
                    <div className="text-sm md:text-lg font-bold mr-2 md:mr-4">
                      # {index + 1}
                    </div>
                    <div className="text-sm md:text-lg">
                      {team || "Empty Slot"}
                    </div>
                  </div>
                  {team ? (
                    <div className="text-green-500 text-lg md:text-2xl">✔</div>
                  ) : (
                    <div className="text-red-500 text-base md:text-xl">🛇</div>
                  )}
                </motion.div>
              );
            })}
          </div>
          <div className="col-span-1 w-full">
            <motion.h2
              className="text-lg md:text-2xl font-semibold text-center p-2 mb-2 md:mb-4 bg-[#00000055] gaming-font glassmorphism"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Slot Team Name
            </motion.h2>
            {Array.from({ length: 12 }).map((_, index) => {
              const team = slots.find((slot) => slot._id === selectedSlotId)
                ?.teams[index + 12];
              return (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-2 md:p-4 mb-2 h-12 md:h-12 rounded-lg border border-[#FFF] w-full bg-[#00000055] gaming-font glassmorphism"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-center">
                    <div className="text-sm md:text-lg font-bold mr-2 md:mr-4">
                      # {index + 13}
                    </div>
                    <div className="text-sm md:text-lg">
                      {team || "Empty Slot"}
                    </div>
                  </div>
                  {team ? (
                    <div className="text-green-500 text-lg md:text-2xl">✔</div>
                  ) : (
                    <div className="text-red-500 text-base md:text-xl">🛇</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.main>
    </div>
  );
}

export default App;
