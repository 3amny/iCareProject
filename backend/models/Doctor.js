import mongoose from "mongoose";
import dayjs from "dayjs";
import BadRequest from "../error/bad-request.js";
import User from "./User.js";

const DoctorSchema = new mongoose.Schema(
  {
    experience: {
      type: String,
      enum: ["1 year", "3 years", "5 years", "7+ years"],
      required: [true, "Please provide years of experience..."],
    },
    docType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Specialty",
      required: [true, "Specify your specialty"],
    },
    clinic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clinic",
      required: [true, "Should be employed by a clinic..."],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    startTime: {
      type: String,
      require: [true, "Please provide start time"],
    },
    endTime: {
      type: String,
      require: [true, "Please provide end time"],
    },
    interval: { type: Number, default: 30 },
    timeSlots: {
      type: Array,
    },
  },
  { timestamps: true }, { collection: 'doctors' });

DoctorSchema.statics.generateTimeSlots = function (
  startTime,
  endTime,
  interval
) {
  let timeSlots = [];
  // In order for the function to properly work i had to set the date to 1970-01-01
  let start =  dayjs(`1970-01-01T${startTime}:00`);
  let end = dayjs(`1970-01-01T${endTime}:00`);
  if (start.isSame(end)) {
    return new BadRequest("End time can not be equal to start time");
  }
  if (start.isAfter(end)) {
    return new BadRequest("End time can not be less than start time");
  }
  while (start < end) {
    timeSlots.push(start.format("HH:mm"));
    start = start.add(interval, "minute");
  }

  return timeSlots;
};



export default User.discriminator("Doctor", DoctorSchema);
