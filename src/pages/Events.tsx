import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import EventList from "../components/EventList";
import { getEventByDays } from "../common/utils/eventUtils";
import { EventType } from "../common/types/eventTypes";

function Events() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const rawDay = params.get("day");
  const parsedDay = rawDay ? Number(rawDay) : null;
  const day = parsedDay === 1 || parsedDay === 2 ? parsedDay : null;

  const selectDay = (day: number) => {
    navigate(`/events?day=${day}`);
  };

  if (!day) {
    return (
      <div className="flex gap-6 justify-center mt-20">
        <motion.button
          className="bg-black bg-opacity-70 border border-yellow-500 px-12 py-6 text-yellow-500 rounded-xl"
          whileHover={{ scale: 1.05 }}
          onClick={() => selectDay(1)}
        >
          Day 1
        </motion.button>

        <motion.button
          className="bg-black bg-opacity-70 border border-yellow-500 px-12 py-6 text-yellow-500 rounded-xl"
          whileHover={{ scale: 1.05 }}
          onClick={() => selectDay(2)}
        >
          Day 2
        </motion.button>
      </div>
    );
  }

  const events: EventType[] = getEventByDays(day);

  return (
    <EventList
      day={day}
      events={events}
      onBackClick={() => navigate("/events")}
    />
  );
}

export default Events;
