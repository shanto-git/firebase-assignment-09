import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";

const MultiLogin = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) onClose();    
    navigate("/");                 
  };

  return (
    <div className="fixed inset-0 bg-base-300 bg-opacity-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-6/16 relative shadow-lg">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg text-center mb-4">Please Login First</h3>

        <div className="flex flex-col justify-center gap-3">
          <NavLink
            to="/auth/login"
            onClick={onClose}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <SiGmail />
            Login with Email
          </NavLink>
          <button
            onClick={onClose}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiLogin;
