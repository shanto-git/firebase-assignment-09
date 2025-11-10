import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import BookSessionModal from "./BoookSession";
import toast, { Toaster } from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.skillId === parseInt(id));
        setSkill(found);
      });
  }, [id]);

  if (!skill) return <div className="text-center py-10 text-gray-600">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-2xl my-10"
    >
      <Toaster position="top-center" />

      <button onClick={() => navigate(-1)} className="mb-4 hover:underline">
        ← Back
      </button>

      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-96 object-cover rounded-t-2xl mb-6"
      />

      <h1 className="text-3xl font-bold text-gray-800">{skill.skillName}</h1>
      <div className="flex items-center gap-8 text-gray-600 mt-2">
        <span className="flex items-center gap-1 font-bold">
          <FaStar className="text-yellow-500" />
          {skill.rating}
        </span>
        <span className="font-bold ">${skill.price}</span>
      </div>

      <p className="text-gray-700 leading-relaxed mt-4">{skill.description}</p>

      <div className="pt-4 border-t border-gray-200 mt-4">
        <h3 className="font-semibold text-gray-800 border-b-1 inline-block border-gray-300">
          Provider Details
        </h3>
        <p className="text-gray-600">
          <strong>Name:</strong> {skill.providerName}
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> {skill.providerEmail}
        </p>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className={`mt-6 btn px-6 py-2 rounded-3xl transition-all duration-300 ${
          submitted ? "btn-success cursor-not-allowed" : "btn-secondary"
        }`}
      >
        {submitted ? "Submitted" : "Book Session"}
      </button>

      {showModal && (
        <BookSessionModal
          skill={skill}
          onClose={() => setShowModal(false)}
          onSubmit={() => setSubmitted(true)}
        />
      )}
    </motion.div>
  );
};

export default SkillDetails;
