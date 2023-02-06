import express  from "express";
import {
  createAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
  showDetails,
} from "../controllers/appointmentController.js";


const router = express.Router();

router.route('/').post(createAppointment).get(getAllAppointments);
// :id
router.route('/:id').delete(deleteAppointment).patch(updateAppointment);

export default router;