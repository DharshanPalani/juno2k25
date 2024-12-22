import React, { useEffect, useRef } from "react";

function HeroSection() {
  const roleRefs = useRef([]);

  useEffect(() => {
    const handleScrollAnimation = () => {
      roleRefs.current.forEach((element) => {
        if (element) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                element.classList.add("animate-fade-in-up");
              }
            },
            { threshold: 0.5 }
          );
          observer.observe(element);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  const members = [
    { name: "Member 1", id: 0 },
    { name: "Member 2", id: 1 },
    { name: "Member 3", id: 2 },
    { name: "Member 4", id: 3 },
    { name: "Member 5", id: 4 },
    { name: "Member 6", id: 5 },
    { name: "Member 7", id: 6 },
    { name: "Member 8", id: 7 }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-8">
      <div className="bg-gray-700 w-full mb-[100px] h-[400px] flex items-center justify-center text-gray-400">Banner Image</div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:hidden flex flex-col items-center w-full">
          <div className="text-[100px] font-extrabold tracking-wider bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">00:00:00:00</div>
          <div className="mt-8 mb-12 flex flex-col items-center space-y-4">
            <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-16 py-6 rounded-lg text-lg font-bold hover:scale-105 hover:shadow-lg transition-all">Register Now</button>
          </div>
        </div>

        <div className="bg-gray-700 w-full md:w-[475px] h-[300px] flex items-center justify-center text-gray-400">Place to show chairman, vice chairman, and secretary image</div>

        <div className="hidden md:flex flex-col items-center">
          <div className="text-[100px] font-extrabold tracking-wider bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">00:00:00:00</div>
          <div className="mt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-16 py-6 rounded-lg text-lg font-bold hover:scale-105 hover:shadow-lg transition-all">Register Now</button>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center items-center gap-[190px]">
        {members.map((member, index) => (
          <div
            key={member.id}
            ref={(el) => (roleRefs.current[member.id] = el)}
            className="flex flex-col items-center opacity-0"
          >
            <div className="bg-gray-700 w-[300px] h-[300px] flex items-center justify-center text-gray-400">Role Image</div>
            <p className="mt-4 text-lg font-bold text-black">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
