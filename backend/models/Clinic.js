import mongoose from "mongoose";
import validator from "validator";

const ClinicSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: [true, "Please provide your organization name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Please provide your phone number"],
    validate: {
      validator: validator.isMobilePhone,
      message: "Please provide valid phone number",
    },
  },
  address: {
    city: {
      type: String,
      default: "Tashkent",
    },
    street: {
      type: String,
      default: "Street",
    },
    required: [true, "Please provide address"],
  },
  
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  doctor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor"
    },
  ],
});

export default mongoose.model("Clinic", ClinicSchema);
