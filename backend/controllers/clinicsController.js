import Clinic from "../models/Clinic.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";
import checkRolePermission from "../utils/checkRolePermission.js";

const createClinic = async (req, res) => {
  const { name, email, phone } = req.body;
  req.body.createdBy = req.user.userId;
  if (!name || !email || !phone) {
    throw new BadRequest("Please provide all values");
  }
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
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

const getById = async (req, res) => {
  const { id: clinicId } = req.params;
  const clinic = await Clinic.findOne({ _id: clinicId });
  if (!clinic) {
    throw new NotFound(`No doctor with id ${clinicId}`);
  }
  res.status(StatusCodes.OK).json({
    clinic,
  });
};


const updateClinic = async (req, res) => {
  const { id: clinicId } = req.params;
  const { name, email, phone, street, city } = req.body;
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  if (!name || !email || !phone || !street || !city) {
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
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  const { id: clinicId } = req.params;
  const clinic = await Clinic.findOne({ _id: clinicId });
  if (!clinic) {
    throw new NotFound(`No appointment with id ${clinicId}`);
  }
  await clinic.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Clinic was removed" });
};

export { createClinic, getAllClinics, updateClinic, deleteClinic, getById };
