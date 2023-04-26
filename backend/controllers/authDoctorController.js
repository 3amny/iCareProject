import Doctor from "../models/Doctor.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, UnAuthenticated } from "../error/index.js";
import dayjs from "dayjs";
const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    experience,
    docType,
    clinic,
    startTime,
    endTime,
    interval,
    dateOfBirth,

  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phone ||
    !experience ||
    !startTime ||
    !endTime ||
    !dateOfBirth
  ) {
    throw new BadRequest("Please provide all information");
  }
  const emailIsInUse = await Doctor.findOne({ email });
  if (emailIsInUse) {
    throw new BadRequest("Email is already in use");
  }

  req.body.timeSlots = Doctor.generateTimeSlots(startTime, endTime, interval);
  const timeSlots = req.body.timeSlots;
  console.log(timeSlots);
  req.body.role = "6425091d6383af1ca69c2e9d";
  const role = req.body.role;
  const doctor = await Doctor.create({
    firstName,
    lastName,
    email,
    password,
    phone,
    docType,
    clinic,
    experience,
    role,
    startTime,
    endTime,
    interval,
    timeSlots,
    dateOfBirth,
  });
  const token = doctor.createJWT();

  res.status(StatusCodes.CREATED).json({
    doctor: {
      email: doctor.email,
      firstName: doctor.firstName,
      lastName: doctor.lastName,

      phone: doctor.phone,
      docType: doctor.docType,
      role: doctor.role,
      experience: doctor.experience,
      clinic: doctor.clinic,
      startTime: doctor.startTime,
      endTime: doctor.endTime,
      interval: doctor.interval,
      timeSlots: doctor.timeSlots,
      dateOfBirth: doctor.dateOfBirth,
    },
    token,
    role: doctor.role,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Please provide all values");
  }
  const doctor = await Doctor.findOne({ email })
    .populate({ path: "docType", select: "name" })
    .populate({ path: "clinic", select: "name", model: "Clinic" })
    .select("+password");

  if (!doctor) {
    throw new UnAuthenticated("Invalid Credentials");
  }
  const isPasswordCorrect = await doctor.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticated("Invalid Credentials");
  }
  const token = doctor.createJWT();
  doctor.password = undefined;
  res.status(StatusCodes.OK).json({
    doctor,
    token,
  });
};

const update = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    docType,
    clinic,
    experience,
    dateOfBirth,
  } = req.body;

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

  const doctor = await Doctor.findOne({ _id: req.doctor.doctorId });
  doctor.email = email;
  doctor.firstName = firstName;
  doctor.lastName = lastName;
  doctor.phone = phone;
  doctor.docType = docType;
  doctor.clinic = clinic;
  doctor.experience = experience;
  doctor.dateOfBirth = dateOfBirth;

  await doctor.save();

  const token = doctor.createJWT();
  res.status(StatusCodes.OK).json({
    doctor,
    token,
  });
};

export { register, login, update };
