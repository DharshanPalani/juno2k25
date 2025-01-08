import React, { useEffect } from "react";

function EventList({ category, onBackClick }) {
  const techEvents = [
    "Tech Event 1",
    "Tech Event 2",
    "Tech Event 3",
    "Tech Event 4",
    "Tech Event 5"
  ];

  const nonTechEvents = [
    "Non-Tech 1",
    "Non-Tech 2",
    "Non-Tech 3",
    "Non-Tech 4",
    "Non-Tech 5"
  ];

  const events = category === "tech" ? techEvents : nonTechEvents;
  const categoryTitle = category ? `${category} Events` : "Events";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 p-8 pt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Event List</h1>

        {/* Event List for Desktop (Horizontal Stack) */}
        <div className="hidden md:block w-full p-4 space-x-4 flex overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-white">{categoryTitle}</h2>
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white rounded-md p-4 text-sm w-32 flex-shrink-0 mb-4"
            >
              {event}
            </div>
          ))}
        </div>

        {/* Event List for Mobile (Vertical Stack)*/}
        <div className="md:hidden flex flex-col mt-8">
          <h2 className="text-xl font-bold mb-6">{categoryTitle}</h2>
          <div className="flex overflow-x-auto space-x-4 py-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white rounded-md p-4 text-sm w-32 flex-shrink-0 mb-4"
              >
                {event}
              </div>
            ))}
          </div>
        </div>

        {/* Back Button at Bottom Right */}
        <div className="absolute bottom-8 right-8">
          <button
            onClick={onBackClick}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventList;
