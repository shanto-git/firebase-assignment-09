import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const AllSkills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    setError(null);

    fetch("/skills.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const sorted = Array.isArray(data) ? data : [];
        setSkills(sorted);
        controls.start("show");
        console.log("loaded skills:", sorted);
      })
      .catch((err) => {
        console.error("fetch error:", err);
        setError(err.message || "Failed to load data");
      });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.25,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gray-50 rounded-3xl min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-950 border-b-2 border-gray-300 pb-2">
       All Skills
      </h1>

      {skills.length === 0 && !error && (
        <p className="flex justify-center"><span className="loading loading-dots loading-xl text-6xl"></span></p>
      )}

      {skills.length > 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-7"
        >
          {skills.map(({ skillId, skillName, rating, price, image }) => (
            <motion.div
              key={skillId}
              variants={card}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-md rounded-2xl transition-transform hover:shadow-lg overflow-hidden"
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
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {rating}
                  </span>
                  <span className="font-bold text-blue-600">${price}</span>
                </div>
                <button className="btn btn-secondary rounded-3xl">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AllSkills;
