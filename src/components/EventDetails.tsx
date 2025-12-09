import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getEventByID } from "../common/utils/eventUtils";
import { EventType } from "../common/types/eventTypes";

function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const event: EventType | undefined = id
    ? getEventByID(Number(id))
    : undefined;

  if (!event) {
    return (
      <div className="text-center text-xl text-red-500 mt-20">
        Event not found
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10">
      <motion.h1
        className="text-4xl font-bold text-yellow-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {event.name}
      </motion.h1>

      <div className="grid sm:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src={event.image}
            className="rounded-xl border-4 border-yellow-500 shadow-lg"
          />

          <div className="bg-black bg-opacity-70 mt-6 p-6 rounded-lg border border-yellow-500">
            <table className="text-gray-200 w-full">
              <tbody>
                <tr>
                  <td className="font-semibold">Venue:</td>
                  <td>{event.venue}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Date:</td>
                  <td>{event.date}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Contact:</td>
                  <td>{event.contact}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="bg-black bg-opacity-70 p-6 rounded-lg border border-yellow-500"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* FOR NOW IMG BUT LATER SHOULD CONSIDER TEXT WITH MD FILE OR WHATEVER */}
          <img src={event.rule} alt="Rules" className="rounded-lg" />
        </motion.div>
      </div>

      <div className="mt-10 flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg"
        >
          Back
        </button>

        <a
          href={event.form}
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-black px-6 py-3 rounded-lg"
        >
          Register
        </a>
      </div>
    </div>
  );
}

export default EventDetails;
