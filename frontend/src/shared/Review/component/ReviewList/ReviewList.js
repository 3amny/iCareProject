import React from "react";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "features/Reviews/reviewSlice";

export const ReviewList = ({ reviews, isLoading, handleUpdate, pageId }) => {
  const sortedReviews = [...reviews].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const dispatch = useDispatch();
  const handleCommentChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleRatingChange = (value) => {
    dispatch(handleChange({ name: "rating", value: value }));
  };
  return sortedReviews.map((review) => (
    <div key={review._id} className="review-stack">
      <ReviewCard
        pageId={pageId}
        {...review}
        isLoading={isLoading}
        handleCommentChange={(e) => handleCommentChange(e)}
        handleRatingChange={(value) => handleRatingChange(value)}
        handleSubmit={handleUpdate}
      />
    </div>
  ));
};
