import React, { useState } from "react";
import { deleteReview, setEditReview } from "features/Reviews/reviewSlice";
import styled from "styled-components";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CommentIcon } from "shared/Button";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { RatingStars } from "shared/Rating";
import { ReviewEditForm } from "../ReviewEditForm/ReviewEditForm";

dayjs.extend(localizedFormat);

export const ReviewCard = ({
  _id,
  rating,
  comment,
  createdAt,
  createdBy,
  isLoading,
  handleSubmit,
  handleRatingChange,
  handleCommentChange,
  pageId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="header">
        <span className="name">
          {createdBy.firstName} {createdBy.lastName}
        </span>
        <span className="date">{dayjs(createdAt).format("LLL")}</span>
      </div>

      {isEditing ? (
        <ReviewEditForm
          isLoading={isLoading}
          handleInput={handleCommentChange}
          onRatingChange={handleRatingChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <div className="rating">
            <RatingStars rating={rating} />
          </div>
          <div className="message">{comment}</div>
        </>
      )}
      {user && user._id === createdBy._id ? (
        <div className="footer">
          <CommentIcon
            Icon={FaEdit}
            aria-label={isEditing ? "Cancel Editing" : "Edit"}
            isActive={isEditing}
            onClick={() => {
              dispatch(setEditReview({ editReviewId: _id, comment, rating }));
              setIsEditing((prev) => !prev);
            }}
          />
          <CommentIcon
            Icon={FaTrash}
            aria-label="Delete"
            color="danger"
            onClick={() =>
              dispatch(
                deleteReview({
                  subject: "doctors",
                  subjectId: pageId,
                  reviewId: _id,
                })
              )
            }
          />
        </div>
      ) : null}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 0.5rem;
  border: 1px solid var(--primary-600);
  border-radius: 0.5rem;

  & .header {
    color: var(--primary-700);
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
    font-size: 0.75em;
  }

  & .header .name {
    font-weight: bold;
  }
  & .message {
    white-space: pre-wrap;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  & .footer {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;
