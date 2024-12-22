import React from "react";

function EventBar() {
  return (
    <div className="px-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0 mt-[150px]">
    <div className="text-center mt-8">
        <h2 className="text-4xl font-bold text-white">Event</h2>
      </div>
      <div className="mt-[150px] flex justify-center space-x-8">
        <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-16 py-6 rounded-lg text-lg font-bold w-48">
          Tech events
        </button>
        <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-16 py-6 rounded-lg text-lg font-bold w-48">
          Non-Tech events
        </button>
      </div>
    </div>
  );
}

export default EventBar;