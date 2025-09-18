import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  return localStorage.getItem("authToken") ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
