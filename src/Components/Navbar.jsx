import React, { use, useContext } from "react";
import logoIcon from "../assets/logo-removebg-preview.png";
import { CgProfile } from "react-icons/cg";
import { Link, Navigate, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { signInWithGoogle } = useContext(AuthContext);

  const handleWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleLogOut = () => {
    toast.success("SugnOut Successfully", {
      position: "top-center",
      autoClose: 2000,
      style: { color: "red", backgroundColor: "white", fontWeight: "bold" },
    });
    logOut()
      .then(() => {})
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="flex items-center">
            <img
              src={logoIcon}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-10"
            />
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-green-500">
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
              <NavLink
                to="/success"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-100 text-sm text-green-900 font-bold border-b-3 border-yellow-500"
                    : "text-sm font-semibold"
                }
              >
                Success
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="drawer drawer-end">
              <input
                id="my-drawer-5"
                type="checkbox"
                className="drawer-toggle"
              />

              {/* Drawer Button */}
              <div className="drawer-content flex justify-end p-2">
                <label
                  htmlFor="my-drawer-5"
                  className="drawer-button btn btn-success text-white font-bold"
                >
                  My Profile
                </label>
              </div>

              {/* Drawer Side */}
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer-5"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <div className="menu bg-base-200 min-h-full w-80 sm:w-72 p-6 flex flex-col justify-between shadow-lg">
                  <div className="flex flex-col items-center text-center gap-2">
                    <img
                      src={user?.photoURL || "https://via.placeholder.com/100"}
                      alt="photo"
                      className="w-24 h-24 object-cover rounded-full border border-gray-300"
                    />
                    <h1 className="text-xl font-bold mt-2 break-words">
                      {user?.displayName || "Guest User"}
                    </h1>
                    <small className="text-gray-500 break-words text-sm">
                      {user?.email || "No email available"}
                    </small>
                    <Link
                      to="/auth/myProfile"
                      className="btn btn-secondary w-full mt-4"
                    >
                      Update Profile
                    </Link>
                  </div>

                  <button
                    onClick={handleLogOut}
                    className="btn bg-[#2F2F2F] text-white border-black w-full mt-6 hover:underline"
                  >
                    Sign Out
                  </button>
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
                    <button
                      onClick={handleWithGoogle}
                      className="btn bg-white text-black border-[#e5e5e5]"
                    >
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
      <ToastContainer position="top-center" autoClose={2000} theme="red" />
    </div>
  );
};

export default Navbar;
