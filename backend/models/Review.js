import mongoose from "mongoose";
import validator from "validator";

const ReviewSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Doctor",
    }
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Review", ReviewSchema);
