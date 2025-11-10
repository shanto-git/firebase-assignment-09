import React, { use, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const {createUser, setUser, updateUser}= useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result=>{
        const user = result.user;
        updateUser({displayName: name, photoURL: photo})
        .then(()=>{
          setUser({...user, displayName: name, photoURL: photo });
          navigate(location.state?.from?.pathname || "/")
        })
        .catch((error) => {
          console.log(error)
          setUser(user);
});
    })
    .catch(error=>{
        const errorCode=error.code;
        const errorMessage=error.message; 
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body w-96">
            <h1 className="text-2xl text-center font-bold">SignUp with Email</h1>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label"> Photo-URL,</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo"
                required
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
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Register Now
              </button>
              <p className="text-center">Have an account? Please <Link to="/auth/login" className="text-blue-500 hover:underline">Login</Link></p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
