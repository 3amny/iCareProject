import React from "react";
import { useAppContext } from "../../../../../context/appContext.js";

export const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};
