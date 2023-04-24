import express from "express";

import auth from "../middleware/auth.js";
import {
  createReview,
  deleteReview,
  getReviewsBySubjectId,
  updateReview,
} from "../controllers/reviewController.js";
const router = express.Router({ mergeParams: true });

router.route("/").post(auth, createReview).get(getReviewsBySubjectId);
// :id
router.route("/:reviewId").patch(auth, updateReview).delete(auth, deleteReview);

export default router;
