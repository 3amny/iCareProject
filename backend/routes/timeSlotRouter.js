import express  from "express";
import {
  createTimeSlots,
  getTimeSlot
} from "../controllers/timeSlotController.js";
import authDoctor from "../middleware/authDoctor.js";
const router = express.Router();

router.route('/').post(authDoctor, createTimeSlots).get(authDoctor, getTimeSlot);

export default router;