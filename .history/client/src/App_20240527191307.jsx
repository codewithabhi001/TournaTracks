import React from "react";
import { motion } from "framer-motion";

const items = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: `Item ${index + 1}`,
}));

const BentroGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Bentro Grid</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentroGrid;
