import React from "react";

function EventBar() {
  return (
    <div className="px-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0 mt-[150px]">
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold text-white">Event</h2>
      </div>
      <div className="mt-[150px] flex justify-center space-x-8">
        <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-20 py-8 rounded-lg text-xl font-bold w-56 hover:scale-105 transition-transform">
          Tech events
        </button>
        <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-20 py-8 rounded-lg text-xl font-bold w-56 hover:scale-105 transition-transform">
          Non-Tech events
        </button>
      </div>
    </div>
  );
}

export default EventBar;
