import React, { useState } from "react";

export const TimeButton = ({ startTime, endTime, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick(startTime, endTime);
  };

  return (
    <button
      type="button"
      className={`btn-time ${isClicked ? "active" : ""}`}
      disabled={isClicked}
      onClick={handleClick}
    >
      <p>{`${startTime} - ${endTime}`}</p>
    </button>
  );
};
