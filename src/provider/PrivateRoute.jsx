import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../pages/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
