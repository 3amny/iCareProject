import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../../../context/appContext";

export const ProtectedRouteAdmin = ({ children }) => {
  const { role } = useAppContext();
  if (role !== 'Admin') {
    return <Navigate to="/" />;
  }
  return children;
};
