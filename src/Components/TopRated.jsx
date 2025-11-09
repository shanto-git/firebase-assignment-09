import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.rating - a.rating);
        setSkills(sorted.slice(0, 4));
      });
  }, []);
  return (
    <div className="bg-base-300 p-4 sm:p-6 md:p-8 rounded-3xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold pb-2 border-b-4 border-gray-400 inline-block">
          Top Rated Providers
        </h1>
      </div>

      {skills.map((skill) => {
        const {
          skillId,
          skillName,
          providerName,
          providerEmail,
          price,
          rating,
          image,
        } = skill;

        return (
          <div
            className="bg-white mb-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            key={skillId}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
              <img
                src={image}
                alt={skillName}
                className="w-full sm:w-1/3 h-48 sm:h-auto object-cover rounded-2xl shadow-2xl"
              />
              <div className="flex-1 flex flex-col justify-between">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-5 break-words">
                  {skillName}
                </h1>

                <div className="flex flex-col sm:flex-row sm:gap-8 mb-3 text-gray-600 text-sm sm:text-base">
                  <p className="flex items-center gap-1 font-semibold">
                    Rating: <FaStar className="text-yellow-500" /> {rating}
                  </p>
                  <p className="font-semibold">Price: ${price}</p>
                </div>

                <div className="mb-3 text-gray-700 text-sm sm:text-base">
                  <p className="font-semibold">Provider: {providerName}</p>
                  <p className="font-semibold">Email: {providerEmail}</p>
                </div>

                <Link
                  to={`/skillType/${skillId}`}
                  className="btn btn-secondary mt-2 sm:mt-auto self-start"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopRated;
