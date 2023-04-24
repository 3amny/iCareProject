import React, { useState } from "react";
import { Textarea } from "shared/Input";
import { RatingInput } from "shared/Rating";

export const ReviewForm = ({
  isLoading,
  rating,
  onRatingChange,
  comment,
  handleInput,
  handleSubmit,
}) => {
  const [characterCount, setCharacterCount] = useState(0);

  const handleCharacterCount = (e) => {
    setCharacterCount(e.target.value.length);
  };

  const handleTextAreaInputChange = (e) => {
    handleCharacterCount(e);
    handleInput(e);
  };

  return (
    <form>
      <div className="rating-character-row">
        <div className="rating">
          <RatingInput rating={rating} onRatingChange={onRatingChange} />
        </div>
        <div className="character">
          <p>
            <span style={{ color: characterCount < 20 ? "red" : "inherit" }}>
              {characterCount}
            </span>
            / 300 characters
          </p>
        </div>
      </div>

      <div className="review-form-row">
        <Textarea
          className="message-input"
          name="comment"
          value={comment}
          onChange={handleTextAreaInputChange}
        />

        <button
          type="submit"
          className="btn"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "Loading..." : "Post"}
        </button>
      </div>
    </form>
  );
};
