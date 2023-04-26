import express from "express";
import {
  createAppointment,
  getAvailiableTimeSlots,
} from "../controllers/appointmentController.js";
import auth from "../middleware/auth.js";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(auth, createAppointment)
  .get(auth, getAvailiableTimeSlots);



export default router;
