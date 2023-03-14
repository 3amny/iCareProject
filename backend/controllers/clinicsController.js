import Clinic from "../models/Clinic.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";
import checkRolePermission from "../utils/checkRolePermission.js";

const createClinic = async (req, res) => {
  const { organization, email, phone } = req.body;
  req.body.createdBy = req.user.userId;
  if (!organization || !email || !phone) {
    throw new BadRequest("Please provide all values");
  }
  checkRolePermission(req.user, "Admin");
  const clinic = await Clinic.create(req.body);
  res.status(StatusCodes.CREATED).json({ clinic });
};
const getAllClinics = async (req, res) => {
  const clinics = await Clinic.find();
  res.status(StatusCodes.OK).json({
    clinics,
    totalClinics: clinics.length,
    numOfPages: 1,
  });
};
const updateClinic = async (req, res) => {
  const { id: clinicId } = req.params;
  console.log(req.params);
  const { organization, email, phone, street, city } = req.body;
  checkRolePermission(req.user, "Admin");
  if (!organization || !email || !phone || !street || !city) {
    throw new BadRequest("Please provide all values");
  }
  const clinic = await Clinic.findOne({ _id: clinicId });
  if (!clinic) {
    throw new NotFound(`No clinic with id ${clinic}`);
  }
  const updatedClinic = await Clinic.findOneAndUpdate(
    { _id: clinicId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updatedClinic });
};

const deleteClinic = async (req, res) => {
  checkRolePermission(req.user, "Admin");
  const { id: clinicId } = req.params;
  const clinic = await Clinic.findOne({ _id: clinicId });
  if (!clinic) {
    throw new NotFound(`No appointment with id ${clinicId}`);
  }
  await clinic.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Clinic was removed" });
};

export { createClinic, getAllClinics, updateClinic, deleteClinic };
