import React from "react";
import { Navigate } from "react-router-dom";

//fix
export const ProtectedRouteDoctor = ({ children }) => {
  if (role !== 'Doctor') {
    return <Navigate to="/" />;
  }
  return children;
};
