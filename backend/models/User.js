import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import AppointmentSchema from "./Appointment.js";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide your name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please provide your last name"],
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
    dateOfBirth: {
      type: Date,
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      minlength: 7,
      select: false,
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
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    appointments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Appointment",
      },
    ],
  },
  { timestamps: true }
);
// hashing passwords

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, role: this.role },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};
UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
