// src/routes/Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/MyPage";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route
      path="/test"
      element={
        <ProtectedRoute>
          <TestPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/results"
      element={
        <ProtectedRoute>
          <TestResultPage />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
