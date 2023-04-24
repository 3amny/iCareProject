import React from "react";

export const TimeButton = ({ startTime, endTime, onClick }) => {
  return (
    <button type="button" className="btn-time" onClick={onClick}>
      <p>{`${startTime} - ${endTime}`}</p>
    </button>
  );
};
