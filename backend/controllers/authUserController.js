import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, UnAuthenticated } from "../error/index.js";

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
  const { email, password } = req.body;
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
};

const update = async (req, res) => {
  const { firstName, lastName, email, phone, address } = req.body;

  if (!firstName || !lastName || !email || !phone || !address) {
    throw new BadRequest("Please provide all information");
  }

  const user = await User.findOne({ _id: req.user.userId });
  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.phone = phone;
  user.address = address;
  await user.save();

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
    role,
  });
};

export { register, login, update };
