import { configureStore } from "@reduxjs/toolkit";
import clinicAdminSlice from "features/Admin/Clinic/CRUD/clinicAdminSlice";
import allClinicsSlice from "features/Admin/Clinic/getAll/allClinicsSlice";
import doctorAdminSlice from "features/Admin/Doctor/CRUD/doctorAdminSlice";
import allDoctorsSlice from "features/Admin/Doctor/getAll/allDoctorsSlice";
import roleSlice from "features/Admin/Roles/RoleSlice";
import specialtySlice from "features/Admin/Specialties/specialtySlice";
import userAdminSlice from "features/Admin/User/CRUD/userAdminSlice";
import allUsersSlice from "features/Admin/User/getAll/allUsersSlice";
import doctorSlice from "features/Doctor/Auth/doctorSlice";
import userSlice from "features/User/Auth/userSlice";

export const store = configureStore({
  reducer: {
    role: roleSlice,
    user: userSlice,
    doctor: doctorSlice,
    userAdmin: userAdminSlice,
    doctorAdmin: doctorAdminSlice,
    allUsers: allUsersSlice,
    allDoctors: allDoctorsSlice,
    clinicAdmin: clinicAdminSlice,
    allClinics: allClinicsSlice,
    specialty: specialtySlice
  },
});
