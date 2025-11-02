import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort descending by rating
        const sortedSkills = data.sort((a, b) => b.rating - a.rating);
        setSkills(sortedSkills);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const displaySkills =skills.slice(0, 3);

  return (
    <div className=" bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-950 border-b-2">
        Popular Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-7">
        {displaySkills.map((skill) => {
            const {skillId, skillName, rating, price, image}=skill;
            return  (
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
              <button to="/allSkill" className="btn btn-secondary rounded-3xl">
                View Details
              </button>
            </div>
          </div>
        )
        })}
      </div>
        <div className="flex justify-center mt-8">
          <button onClick={()=>navigate("/allSkill")}
            className="btn btn-secondary">
            View All
          </button>
        </div>
    </div>
  );
};

export default Card;
