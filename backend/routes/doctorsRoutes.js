import express from "express";
import {
  deleteDoctor,
  getAll,
  updateDoctor,
  getById,
} from "../controllers/doctorsController.js";

import auth from "../middleware/auth.js";
const router = express.Router();

router.route("/").get(getAll);
router
  .route("/:id")
  .patch(auth, updateDoctor)
  .delete(auth, deleteDoctor)
  .get(getById);

export default router;
