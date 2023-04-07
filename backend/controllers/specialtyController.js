import { StatusCodes } from "http-status-codes";
import checkRolePermission from "../utils/checkRolePermission.js";
import { BadRequest } from "../error/index.js";
import Specialty from "../models/Specialty.js";

const createSpecialty = async (req, res) => {
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  const { name } = req.body;
  if (!name) {
    throw new BadRequest("Please provide all values");
  }
  const specialty = await Specialty.create(req.body);
  res.status(StatusCodes.CREATED).json({ specialty });
};

const getAllSpecialties = async (req, res) => {
  const specialties = await Specialty.find();
  res.status(StatusCodes.OK).json({
    specialties,
    totalSpecialties: specialties.length,
  });
};

const updateSpecialty = async (req, res) => {
  const { id: specialtyId } = req.params;
  const { name } = req.body;
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  if (!name) {
    throw new BadRequest("Please provide all values");
  }
  const specialty = await Specialty.findOne({ _id: specialtyId });
  if (!specialty) {
    throw new NotFound(`No clinic with id ${specialty}`);
  }
  const updatedSpecialty = await Specialty.findOneAndUpdate(
    { _id: specialtyId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updatedSpecialty });
};

const deleteSpecialty = async (req, res) => {
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  const { id: specialtyId } = req.params;
  const specialty = await Specialty.findOne({ _id: specialtyId });
  if (!specialty) {
    throw new NotFound(`No appointment with id ${specialtyId}`);
  }
  await specialty.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Clinic was removed" });
};
export { getAllSpecialties, deleteSpecialty, updateSpecialty, createSpecialty };
