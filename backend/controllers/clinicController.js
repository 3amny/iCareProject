import Clinic from "../models/Clinic.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";
import checkRolePermission from "../utils/checkRolePermission.js";

const createClinic = async (req, res) => {
  const { organization, email, phone, address, reviews, isVerified, doctor } =
    req.body;
  if (!organization || !email || !phone || !address) {
    throw new BadRequest("Please provide all values");
  }
  checkRolePermission(req.user, "Admin");
  const appointment = await Clinic.create(req.body);
  res.status(StatusCodes.CREATED).json({ appointment });
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
  const { organization, email, phone, address, reviews, isVerified, doctor } =
    req.body;
  checkRolePermission(req.user, "Admin");
  if (!organization || !email || !phone || !address) {
    throw new BadRequest("Please provide all values");
  }
  const clinic = await Clinic.findOne({ _id: clinicId });
  if (!clinic) {
    throw new NotFound(`No clinic with id ${clinic}`);
  }
  const updateClinic = await Clinic.findOneAndUpdate(
    { _id: clinicId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updateClinic });
};

const deleteClinic = async (req, res) => {
  checkRolePermission(req.user, "Admin");
  const { id: clinicId } = req.params;
  const clinic = await Clinic.findOne({ _id: clinicId });
  if (!clinic) {
    throw new NotFound(`No appointment with id ${clinicId}`);
  }
  checkRolePermission(req.user.role, "Admin");
  await clinic.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Clinic was removed" });
};

export { createClinic, getAllClinics, updateClinic, deleteClinic };
