import React from "react";
import styled from "styled-components";
import { ReviewForm, ReviewList } from "shared/Review/index.js";

export const ReviewSection = ({
  Loading,
  reviews,
  values,
  handleInput,
  onRatingChange,
  handleSubmit,
  handleUpdateSubmit,
  pageId
}) => {
  if (Loading === true) {
    return <h5>Loading....</h5>;
  }
  return (
    <Wrapper>
      <ReviewForm
        isLoading={Loading}
        comment={values.comment}
        rating={values.rating}
        handleInput={handleInput}
        onRatingChange={onRatingChange}
        handleSubmit={handleSubmit}
      />
      <div className="mt-4">
        <ReviewList
          pageId={pageId}
          reviews={reviews}
          isLoading={Loading}
          handleUpdate={handleUpdateSubmit}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .review-stack {
    margin: 0.5rem 0;
  }
  .mt-4 {
    margin-top: 1rem;
  }

  .review-form-row {
    display: flex;
    gap: 0.5rem;
  }
  .message-input {
    flex-grow: 1;
    resize: none;
    height: 80px;
    border-radius: 0.5em;
    padding: 0.5em;
    font-size: inherit;
    font-family: inherit;
    border: 2px solid var(--primary-500);
    line-height: 1.4;
  }

  .message-input:focus {
    border-color: var(--primary-700);
    outline: none;
  }
  .rating-character-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    p {
      font-size: 14px;
      span {
        font-weight: normal;
      }
    }
  }
`;
