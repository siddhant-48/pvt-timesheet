// src/components/PrivateRoute.tsx
import React from "react";
import {
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useAuthStore } from "../store";

const PrivateRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userRole = useAuthStore((state) => state.userRole);
  let location = useLocation();
  return isAuthenticated && userRole === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
