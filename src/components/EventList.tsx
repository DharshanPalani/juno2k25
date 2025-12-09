import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { EventType } from "../common/types/eventTypes";

type EventListProps = {
  events: EventType[];
  day: number;
  onBackClick: () => void;
};

const EventList: React.FC<EventListProps> = ({ events, day, onBackClick }) => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h2 className="text-3xl text-yellow-500 text-center mb-10">
        Day {day} Events
      </h2>

      <div className="grid gap-10 justify-center sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-black bg-opacity-70 border border-yellow-500 rounded-xl cursor-pointer p-4 h-72 w-80 shadow-xl"
            whileHover={{ scale: 1.07 }}
            onClick={() => navigate(`/event/${event.id}`)}
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full bg-black bg-opacity-70 rounded-xl mt-40 p-2">
              <h3 className="text-white text-center font-semibold">
                {event.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          className="bg-yellow-500 px-8 py-3 rounded-lg text-black"
          onClick={onBackClick}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default EventList;
