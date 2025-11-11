import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const validPassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one capital letter (A-Z)";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one small letter (a-z)";
    }
    if (password.length <= 8) {
      return "Password must be at least 8 characters long";
    }
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordError = validPassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(location.state?.from?.pathname || "/");
          })
          .catch((error) => {
            // console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body w-96">
            <h1 className="text-2xl text-center font-bold">
              SignUp with Email
            </h1>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label">Photo-URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-12 top-79 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                SignUp Now
              </button>
              <p className="text-center">
                Have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-blue-500 hover:underline"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
