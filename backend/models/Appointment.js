import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    required: [true, "Please provide a date for appointment"],
  },
  notes: {
    type: String,
    default: "You can write notes here...",
  },
});

export default mongoose.model("Appointment", appointmentSchema);
