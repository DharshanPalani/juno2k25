import { useEffect, useRef, useState } from "react";
import CardFlip from "react-card-flip";
import { teamGroups } from "../data/teamData";

// import jana from "../images/id/TEAM_HEADS/22_JANA.jpg"

function TeamList() {
  const roleRefs = useRef([]);
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Create a single observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        setFlipped((prev) => {
          const updated = { ...prev };
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updated[entry.target.dataset.id] = true;
              entry.target.classList.add("animate-fade-in-up");
            }
          });
          return updated;
        });
      },
      { threshold: 0.5 }
    );

    // Observe all elements
    roleRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-[50px]">
        {Object.entries(teamGroups).map(([group, members]) => (
          <div key={group}>
            <h2 className="bull-stand text-3xl font-bold text-center mt-16 mb-16">
              {group}
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-[170px]">
              {members.map((member) => (
                <div
                  key={member.id}
                  ref={(el) => (roleRefs.current[member.id] = el)}
                  data-id={member.id}
                  className="flex flex-col items-center opacity-0"
                >
                  <CardFlip isFlipped={flipped[member.id] || false} flipDirection="horizontal">
                    {/* Front Side */}
                    <div className="bg-gray-700 w-[300px] h-[300px] flex items-center justify-center text-gray-400">
                      {/* Role Image */}
                    </div>

                    {/* Back Side */}
                    <div className="bg-gray-700 w-[300px] h-[300px] flex items-center justify-center text-gray-400">
                      <img className="" src={member.image} alt={member.name} />
                    </div>
                  </CardFlip>
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
