import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-4xl text-blue-600 mb-3" />,
      title: "1. Create Your Profile",
      description:
        "Sign up and create your profile showcasing your skills or what you want to learn. Add a brief bio, your interests, and location to connect with local learners and experts.",
    },
    {
      id: 2,
      icon: <FaSearch className="text-4xl text-green-600 mb-3" />,
      title: "2. Explore or Offer Skills",
      description:
        "Browse a variety of skills offered by others in your area — from music lessons to coding help. Or post your own skill listing so others can find and contact you easily.",
    },
    {
      id: 3,
      icon: <FaHandshake className="text-4xl text-purple-600 mb-3" />,
      title: "3. Connect & Learn Together",
      description:
        "Message, schedule sessions, and start learning or teaching! Rate and review your experiences to help others in the SkillSwap community make better connections.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-base-300 rounded-3xl text-center py-10 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-blue-950 mb-12 border-b-4 inline-block border-gray-400 pb-2">
        How It Works
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={card}
            className="text-center bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HowItWorks;
