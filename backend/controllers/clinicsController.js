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
  const { search, sort } = req.query;
  const queryObject = {};
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }
  let result = Clinic.find(queryObject);
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("name");
  }
  if (sort === "z-a") {
    result = result.sort("-name");
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.page) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const clinics = await result;
  const totalClinics = await Clinic.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalClinics / limit);

  res.status(StatusCodes.OK).json({ 
    clinics,
    totalClinics,
    numOfPages,
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
