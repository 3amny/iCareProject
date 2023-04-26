import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//fix
export const ProtectedRouteDoctor = ({ children }) => {
  const { doctor } = useSelector((store) => store.doctorAuth);
  if (!doctor) {
    return <Navigate to="/" />;
  }
  return children;
};
