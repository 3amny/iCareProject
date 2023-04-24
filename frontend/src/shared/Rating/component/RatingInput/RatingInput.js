import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export const RatingInput = ({ rating, onRatingChange }) => {
  const MAX_STARS = 5;

  const handleClick = (value) => {
    onRatingChange(value);
  };

  return (
    <>
      {[...Array(MAX_STARS)].map((star, i) => {
        const value = i + 1;
        return (
          <span key={i} onClick={() => handleClick(value)}>
            {value <= rating ? (
              <FaStar color="#ffc107" />
            ) : (
              <FaRegStar color="#ffc107" />
            )}
          </span>
        );
      })}
    </>
  );
};