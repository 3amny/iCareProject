import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRouteAdmin = ({ children }) => {
  const { role } = useSelector((store) => store.user);
  if (role !== "642509136383af1ca69c2e99") {
    return <Navigate to="/" />;
  }
  return children;
};
