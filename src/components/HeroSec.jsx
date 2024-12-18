import React from "react";

function HeroSection() {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-8">
      <div className="flex items-center justify-between">
        <img src="src/images/juno-logo.png" alt="Hero Background" className="w-[500px]" />

        <div className="flex flex-col">
          <div className="text-[100px] font-extrabold tracking-wider bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            00:00:00:00
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-16 py-6 rounded-lg text-lg font-bold">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
