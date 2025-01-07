import React from "react";
import Logo from "../images/juno2k25_logo.png"

function HeroSection() {
  return (
    <div className="p-8 text-white mt-8">

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Mobile view */}
        {/* <div className="md:hidden flex flex-col items-center w-full">
          <div className="text-[60px] font-extrabold tracking-wider bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            00:00:00:00
          </div>
          <div className="mt-8 mb-12 flex flex-col items-center space-y-4">
            <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-bold w-full md:w-auto hover:scale-105 hover:shadow-lg transition-all">
              Register Now
            </button>
          </div>
        </div> */}

        {/* Logo section */}
        <img className="w-full md:w-[500px] h-[500px] flex items-center justify-center text-gray-400" src={Logo}>
        </img>

        {/* Desktop view */}
        <div className="hidden md:flex flex-col items-center">
          <div className="text-[100px] font-extrabold tracking-wider bg-gradient-to-b from-goldish1 to-goldish2 bg-clip-text text-transparent">
            00:00:00:00
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-bold w-full md:w-auto hover:scale-105 hover:shadow-lg transition-all">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
