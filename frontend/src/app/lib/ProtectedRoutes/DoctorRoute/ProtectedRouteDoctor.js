import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../../../context/appContext";

export const ProtectedRouteDoctor = ({ children }) => {
  const { role } = useAppContext();
  if (role !== 'Doctor') {
    return <Navigate to="/" />;
  }
  return children;
};
