import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("patientToken");

  if (!isAuthenticated) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  // If logged in, show the requested page
  return children;
};

export default ProtectedRoutes;
