import express from "express";
import { getAll, getOne } from "../controllers/doctorController.js";

import auth from "../middleware/auth.js";
const router = express.Router();

router.route("/").get(auth, getAll);
router.route("/:id").get(auth, getOne);

export default router;
