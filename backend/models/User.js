import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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
    // Default basic User role
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      default: "642509196383af1ca69c2e9b"
    },
    city: {
      type: String,
      default: "Tashkent",
    },
    street: {
      type: String,
      default: "Street",
    },
  },
  { timestamps: true }
);
// hashing passwords

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
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
  if (!this.password) {
    return false;
  }
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
