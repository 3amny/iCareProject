import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, UnAuthenticated } from "../error/index.js";
import bcrypt from "bcryptjs";
const register = async (req, res) => {
  const { firstName, lastName, email, password, phone, role } = req.body;
  if (!firstName || !lastName || !email || !password || !phone) {
    throw new BadRequest("Please provide all information");
  }
  const emailIsInUse = await User.findOne({ email });
  if (emailIsInUse) {
    throw new BadRequest("Email is already in use");
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    phone,
    role,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      role: user.role,
      address: {
        city: user.address.city,
        street: user.address.street,
      },
    },
    token,
    role: user.role,
  });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      throw new BadRequest("Please provide all values");
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new UnAuthenticated("Invalid Credentials");
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticated("Invalid Credentials");
    }
    const token = user.createJWT();
    user.password = undefined;
    res.status(StatusCodes.OK).json({
      user,
      token,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address
  } = req.body;

  if (!firstName || !lastName || !email || !phone || !address) {
    throw new BadRequest("Please provide all information");
  }

  const user = await User.findOne({ _id: req.user.userId }); //.select("+password");

  // Check if current password is provided and is correct
  /*if (currentPassword) {
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      throw new UnAuthenticated("Incorrect current password");
    }
  }

  // Check if new password is provided and is valid
  if (newPassword && confirmPassword) {
    if (newPassword !== confirmPassword) {
      throw new BadRequest("New password and confirmation do not match");
    }

    if (newPassword.length < 7) {
      throw new BadRequest("New password must be at least 7 characters long");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
  }*/

  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.phone = phone;
  user.address = address;

  // Set password only if provided

  await user.save();

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({
    user,
    token,
    role: user.role,
  });
};
export { register, login, update };
