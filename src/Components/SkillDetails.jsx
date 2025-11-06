import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.skillId === parseInt(id));
        setSkill(found);
      });
  }, [id]);

  if (!skill) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-2xl my-10"
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-4 hover:underline"
      >
        ← Back
      </button>

      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-96 object-cover rounded-t-2xl mb-6"
      />

      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {skill.skillName}
        </h1>

        <div className="flex items-center gap-8 text-gray-600">
          <span className="flex items-center gap-1 font-bold">
            <FaStar className="text-yellow-500" />
            {skill.rating}
          </span>
          <span className="font-bold ">${skill.price}</span>
        </div>

        <p className="text-gray-700 leading-relaxed">{skill.description}</p>

        <div className="pt-4 border-t border-gray-200">
          <h3 className="font-semibold text-gray-800 border-b-1 inline-block border-gray-300">Provider Details</h3>
          <p className="text-gray-600">
            <strong>Name:</strong> {skill.providerName}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {skill.providerEmail}
          </p>
        </div>

        <button className="mt-6 btn btn-secondary px-6 py-2 rounded-3xl">
          Book Session
        </button>
      </div>
    </motion.div>
  );
};

export default SkillDetails;
