import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { techEvents, nonTechEvents } from "../data/eventData.js";

function EventList({ category, onBackClick }) {
  const navigate = useNavigate();
  const events = category === "tech" ? techEvents : nonTechEvents;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventsByDay = events.reduce((acc, event) => {
    acc[event.day] = acc[event.day] || [];
    acc[event.day].push(event);
    return acc;
  }, {});

  return (
    <div className="p-8 min-h-screen flex flex-col">
      <motion.h1
        className="text-4xl font-bold text-center text-yellow-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {category} Events
      </motion.h1>

      {Object.keys(eventsByDay).map((day) => (
        <motion.div
          key={day}
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: day * 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-yellow-500 text-center mb-6">
            Day {day}
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {eventsByDay[day].map((event) => (
              <motion.div
                key={event.id}
                className="bg-black bg-opacity-70 shadow-lg rounded-xl border border-yellow-500 p-6 w-96 h-80 flex flex-col cursor-pointer"
                onClick={() => navigate(`/event/${event.id}`)}
                whileHover={{ scale: 1.07, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: event.id * 0.05 }}
              >
                <div className="h-60 flex items-center justify-center rounded-md w-full">
                  <img className="text-yellow-500 text-lg" src="http://velocityacademy.org/wp-content/uploads/2016/03/placeholder.jpg"/>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <h2 className="text-xl font-bold text-yellow-400 text-center">{event.name}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <div className="mt-10 flex justify-center">
        <motion.button
          onClick={onBackClick}
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Back
        </motion.button>
      </div>
    </div>
  );
}

export default EventList;
