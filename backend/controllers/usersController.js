import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import checkRolePermission from "../utils/checkRolePermission.js";

const getAllUsers = async (req, res) => {
  console.log(req.user)
  checkRolePermission(req.user, "Admin");

  const users = await User.find();
  res
    .status(StatusCodes.OK)
    .json({ users, totalUsers: users.length, numOfPages: 1 });
};
const getUser = async (req, res) => {
  
  checkRolePermission(req.user.role, "Admin");
  const { id: userId } = req.params;
  const user = await User.findOne({ _id: userId });
  if (!user) {
    throw new NotFound(`No user with id ${userId}`);
  }
  res.status(StatusCodes.OK).json({
    user,
  });
};
export { getAllUsers, getUser};
