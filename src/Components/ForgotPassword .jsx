import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { FaBackspace } from "react-icons/fa";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  // Prefill email if passed from login
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        // Redirect user to Gmail (optional)
        window.open(`https://mail.google.com/mail/u/0/#inbox`, "_blank");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <Toaster position="top-center" />
      <button
        className="btn btn-soft btn-primary my-4 p-1 flex items-center hover:underline"
        onClick={() => navigate(-1)}
      >
        <FaBackspace />Back
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
      <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-success">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
