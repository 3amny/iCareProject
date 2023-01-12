import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest } from "../error/index.js";

const register = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;
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
  });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        address: {
          city: user.address.city,
          street: user.address.street
        }
      },
      token,
      address: {
        city: user.address.city,
        street: user.address.street
      }
    });
};

const login = async (req, res) => {
  res.send("login user");
};

const update = async (req, res) => {
  res.send("update user ");
};

export { register, login, update };
