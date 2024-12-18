import React from "react";

function EventBar() {
  return (
    <div className="px-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0 mt-[150px]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">Event Highlights</h2>
      </div>
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 gap-8">
        <div className="text-center md:border-r">
          <h6 className="text-[100px] font-bold text-white lg:text-5xl xl:text-6xl">2</h6>
          <p className="text-sm font-medium tracking-widest bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text uppercase lg:text-base">Days</p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-[100px] font-bold text-white lg:text-5xl xl:text-6xl">14</h6>
          <p className="text-sm font-medium tracking-widest bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text uppercase lg:text-base">Events</p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-[100px] font-bold text-white lg:text-5xl xl:text-6xl">1 Lakh+</h6>
          <p className="text-sm font-medium tracking-widest bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text uppercase lg:text-base">Prizes</p>
        </div>
        <div className="text-center">
          <h6 className="text-[100px] font-bold text-white lg:text-5xl xl:text-6xl">20+</h6>
          <p className="text-sm font-medium tracking-widest bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text uppercase lg:text-base">Stalls</p>
        </div>
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
