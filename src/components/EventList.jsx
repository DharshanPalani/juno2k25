import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { techEvents, nonTechEvents } from "../data/eventData.js";

function EventList({ category, onBackClick }) {
  const navigate = useNavigate();
  const events = category === "tech" ? techEvents : nonTechEvents;
  const categoryTitle = category ? `${category} Events` : "Events";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center sm:text-left">{categoryTitle}</h1>

        {/* Event Cards with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-black bg-opacity-70 shadow rounded-lg border border-yellow-500 cursor-pointer overflow-hidden"
              onClick={() => handleEventClick(event.id)}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: event.id * 0.05 }}
            >
              <div className="h-40 bg-gray-800 flex items-center justify-center">
                <span className="text-yellow-500">Image Placeholder</span>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2 text-center sm:text-left">{event.name}</h2>
                <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">Click to view details about {event.name}.</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8 flex justify-center sm:justify-start">
          <motion.button
            onClick={onBackClick}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Back to Categories
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default EventList;
