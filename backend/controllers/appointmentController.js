import Appointment from "../models/Appointment.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import Doctor from "../models/Doctor.js";

const createAppointment = async (req, res) => {
  const { date, timeSlot, notes } = req.body;
  const { id: _doctorId } = req.params;
  const doctor = await Doctor.findOne({ _id: _doctorId });

  if (!date || !timeSlot) {
    throw new BadRequest("Please provide required information");
  }
  req.body.patient = req.user.userId;
  const patient = req.body.patient;
  req.body.doctorId = req.params.id;
  const doctorId = req.body.doctorId;

  req.body.timeSlot = await doctor.timeSlots[timeSlot];
  const appointment = await Appointment.create({
    doctorId,
    patient,
    date,
    timeSlot,
    notes,
  });
  res.status(StatusCodes.CREATED).json({
    appointment: {
      doctor: appointment.doctorId,
      patient: appointment.patient,
      date: appointment.date,
      timeSlot: appointment.timeSlot,
      notes: appointment.notes,
    },
  });
};

export { createAppointment };
