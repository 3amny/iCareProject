import express from "express";
import {
  createClinic,
  getAllClinics,
  updateClinic,
  deleteClinic,
} from "../controllers/clinicsController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(auth, createClinic).get(auth, getAllClinics);
// :id
router.route("/:id").patch(auth, updateClinic).delete(auth, deleteClinic);

export default router;
