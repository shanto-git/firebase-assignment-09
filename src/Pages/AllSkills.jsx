import React, { useEffect, useState } from "react";

const AllSkills = () => {
  const [skill, setSkill] = useState([]);
  

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkill(data))
      .catch((err) => console.error("data:", err));
  }, []);

  return (
    <div>
      <div className=" bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-950 border-b-2 border-gray-300">
          Our All Course
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-7">
          {skill.map((skill) => {
            const { skillId, skillName, rating, price, image } = skill;
            return (
              <div
                key={skillId}
                className="bg-white shadow-md rounded-2xl transition-transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={image}
                  alt={skillName}
                  className="w-full h-48 object-cover p-2 rounded-t-2xl"
                />
                <div className="p-4 flex flex-col justify-between">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {skillName}
                  </h2>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>⭐{rating}</span>
                    <span className="font-bold">${price}</span>
                  </div>
                  <button className="btn btn-secondary rounded-3xl">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
