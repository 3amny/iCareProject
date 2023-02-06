import TimeSlot from "../models/TimeSlot.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, NotFound } from "../error/index.js";
import checkPermissions from "../utils/checkPermissions.js";
const createTimeSlots = async (req, res) => {
  const { startTime, endTime, interval } = req.body;
  if (!startTime || !endTime) {
    throw new BadRequest("Please provide required information");
  }
 
    req.body.createdBy = req.doctor.doctorId;
    const timeSlot = await TimeSlot.create(req.body);
    res.status(StatusCodes.OK).json({
      timeSlot
    });
  
};
const getTimeSlot = async (req, res) => {
  const timeSlot = await TimeSlot.find({ createdBy: req.doctor.doctorId });
  res.status(StatusCodes.OK).json({
    timeSlot,
  });
};

/*const updateTimeSlots = async (req, res) => {
  const { id: timeSlotId } = req.params;
  const { startTime, endTime, interval } = req.body;
  if (!startTime || !endTime) {
    throw new BadRequest("Please provide required information");
  }
  const updatedTimeSlots = await TimeSlot.findOneAndUpdate(
    { _id: timeSlotId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updatedTimeSlots });
};

const deleteTimeSlots = async (req, res) => {
  const { id: timeSlotId } = req.params;
  const timeSlot = await TimeSlot.findOne({ _id: timeSlotId });
  if (!timeSlot) {
    throw new NotFound(`No timeSlot with id ${timeSlotId}`);
  }
  checkPermissions(req.doctor, timeSlot.createdBy);
  await timeSlot.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! TimeSlot was removed" });
};*/


export { createTimeSlots,  getTimeSlot };
