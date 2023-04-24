import Doctor from "../models/Doctor.js";
import { StatusCodes } from "http-status-codes";
import checkRolePermission from "../utils/checkRolePermission.js";
import { BadRequest, NotFound } from "../error/index.js";

const getAll = async (req, res) => {
  const doctors = await Doctor.find()
    .populate("docType", "name")
    .populate("clinic", "name");
  res.status(StatusCodes.OK).json({
    doctors,
    totalDoctors: doctors.length,
    numOfPages: 1,
  });
};
const getById = async (req, res) => {
  const { id: doctorId } = req.params;
  const doctor = await Doctor.findOne({ _id: doctorId })
    .populate("docType", "name")
    .populate("clinic", "name");
  if (!doctor) {
    throw new NotFound(`No doctor with id ${doctorId}`);
  }
  res.status(StatusCodes.OK).json({
    doctor,
  });
};

const updateDoctor = async (req, res) => {
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  const { id: doctorId } = req.params;
  const {
    firstName,
    lastName,
    phone,
    role,
    dateOfBirth,
    experience,
    startTime,
    endTime,
    interval,
    email,
    createdAt,
    docType,
    clinic,
  } = req.body;
  console.log(req.body);
  if (!firstName || !lastName || !email || !phone || !experience) {
    throw new BadRequest("Please provide all information");
  }

  const doctor = await Doctor.findOne({ _id: doctorId });
  if (!doctor) {
    throw new NotFound(`No doctor with id ${doctorId}`);
  }
  const updatedDoctor = await User.findOneAndUpdate(
    { _id: doctorId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ updatedDoctor });
};
const deleteDoctor = async (req, res) => {
  checkRolePermission(req.user, "642509136383af1ca69c2e99");
  const { id: doctorId } = req.params;
  const doctor = await Doctor.findOne({ _id: doctorId });
  if (!doctor) {
    throw new NotFound(`No user with id ${doctorId}`);
  }
  await doctor.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! User is removed!" });
};
export { getAll, deleteDoctor, updateDoctor, getById };
