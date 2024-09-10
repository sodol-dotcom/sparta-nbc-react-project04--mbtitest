// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // useAuth import

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // AuthContext에서 user 가져오기

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
