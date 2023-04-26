import express from "express";
import {
  getAppointmentsByUserId,
  getAppointmentsByDoctorId,
  deleteUserAppointment,
  deleteDoctorAppointment,
  updateAppointmentStatus,
} from "../controllers/appointmentController.js";
import auth from "../middleware/auth.js";
import authDoctor from "../middleware/authDoctor.js";

const router = express.Router({ mergeParams: true });

router.route("/user-appointments").get(auth, getAppointmentsByUserId);
router.route("/doctor-appointments").get(authDoctor, getAppointmentsByDoctorId);
// :id
router
  .route("/user-appointments/:appointmentId")
  .delete(auth, deleteUserAppointment);
router
  .route("/doctor-appointments/:appointmentId")
  .delete(authDoctor, deleteDoctorAppointment)
  .patch(authDoctor, updateAppointmentStatus);
export default router;
