import express from "express";
import {
  deleteDoctor,
  getAll,
  updateDoctor,
} from "../controllers/doctorsController.js";

import auth from "../middleware/auth.js";
const router = express.Router();

router.route("/").get(auth, getAll);
router.route("/:id").patch(auth, updateDoctor).delete(auth, deleteDoctor);

export default router;
