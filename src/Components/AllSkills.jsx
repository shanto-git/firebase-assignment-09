import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const AllSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    setError(null);
    setLoading(true);

    fetch("/skills.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setSkills(Array.isArray(data) ? data : []);
        setLoading(false);
        controls.start("show");
      })
      .catch((err) => {
        console.error("fetch error:", err);
        setError(err.message || "Failed to load data");
        setLoading(false);
      });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-base-300 p-4 sm:p-6 md:p-8 text-center rounded-3xl min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-950 border-b-4 inline-block border-gray-400 pb-2">
        All Skills
      </h1>
      {loading && (
        <p className="flex justify-center my-8">
          <span className="loading loading-dots loading-xl text-4xl sm:text-6xl"></span>
        </p>
      )}

      {error && <p className="text-red-500 font-semibold mt-4">{error}</p>}

      {!loading && skills.length > 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {skills.map(({ skillId, skillName, rating, price, image }) => (
            <motion.div
              key={skillId}
              variants={card}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-md rounded-2xl transition-transform hover:shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={image}
                alt={skillName}
                className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-t-2xl"
              />
              <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 break-words">
                  {skillName}
                </h2>
                <div className="flex items-center justify-between text-sm sm:text-base text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {rating}
                  </span>
                  <span className="font-bold text-blue-600">${price}</span>
                </div>
                <Link
                  to={`/skillType/${skillId}`}
                  className="btn btn-secondary rounded-3xl mt-2 text-sm sm:text-base"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {!loading && skills.length === 0 && !error && (
        <p className="text-gray-500 mt-6 font-semibold">No skills available.</p>
      )}
    </div>
  );
};

export default AllSkills;
