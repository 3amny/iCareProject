import express from "express";
import {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/usersController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.route("/").get(auth, getAllUsers);
router
  .route("/:id")
  .get(auth, getUser)
  .delete(auth, deleteUser)
  .patch(auth, updateUser);

export default router;
