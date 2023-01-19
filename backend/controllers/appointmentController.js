import Appointment from "../models/Appointment.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";

const createAppointment = async (req, res) => {
  const { StartDate, EndDate, Doctor } = req.body;
  if (!StartDate || !EndDate || !Doctor) {
    throw new BadRequest("Please provide all values");
  }
  req.body.CreatedBy = req.user.userId;
  console.log(req.user.userId);
  const appointment = await Appointment.create(req.body);
  res.status(StatusCodes.CREATED).json({ appointment });
};
const getAllAppointments = async (req, res) => {
  const appointments = await Appointment.find({ CreatedBy: req.user.userId });
  res.status(StatusCodes.OK).json({
    appointments,
    totalAppointments: appointments.length,
    numOfPages: 1,
  });
};
const updateAppointment = async (req, res) => {
  const { id: appointmentId } = req.params;
  const { StartDate, EndDate, Doctor } = req.body;
  if (!StartDate || !EndDate || !Doctor) {
    throw new BadRequest("Please provide all values");
  }
  const appointment = await Appointment.findOne({ _id: appointmentId });
  if (!appointment) {
    throw new NotFound(`No appointment with id ${appointmentId}`);
  }
  const updateAppointment = await Appointment.findOneAndUpdate(
    { _id: appointmentId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updateAppointment });
};
const deleteAppointment = async (req, res) => {
  res.send("delete appointment");
};
const showDetails = async (req, res) => {
  res.send("show appointment");
};

export {
  createAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
  showDetails,
};
