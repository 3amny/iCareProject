import mongoose from "mongoose";
import validator from "validator";

const ReviewSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    comment: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.length >= 20 && v.length <= 300;
        },
        message: (props) => `Comment must be between 20 and 300 characters.`,
      },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    on: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "onModel",
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Clinic", "Doctor"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Review", ReviewSchema);
