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
    <div className="bg-base-300 p-6 rounded-3xl">
      <div className="">
        <div className="text-center">
            <h1 className="mb-8 pb-2 text-3xl font-bold border-b-4 inline-block border-gray-400">Top Rated Providers</h1>
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
            <div className="bg-white mb-5 rounded-2xl" key={skillId}>
              <div className="p-6 flex gap-5 lg:flex-row">
                <img src={image} className="w-sm rounded-2xl shadow-2xl" />
                <div className="">
                  <h1 className="text-5xl font-bold mb-5">{skillName}</h1>
                  <div className="flex gap-8 mb-5 text-gray-600">
                    <p className="flex items-center font-bold">Rating: 
                      <FaStar className="text-yellow-500" /> {rating}
                    </p>
                    <p className="font-bold">Price: ${price}</p>
                  </div>
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-700">Provider: {providerName}</p>
                    <p className="text-sm font-semibold text-gray-700">Email: {providerEmail}</p>
                  </div>
                  <Link to={`/skillType/${skillId}`} className="btn btn-secondary">View Details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
