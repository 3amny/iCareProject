import React from "react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { useSelector } from "react-redux";

export const ReviewEditForm = ({
  isLoading,
  handleInput,
  onRatingChange,
  handleSubmit,
}) => {
  const { comment, rating, editReviewId } = useSelector(
    (store) => store.review
  );
  return (
    <>
      <ReviewForm
        comment={comment}
        rating={rating}
        isLoading={isLoading}
        handleInput={handleInput}
        onRatingChange={onRatingChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
