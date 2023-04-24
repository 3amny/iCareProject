import { StatusCodes } from "http-status-codes";
import checkRolePermission from "../utils/checkRolePermission.js";
import { BadRequest, NotFound } from "../error/index.js";
import Review from "../models/Review.js";
import User from "../models/User.js";
import checkPermissions from "../utils/checkPermissions.js";
import getModel from "../middleware/model.js";

const createReview = async (req, res) => {
  const { rating, comment } = req.body;
  const { subject, subjectId } = req.params;
  const { userId } = req.user;
  // Validate input
  if (!rating || !comment) {
    // <--- update here
    throw new BadRequest("Please provide all neccessary information");
  }
  const model = await getModel(subject);
  if (model === null) {
    throw new BadRequest("The model does not exist");
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new BadRequest("Authentication has failed");
  }
  // Create new review
  const review = await Review.create({
    rating,
    comment,
    on: subjectId,
    onModel: model,
    createdBy: user,
  });

  res.status(StatusCodes.CREATED).json({ review });
};

const getReviewsBySubjectId = async (req, res) => {
  const { subject, subjectId } = req.params;
  try {
    const model = await getModel(subject);
    const reviews = await Review.find({
      on: subjectId,
      onModel: model,
    }).populate("createdBy", "firstName lastName");
    res.status(StatusCodes.OK).json({ reviews });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Server Error" });
  }
};
const getAllReviews = async (req, res) => {
  try {
    const limit = req.query.limit || 10; // default limit to 10 if not provided in query params
    const reviews = await Review.find().limit(limit);
    res.status(StatusCodes.OK).json({ reviews });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Server Error" });
  }
};

const updateReview = async (req, res) => {
  const { reviewId } = req.params;
  const { comment, rating } = req.body;
  if (!rating || !comment) {
    // <--- update here
    throw new BadRequest("Please provide all neccessary information");
  }
  const review = await Review.findOne({ _id: reviewId });
  if (!review) {
    throw new NotFound(`No review with ${reviewId}`);
  }
  checkPermissions(req.user, review.createdBy);
  const updatedReview = await Review.findOneAndUpdate(
    { _id: reviewId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ updatedReview });
};

const deleteReview = async (req, res) => {
  const { reviewId } = req.params;

  const review = await Review.findOne({ _id: reviewId });
  if (!review) {
    throw new NotFound(`No review with ${reviewId}`);
  }

  checkPermissions(req.user, review.createdBy);
  await review.remove();
  res.status(StatusCodes.OK).json({
    message: "Review deleted successfully",
  });
};
export {
  deleteReview,
  updateReview,
  createReview,
  getReviewsBySubjectId,
  getAllReviews,
};
