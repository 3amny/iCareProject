import Appointment from "../models/Appointment.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import Doctor from "../models/Doctor.js";
import dayjs from "dayjs";
const createAppointment = async (req, res, next) => {
  const { doctorId, date, notes } = req.body;
const userId = req.user.id;

try {
  // Check if the doctor exists
  const doctor = await Doctor.findOne({ _id: doctorId });
  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }
  
  // Check if the time slot is available for the specific date
  const appointmentExists = await Appointment.exists({
    doctor: doctorId,
    date,
  });
  if (appointmentExists) {
    return res
      .status(400)
      .json({ message: "The selected time slot is not available" });
  }

  // Create the appointment
  const appointment = await Appointment.create({
    doctor: doctorId,
    createdBy: userId,
    date,
    notes,
  });

  return res.status(StatusCodes.CREATED).json({
    appointment: {
      doctor: appointment.doctor,
      createdBy: appointment.createdBy,
      date: appointment.date,
      notes: appointment.notes,
    },
  });
} catch (err) {
  return next(err);
}
};

const getAllAppointments = async (req, res, next) => {
  const appointments = await Appointment.find();
  res.status(StatusCodes.OK).json({
    appointments,
    totalAppointments: appointments.length,
    numOfPages: 1,
  });
};
export { createAppointment, getAllAppointments };
