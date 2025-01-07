import React, { useEffect, useRef, useState } from "react";
import CardFlip from "react-card-flip";

function TeamList() {
  const roleRefs = useRef([]);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const timer = setTimeout(() => {
      const handleScrollAnimation = () => {
        roleRefs.current.forEach((element, index) => {
          if (element) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  element.classList.add("animate-fade-in-up");
                  setFlipped((prev) => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                  });
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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const teamGroups = {
    MEMBERS: [
      { name: "Member 1", id: 0 },
      { name: "Member 2", id: 1 },
      { name: "Member 3", id: 2 },
      { name: "Member 4", id: 3 },
      { name: "Member 5", id: 4 },
      { name: "Member 6", id: 5 }
    ],
    DEANS: [
      { name: "Dean 1", id: 6 },
      { name: "Dean 2", id: 7 }
    ],
    HEADS: [
      { name: "Head 1", id: 8 },
      { name: "Head 2", id: 9 }
    ],
    STAFF: [
      { name: "Staff 1", id: 10 },
      { name: "Staff 2", id: 11 },
      { name: "Staff 3", id: 12 },
      { name: "Staff 4", id: 13 },
      { name: "Staff 5", id: 14 }
    ]
  };

  return (
    <div>
      <div className="mt-16 flex flex-wrap justify-center items-center gap-[50px]">
        {Object.entries(teamGroups).map(([group, members]) => (
          <div key={group}>
            <h2 className="text-2xl font-bold text-center mb-8">{group}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {members.map((member, index) => (
                <div
                  key={member.id}
                  ref={(el) => (roleRefs.current[member.id] = el)}
                  className="flex flex-col items-center space-y-4 opacity-0"
                >
                  <CardFlip
                    isFlipped={flipped[member.id] || false}
                    flipDirection="horizontal"
                  >
                    {/* Front Side */}
                    <div className="bg-gray-700 w-[300px] h-[300px] flex items-center justify-center text-gray-400">
                      {/* Role Image */}
                    </div>

                    {/* Back Side */}
                    <div className="bg-gray-700 w-[300px] h-[300px] flex items-center justify-center text-gray-400">
                      <p className="text-lg font-bold text-white">Picture</p>
                    </div>
                  </CardFlip>
                  {/* Name (Not Flipped) */}
                  <p className="text-lg font-bold text-white">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamList;
