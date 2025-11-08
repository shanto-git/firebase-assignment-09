import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import MultiLogin from "../Components/MultiLogin";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!user) {
    if (!showModal) setShowModal(true);
    return (
      <>
        {showModal && <MultiLogin onClose={() => setShowModal(false)} />}
      </>
    );
  }

  return children;
};

export default PrivateRoute;
