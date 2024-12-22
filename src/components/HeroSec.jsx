import React, { useEffect, useRef } from "react";

function HeroSection() {
  const roleRefs = useRef([]);

  useEffect(() => {
    const handleScrollAnimation = () => {
      roleRefs.current.forEach((element, index) => {
        if (element) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                element.classList.add("animate-fade-in-up");
              }
            },
            {
              threshold: 0.5, // Adjust the threshold as needed
            }
          );
          observer.observe(element);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-8">
      {/* Banner Section */}
      <div className="bg-gray-700 w-full mb-[100px] h-[400px] flex items-center justify-center text-gray-400">
        Banner Image
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Placeholder Image */}
        <div className="bg-gray-700 w-[475px] h-[300px] flex items-center justify-center text-gray-400">
          Placeholder Image
        </div>

        {/* Countdown & Button */}
        <div className="flex flex-col items-center md:items-center">
          <div className="text-[100px] font-extrabold tracking-wider bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            00:00:00:00
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-16 py-6 rounded-lg text-lg font-bold hover:scale-105 hover:shadow-lg transition-all">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Roles Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[175px]">
        {/* First Row */}
        {["Secretary", "Manager", "Developer"].map((role, index) => (
          <div
            key={role}
            ref={(el) => (roleRefs.current[index] = el)}
            className="flex flex-col items-center opacity-0"
          >
            <div className="bg-gray-700 w-[300px] h-[300px] flex items-center justify-center text-gray-400">
              Role Image
            </div>
            <p className="mt-4 text-lg font-bold text-black">{role}</p>
          </div>
        ))}

        {/* Second Row */}
        {["Designer", "Tester", "HR"].map((role, index) => (
          <div
            key={role}
            ref={(el) => (roleRefs.current[index + 3] = el)}
            className="flex flex-col items-center opacity-0"
          >
            <div className="bg-gray-700 w-[300px] h-[300px] flex items-center justify-center text-gray-400">
              Role Image
            </div>
            <p className="mt-4 text-lg font-bold text-black">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
