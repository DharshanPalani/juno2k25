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
      { role: "Role 1", name: "Member 1", id: 0 },
      { role: "Role 2", name: "Member 2", id: 1 },
      { role: "Role 3", name: "Member 3", id: 2 },
      { role: "Role 4", name: "Member 4", id: 3 },
      { role: "Role 5", name: "Member 5", id: 4 },
      { role: "Role 6", name: "Member 6", id: 5 },
      { role: "Role 7", name: "Member 7", id: 6 }
    ]
  };

  return (
    <div>
      <div className="mt-16 flex flex-wrap justify-center items-center gap-[50px]">
        {Object.entries(teamGroups).map(([group, members]) => (
          <div key={group}>
            <h2 className="text-2xl font-bold text-center mb-8">{group}</h2>
            <div className="flex flex-wrap justify-center items-center gap-[190px]">
              {members.map((member, index) => (
                <div
                  key={member.id}
                  ref={(el) => (roleRefs.current[member.id] = el)}
                  className="flex flex-col items-center opacity-0"
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
                  <p className="text-3xl font-bold text-white">{member.name}</p>
                  <p className="text-lg font-bold text-white">{member.role}</p>
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
