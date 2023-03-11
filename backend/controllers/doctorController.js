import Doctor from "../models/Doctor.js";
import { StatusCodes } from "http-status-codes";
import checkRolePermission from "../utils/checkRolePermission.js";
import { BadRequest, NotFound } from "../error/index.js";

const getAll = async (req, res) => {
  checkRolePermission(req.user, "Admin");
  const doctors = await Doctor.find();
  res.status(StatusCodes.OK).json({
    doctors,
    totalDoctors: doctors.length,
    numOfPages: 1,
  });
};

const getOne = async (req, res) => {
  checkRolePermission(req.user, "Admin");
  const { id: doctorId } = req.params;
  const doctor = await Doctor.findOne({ _id: doctorId });
  if (!doctor) {
    throw new NotFound(`No doctor with id ${doctorId}`);
  }
  res.status(StatusCodes.OK).json({
    doctor,
  });
};
const updateDoctor = async (req, res) => {
  checkRolePermission(req.user, "Admin");
  const { id: doctorId } = req.params;
  const { firstName, lastName, email, phone, city, street } = req.body;
  if (!firstName || !lastName || !email || !phone || !city || !street) {
    throw new BadRequest("Please provide all information");
  }
  const doctor = await Doctor.findOne({ _id: doctorId });
  if (!doctor) {
    throw new NotFound(`No user with id ${doctorId}`);
  }
  const updatedDoctor = await Doctor.findOneAndUpdate(
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
  checkRolePermission(req.user, "Admin");
  const { id: doctorId } = req.params;
  const doctor = await Doctor.findOne({ _id: doctorId });
  if (!doctor) {
    throw new NotFound(`No user with id ${doctorId}`);
  }
  await user.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! User is removed!" });
};
export { getAll, getOne, deleteDoctor, updateDoctor };
