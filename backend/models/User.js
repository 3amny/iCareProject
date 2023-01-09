import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt  from "jsonwebtoken";
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
    select: false,
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
// hashing passwords

UserSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({userId:this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

export default mongoose.model('User', UserSchema);
