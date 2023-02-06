import express  from "express";
import {
  createClinic,
  getAllClinics,
  updateClinic,
  deleteClinic,
} from "../controllers/clinicController";


const router = express.Router();

router.route('/').post(createClinic).get(getAllClinics);
// :id
router.route('/:id').delete(updateClinic).patch(deleteClinic);

export default router;