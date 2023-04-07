import express from "express";
import {
  createRole,
  getAllRoles,
  updateRole,
  deleteRole,
} from "../controllers/RoleController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(auth, createRole).get(auth,getAllRoles);
// :id
router.route("/:id").patch(auth, updateRole).delete(auth, deleteRole);

export default router;
