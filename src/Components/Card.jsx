import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Card = () => {
  const [skills, setSkills] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.slotsAvailable - b.slotsAvailable);
        setSkills(sorted.slice(0, 3));
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const positions = [
    { scale: 1, zIndex: 3, x: 0, opacity: 1 },
    { scale: 0.5, zIndex: 2, x: 200, opacity: 0.1 },
    { scale: 0.5, zIndex: 1, x: -200, opacity: 0.1 },
  ];

  const getPosition = (i) => {
    const posIndex = (i - index + 3) % 3;
    return positions[posIndex];
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-950 mb-8 border-b-2 pb-2">
        Popular Skills
      </h1>

      <div className="relative w-full flex justify-center h-96 overflow-hidden">
        {skills.map((skill, i) => {
          const {skillId, skillName, rating, price, image } = skill;
          const { scale, zIndex, x, opacity } = getPosition(i);

          return (
            <motion.div
              key={i}
              animate={{ scale, x, opacity }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              style={{ zIndex }}
              className="absolute w-92 bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={image}
                alt={skillName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">
                  {skillName}
                </h2>
                <div className="flex items-center justify-between gap-2 mb-2 text-gray-600">
                  <p className="flex items-center font-bold">
                  <FaStar className="text-yellow-500" /> {rating}
                  </p>
                <p className="text-blue-600 font-bold">${price}</p>
                </div>
                <Link to={`/skillType/${skillId}`} className="mt-3 btn btn-secondary rounded-3xl w-full">
                  View Details
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
          <button onClick={()=>navigate("/skillType")}
            className="btn btn-secondary">
            View All
          </button>
        </div>
    </div>
  );
};

export default Card;
