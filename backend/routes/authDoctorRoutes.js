import express from "express";
import {
  register,
  login,
  update,
} from "../controllers/authDoctorController.js";
import authDoctor from "../middleware/authDoctor.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").patch(authDoctor, update);
export default router;
