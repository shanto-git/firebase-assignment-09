import React, { use, useContext } from "react";
import logoIcon from "../assets/logo-removebg-preview.png";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = use(AuthContext);

  const handleLogOut=()=>{
    logOut().then(()=>{
      alert("SignOut successfully");
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="flex items-center">
            <img className="w-12 h-10" src={logoIcon} />
            <h1 className="font-bold text-3xl text-green-500">
              Skill <span className="text-yellow-400">Swap</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-100 text-sm text-green-900 font-bold border-b-3 border-yellow-500"
                    : "text-sm font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/success" className={({isActive})=>
              isActive
              ? "bg-green-100 text-sm text-green-900 font-bold border-b-3 border-yellow-500"
            : "text-sm font-semibold"
            }>
                Success
              </NavLink> 
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="drawer-end">
              <input
                id="my-drawer-5"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-5"
                  className="drawer-button btn btn-success text-white font-bold"
                >
                  My Profile
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-5"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="menu bg-base-200 min-h-full w-80 p-4 flex flex-col justify-between">
                  <div className="flex flex-col items-center gap-1"><img src={user.photo} alt="" className="w-18 rounded-full border-1"/>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                  <button className="btn btn-secondary">Update Profile</button>
                  </div>
                  <button onClick={handleLogOut} className="btn bg-gray-300 justify-center hover:underline">Sign out</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <button
                className="btn btn-secondary"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                My Profile
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg text-center">
                    Please Login First
                  </h3>
                  <div className="flex flex-col justify-center gap-3 mt-3">
                    <NavLink
                      to="/auth/login"
                      className="btn bg-white text-black border-[#e5e5e5]"
                    >
                      <SiGmail />
                      Login with Email
                    </NavLink>
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                      <FcGoogle />
                      Login with Google
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
