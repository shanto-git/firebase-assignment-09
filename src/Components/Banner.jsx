import React from "react";
import heroIcon from "../assets/heroImg.jpg"
import { MdNavigateNext } from 'react-icons/md';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroIcon}
            className="w-full max-w-auto md:max-w-[500px] lg:max-w-6/12 h-auto mx-auto object-contain"
          />
          <div>
            <h1 className="text-7xl font-bold">Grow Your <span className="text-red-400">Skill</span> <br /> <span className="text-pink-600">With Us</span></h1>
            <Link to="/skillType" className="btn btn-secondary mt-5">Explore Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
