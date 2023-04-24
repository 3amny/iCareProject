import { FaStar, FaRegStar } from "react-icons/fa";

export const RatingStars = ({ rating }) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(rating);
  const emptyStars = MAX_STARS - filledStars;

  return (
    <div>
      {[...Array(filledStars)].map((star, i) => (
        <FaStar key={i} color="#ffc107" />
      ))}
      {[...Array(emptyStars)].map((star, i) => (
        <FaRegStar key={i} color="#ffc107" />
      ))}
    </div>
  );
};

 