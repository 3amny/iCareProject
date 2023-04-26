import mongoose from "mongoose";
import dayjs from "dayjs";
const appointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    startDate: {
      type: Date,
      required: [true, "Please provide a start date for appointment"],
      validate: [
        {
          validator: function (value) {
            return dayjs(value)
              .startOf("day")
              .isAfter(dayjs().add(1, "day").startOf("day"), "day");
          },
          message: "Start date should be at least 1 day after the current date",
        },

        {
          validator: function (value) {
            const today = new Date();
            return value >= today;
          },
          message: "Appointment date cannot be in the past.",
        },
      ],
    },

    endDate: {
      type: Date,
      required: [true, "Please provide an end date for appointment"],
    },
    notes: {
      type: String,
      default: "You can write notes here...",
    },
    status: {
      type: String,
      default: "Upcoming",
      enum: ["Upcoming", "Finished", "In process"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
