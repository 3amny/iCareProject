import Doctor from "../models/Doctor.js";
import { StatusCodes } from "http-status-codes";
import checkRolePermission from "../utils/checkRolePermission.js";
import { BadRequest, NotFound } from "../error/index.js";

const getAll = async (req, res) => {
  const { search, docType, clinic, sort } = req.query;
  const queryObject = {};
  if (search) {
    queryObject.firstName = { $regex: search, $options: "i" };
    queryObject.lastName = { $regex: search, $options: "i" };
  }
  if (docType !== "all") {
    queryObject.docType = docType;
  }
  if (clinic !== "all") {
    queryObject.clinic = clinic;
  }
  let result = Doctor.find(queryObject)
    .populate({ path: "docType", select: "name" })
    .populate({ path: "clinic", select: "name", model: "Clinic" });
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("firstName");
  }
  if (sort === "z-a") {
    result = result.sort("-firstName");
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.page) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const doctors = await result;
  const totalDoctors = await Doctor.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalDoctors / limit);

  res.status(StatusCodes.OK).json({
    doctors,
    totalDoctors,
    numOfPages,
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
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !experience ||
    !dateOfBirth
  ) {
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
