import mongoose from "mongoose";
import validator from "validator";

const AppointmentScheme = mongoose.Schema(
  {
    StartDate: {
      type: Date,
      required: [true, "Start date shoule be provided"],
    },
    EndDate: {
      type: Date,
      required: [true, "End date shoule be provided"],
    },
    Doctor: {
      type: String,
      maxlength: 100,
      required: [true, "Please provide doctor"],
    },
    Description: {
      type: String,
      default: "Write down the description",
      maxlength: 300
    },
    Status: {
      type: String,
      enum: ["Finished", "Pending", "Postponed"],
      default: "Pending",
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentScheme);
