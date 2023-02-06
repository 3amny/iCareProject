import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
  },
  patient: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    required: [true, "Please provide a date for appointment"],
  },
  timeSlot: {
    type: Number,
    required: [true],
  },
  notes: {
    type: String,
    default: "You can write notes here...",
  },
});

export default mongoose.model("Appointment", appointmentSchema);
