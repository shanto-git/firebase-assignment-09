import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-96">
        <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold">Login With Email</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="text-center">
                Don't have an account? Please{" "}
                <Link
                  to="/auth/register"
                  className="text-blue-500 hover:underline"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
