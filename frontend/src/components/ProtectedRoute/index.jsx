import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!token) {
    return <Navigate to="/login" />;
  }

  return isAdmin ? <Navigate to="/admin" /> : children;
};

export default ProtectedRoute;
