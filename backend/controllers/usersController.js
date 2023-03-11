import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import checkRolePermission from "../utils/checkRolePermission.js";

const getAllUsers = async (req, res) => {
  checkRolePermission(req.user, "Admin");

  const users = await User.find();
  // includes all users expect the requested one
  const filteredUsers = users.filter(
    (user) => user._id.toString() !== req.user.userId.toString()
  );

  res.status(StatusCodes.OK).json({
    users: filteredUsers,
    totalUsers: filteredUsers.length,
    numOfPages: 1,
  });
};

const getUser = async (req, res) => {
  checkRolePermission(req.user, "Admin");
  const { id: userId } = req.params;
  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new NotFound(`No user with id ${userId}`);
  }
  res.status(StatusCodes.OK).json({
    user,
  });
};
const updateUser = async (req, res) => {
  checkRolePermission(req.user, "Admin");
  const { id: userId } = req.params;
  const { firstName, lastName, email, phone, city, street, role } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !city ||
    !street ||
    !role
  ) {
    throw new BadRequest("Please provide all information");
  }
  const user = await User.findOne({ _id: userId });
  if (!user) {
    throw new NotFound(`No user with id ${userId}`);
  }
  const updatedUser = await User.findOneAndUpdate({ _id: userId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updatedUser });
};
const deleteUser = async (req, res) => {
  checkRolePermission(req.user, "Admin");
  const { id: userId } = req.params;
  const user = await User.findOne({ _id: userId });
  if (!user) {
    throw new NotFound(`No user with id ${userId}`);
  }
  await user.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! User is removed!" });
};
export { getAllUsers, getUser, deleteUser, updateUser };
