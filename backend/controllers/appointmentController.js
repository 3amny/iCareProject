import Appointment from "../models/Appointment.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import Doctor from "../models/Doctor.js";
import dayjs from "dayjs";
import User from "../models/User.js";

const createAppointment = async (req, res, next) => {
  //update the function so users can not pass past date
  const { doctorId } = req.params;
  const { startDate, endDate, notes } = req.body;
  const { userId } = req.user;

  try {
    if (!startDate || !endDate) {
      throw new BadRequest("Please provide all neccessary information");
    }
    // Check if the doctor exists
    const doctor = await Doctor.findOne({ _id: doctorId });
    if (!doctor) {
      throw new NotFound(`Doctor with id ${doctorId} was not found`);
    }
    const user = await User.findOne({ _id: userId });
    if (!user) {
      throw new BadRequest("Authentication has failed");
    }
    // Check if the time slot is available for the specific date
    const appointmentExists = await Appointment.exists({
      doctor: doctorId,
      startDate,
      endDate,
      createdBy: user,
    });
    if (appointmentExists) {
      throw new BadRequest(`Appointment with a chosen date already exists`);
    }

    // Create the appointment
    const appointment = await Appointment.create({
      doctor: doctorId,
      createdBy: userId,
      startDate: startDate,
      endDate: endDate,
      notes,
    });

    return res.status(StatusCodes.CREATED).json({
      appointment: {
        doctor: appointment.doctor,
        createdBy: appointment.createdBy,
        startDate: appointment.startDate,
        endDate: appointment.endDate,
        notes: appointment.notes,
      },
    });
  } catch (err) {
    return next(err);
  }
};

const getAvailiableTimeSlots = async (req, res, next) => {
  const { doctorId } = req.params;
  const { date } = req.query;

  const today = dayjs().startOf("day");
  const chosenDate = dayjs(date, "YYYY-MM-DD");
  if (date < today || !chosenDate.isAfter(today.add(1, "day"))) {
    throw new BadRequest(
      "Chosen date is in the past or date should be at least 1 day after the current date."
    );
  }
  const doctor = await Doctor.findById(doctorId);
  //update the function so users can not get the date in the past
  const availableTimeSlots = await doctor.getAvailableTimeSlots(date);
  res.status(StatusCodes.OK).json({
    availableTimeSlots,
    totalAppointments: availableTimeSlots.length,
  });
};
const getAllAppointments = async (req, res) => {
  const { userId } = req.user;
  const appointments = Appointment.find({ createdBy: userId });
  res.status(StatusCodes.OK).json({
    appointments,
    totalAppointments: appointments.length,
    numOfPages: 1,
  });
};

const updateAppointment = async (req, res, next) => {
  const { doctorId, appointmentId } = req.params;
  const { startDate, endDate, notes } = req.body;

  try {
    if (!startDate || !endDate) {
      throw new BadRequest("Please provide all neccessary information");
    }
    // Check if the doctor exists
    const doctor = await Doctor.findOne({ _id: doctorId });
    if (!doctor) {
      throw new NotFound(`Doctor with id ${doctorId} was not found`);
    }

    // Check if the time slot is available for the specific date
    const appointment = await Appointment.findOne({ _id: appointmentId });
    if (!appointment) {
      throw new NotFound(`No appointment with id ${appointmentId}`);
    }
    const allowedRoles = [
      "642509136383af1ca69c2e99",
      "6425091d6383af1ca69c2e9d",
    ];
    checkPermissions(req.user, appointment.createdBy, allowedRoles);
    const updatedAppointment = await Review.findOneAndUpdate(
      { _id: appointmentId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(StatusCodes.OK).json({ updatedAppointment });
  } catch (err) {
    return next(err);
  }
};
const deleteAppointment = async (req, res) => {
  const { appointmentId } = req.params;

  const appointment = await Appointment.findOne({ _id: appointmentId });
  if (!appointment) {
    throw new NotFound(`No review with ${reviewId}`);
  }

  const allowedRoles = ["642509136383af1ca69c2e99", "6425091d6383af1ca69c2e9d"];
  checkPermissions(req.user, appointment.createdBy, allowedRoles);
  await review.remove();
  res.status(StatusCodes.OK).json({
    message: "Review deleted successfully",
  });
};
export {
  createAppointment,
  getAvailiableTimeSlots,
  updateAppointment,
  deleteAppointment,
  getAllAppointments,
};
