import React from "react";

function EventBar() {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-md md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0 mt-12">
      <div className="text-center mt-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Event</h2>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-xl font-bold w-full md:w-56 hover:scale-105 transition-transform">
          Tech events
        </button>
        <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-xl font-bold w-full md:w-56 hover:scale-105 transition-transform">
          Non-Tech events
        </button>
      </div>
    </div>
  );
}

export default EventBar;
