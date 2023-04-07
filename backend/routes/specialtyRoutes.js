import express from "express";
import {
  createSpecialty,
  getAllSpecialties,
  updateSpecialty,
  deleteSpecialty,
} from "../controllers/specialtyController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(auth, createSpecialty).get(getAllSpecialties);
// :id
router.route("/:id").patch(auth, updateSpecialty).delete(auth, deleteSpecialty);

export default router;
