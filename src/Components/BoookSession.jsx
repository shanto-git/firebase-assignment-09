import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookSession = ({ skill, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setSubmitted(true);
    if (onSubmit) onSubmit();

    setTimeout(() => {
      setName("");
      setEmail("");
      if (onClose) onClose();
    }, 1000);
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setSubmitted(false);
    if (onClose) onClose();
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Book Session</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="label">Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full"
            />
            <label className="label">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full"
            />
            <button
              type="submit"
              className="btn btn-secondary px-6 py-2 rounded-3xl"
            >
              Submit
            </button>
          </form>
        ) : (
          <button className="btn btn-success w-full py-2 rounded-3xl">
            Submitted
          </button>
        )}
      </div>
    </div>
  );
};

export default BookSession;
