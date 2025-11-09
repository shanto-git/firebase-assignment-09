import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import MultiLogin from "../Components/MultiLogin";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation();

  if(loading){
    return <div className="flex justify-center items-center m-72"><span className="loading loading-dots loading-xl"></span></div>
  }
  if(user && user?.email){
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/multiLogin"></Navigate>
};

export default PrivateRoute;
