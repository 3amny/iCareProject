import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from 'moment'
const DoctorSchema = new mongoose.Schema(
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
    dateOfBirth: {
      type: Date,
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
    experience: {
      type: String,
      enum: ["1 year", "3 years", "5 years", "7+ years"],
      required: [true, "Please provide years of experience..."],
    },
    docType: {
      type: String,
      enum: [
        "Pediatrician",
        "Neurologist",
        "Dermatologist",
        "Psychiatrist",
        "Gynechologist",
        "General Practioner",
        "Dentist",
        "Family Doctor",
        "Surgeon",
        "Pulmonologist",
        "Cardiologist",
        "Epidemiologist",
        "Urologist",
        "Optometrist",
        "Radiologist",
        "Surgeon",
        "Gastroenterologist",
        "Endocrinologist",
        "Cardiologist,",
        "Oncologist",
        "---Select---",
      ],
      default: "---Select---",
    },
    clinic: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Clinic",
      // required: [true, "Should be employed by a clinic..."],
      type: String,
      enum: ["Clinic №1", "Clinic №2", "Clinic №3", "Clinic №4"],
      default: "Clinic №1",
    },
    role: {
      type: String,
      enum: ["Admin", "User", "Doctor"],
      default: "Doctor",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    startTime: {
      type: /* Date*/ String,
      require: [true, "Please provide start time"],
    },
    endTime: {
      type: /* Date*/ String,
      require: [true, "Please provide end time"],
    },
    interval: { type: Number, default: 30 },
    timeSlots: {
      type: Array,
    },
  },
  { timestamps: true }
);
// hashing passwords

DoctorSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

DoctorSchema.methods.createJWT = function () {
  return jwt.sign(
    { doctorId: this._id, role: this.role, isVerified: this.isVerified },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};
DoctorSchema.methods.comparePassword = async function (doctorPassword) {
  const isMatch = await bcrypt.compare(doctorPassword, this.password);
  return isMatch;
};

DoctorSchema.statics.generateTimeSlots = function (
  startTime,
  endTime,
  interval
) {
  let timeSlots = [];
  startTime = moment(startTime, "HH:mm");
  endTime = moment(endTime, "HH:mm");
  if (startTime.isSameOrAfter(endTime)) {
    return new BadRequest("End time can not be equal or less than start time");
  }
  while (startTime <= endTime) {
    timeSlots.push(startTime.format("HH:mm"));
    startTime.add(interval, "minutes");
  }

  return timeSlots;
};

export default mongoose.model("Doctor", DoctorSchema);
