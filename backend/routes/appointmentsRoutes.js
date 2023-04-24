import express from "express";
import {
  createAppointment,
  getAvailiableTimeSlots,
  updateAppointment,
  deleteAppointment,
  getAllAppointments,
} from "../controllers/appointmentController.js";
import auth from "../middleware/auth.js";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(auth, createAppointment)
  .get(auth, getAvailiableTimeSlots);
router.route("/user-appointments").get(auth, getAllAppointments);
// :id
router
  .route("/:appointmentId")
  .delete(auth, deleteAppointment)
  .patch(auth, updateAppointment);

export default router;
