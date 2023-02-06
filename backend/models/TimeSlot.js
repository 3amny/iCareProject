import mongoose from "mongoose";
import validator from "validator";
import { BadRequest } from "../error/index.js";

const TimeSlotSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: [true, "Please provide shift start time"],
  },
  endTime: { type: Date, required: [true, "Please provide shift end time"] },
  interval: { type: Number, default: 30 },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
    required: [true, "Please provide doctor"],
  },
});

/*TimeSlotSchema.statics.generateTimeSlots = function (startTime, endTime, interval) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const intervalDuration = interval * 60 * 1000; // interval in minutes, converted to milliseconds
  const duration = Math.floor(end.getHours() - start.getHours());
  if(start.getHours() >= end.getHours()){
    return new BadRequest('End time can not be equal or less than start time')
  }
  const numIntervals = Math.floor(
    (duration * 60 * 60 * 1000) / intervalDuration
  );

  // Generate the time slots
  const timeSlots = [];
  for (let i = 0; i < numIntervals; i++) {
    const slotStartTime = new Date(start.getTime() + i * intervalDuration);
    const slotEndTime = new Date(slotStartTime.getTime() + intervalDuration);
    timeSlots.push({
      startTime: slotStartTime.toLocaleTimeString(),
      endTime: slotEndTime.toLocaleTimeString(),
    });
  }
  return timeSlots;
};*/

export default mongoose.model("TimeSlot", TimeSlotSchema);
