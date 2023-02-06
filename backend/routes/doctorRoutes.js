import express from "express";
import {
  getAll,
  getOne,
} from "../controllers/doctorController.js";
import {  createAppointment} from "../controllers/appointmentController.js"
import auth from "../middleware/auth.js";
const router = express.Router();

router.route("/").get(getAll);
router.route("/:id").get(getOne).post(auth, createAppointment);

export default router;
