import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose.Schema({
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
    validate:{
        validator: validator.isEmail,
        message: "Please provide valid email"
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minlength: 7,
  },
  phone: {
    type: String,
    required: [true, "Please provide your phone number"],
    validate:{
        validator: validator.isMobilePhone,
        message: "Please provide valid phone number"
    },
  },
  city: {
    type: String,
    trim: true,
    default: 'Tashkent'
  },
  address: {
    type: String,
    trim: true,
    default: 'Address'
  },
});

export default mongoose.model('User', UserSchema);
