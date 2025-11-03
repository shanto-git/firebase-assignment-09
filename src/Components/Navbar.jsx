import React from 'react';
import logoIcon from "../assets/logo-removebg-preview.png"
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
    </div>
    <div className='flex items-center'>
        <img className='w-12 h-10' src={logoIcon} />
        <h1 className='font-bold text-3xl text-green-500'>Skill <span className='text-yellow-400'>Swap</span></h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="tooltip tooltip-bottom">
  <div className="tooltip-content ">
    <div className="animate-bounce text-white text-xl font-semibold">My profile</div>
  </div>
  <button className="btn"><CgProfile/>Profile</button>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;