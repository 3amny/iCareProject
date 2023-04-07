import express  from "express";
import {
  createAppointment,
  getAllAppointments,
} from "../controllers/appointmentController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.route('/').post(auth,createAppointment).get(getAllAppointments);
// :id
//router.route('/:id').delete(deleteAppointment).patch(updateAppointment);

export default router;