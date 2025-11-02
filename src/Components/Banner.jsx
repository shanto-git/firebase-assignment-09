import React from "react";
import heroIcon from "../assets/heroImg.jpg"
import { MdNavigateNext } from 'react-icons/md';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroIcon}
            className="max-w-2xl"
          />
          <div>
            <h1 className="text-7xl font-bold">Grow Your <span className="text-red-400">Skill</span> <br /> <span className="text-pink-600">With Us</span></h1>
            <button className="btn btn-secondary mt-5">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
