import { StatusCodes } from "http-status-codes";
import checkRolePermission from "../utils/checkRolePermission.js";
import { BadRequest } from "../error/index.js";
import Role from "../models/Role.js";

const createRole = async (req, res) => {
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  const { name } = req.body;
  if (!name) {
    throw new BadRequest("Please provide all values");
  }
  const role = await Role.create(req.body);
  res.status(StatusCodes.CREATED).json({ role });
};

const getAllRoles = async (req, res) => {
  const roles = await Role.find();
  console.log(req.user);
  res.status(StatusCodes.OK).json({
    roles,
    totalRoles: roles.length,
  });
};

const updateRole = async (req, res) => {
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  const { id: roleId } = req.params;
  const { name } = req.body;
  if (!name) {
    throw new BadRequest("Please provide all values");
  }
  const role = await Role.findOne({ _id: roleId });
  if (!role) {
    throw new NotFound(`No clinic with id ${role}`);
  }
  const updatedRole = await Role.findOneAndUpdate({ _id: roleId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updatedRole });
};

const deleteRole = async (req, res) => {
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  const { id: roleId } = req.params;
  const role = await Role.findOne({ _id: roleId });
  if (!role) {
    throw new NotFound(`No role with id ${roleId}`);
  }
  await role.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Role was removed" });
};
export { getAllRoles, deleteRole, updateRole, createRole };
