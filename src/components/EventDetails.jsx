import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { day_1, day_2 } from "../data/eventData.js";


function EventDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const allEvents = [...day_1, ...day_2];
    const event = allEvents.find((event) => event.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!event) {
        return <div className="text-center text-xl text-red-500">Event not found</div>;
    }

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleRegisterClick = () => {
        alert("Redirecting to the registration page...");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <motion.div
                className="flex-1 p-4 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center sm:text-left">
                    {event.name}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Image Section */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <motion.div
                            className="w-full h-64 sm:h-96 bg-cover bg-center rounded-lg shadow-lg border-4 border-yellow-500"
                            style={{ backgroundImage: `url(${event.image})` }}
                            transition={{ duration: 0.3 }}
                        />
                        {/* Event Information */}
                        <motion.div
                            className="bg-black bg-opacity-70 shadow rounded-lg border border-yellow-500 p-6 text-gray-100"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-4">
                                Event Information
                            </h3>
                            <table className="w-full text-gray-300">
                                <tbody>
                                    <tr>
                                        <td className="py-2 font-semibold">Venue:</td>
                                        <td className="py-2">{event.venue}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Date:</td>
                                        <td className="py-2">{event.date}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Contact:</td>
                                        <td className="py-2">{event.contact}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Additional Info:</td>
                                        <td className="py-2">{event.additionalInfo}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>
                    </motion.div>

                    {/* General Rules Section */}
                    <motion.div
                        className="bg-black bg-opacity-70 shadow rounded-lg border border-yellow-500 p-6 text-gray-100"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-4">
                            General Rules
                        </h2>
                        {/* <p className="text-gray-300">{event.rules}</p> */}
                        <ol>
                            <li>{event.rules}</li>
                        </ol>
                    </motion.div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-center sm:justify-start gap-4">
                    {/* Back Button */}
                    <motion.button
                        onClick={handleBackClick}
                        className="bg-yellow-500 text-black px-6 py-3 rounded-lg"
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgb(255, 204, 0)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        Back to Events
                    </motion.button>

                    {/* Register Button */}
                    <motion.button
                        onClick={handleRegisterClick}
                        className="bg-green-500 text-black px-6 py-3 rounded-lg"
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgb(34, 197, 94)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        Register Now
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}

export default EventDetails;
