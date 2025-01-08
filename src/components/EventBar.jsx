import React from "react";
import { motion } from "framer-motion";

function EventBar({ onCategorySelect }) {

  const handleTechEventsClick = () => {
    onCategorySelect('tech');
  };

  const handleNonTechEventsClick = () => {
    onCategorySelect('non-tech');
  };

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-md md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0 mt-12">
      <div className="text-center mt-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Event Categories</h2>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <motion.button
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-xl font-bold w-[400px] h-[250px]"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleTechEventsClick}
        >
          Tech Events
        </motion.button>
        <motion.button
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-xl font-bold w-[400px] h-[250px]"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleNonTechEventsClick}
        >
          Non-Tech Events
        </motion.button>
      </div>
    </div>
  );
}

export default EventBar;
