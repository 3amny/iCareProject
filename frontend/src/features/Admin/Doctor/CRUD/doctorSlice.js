import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllClinics } from "features/Admin/Clinic/getAll/allClinicsSlice";
import { getAllRoles } from "features/Admin/Roles/RoleSlice";
import { getAllSpecialties } from "features/Admin/Specialties/specialtySlice";
import { toast } from "react-toastify";
import {
  deleteDoctorAdminThunk,
  updateDoctorAdminThunk,
} from "./doctorThunk";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  role: "",
  dateOfBirth: "",
  experience: "",
  startTime: "",
  endTime: "",
  interval: "",
  email: "",
  editDoctorId: "",
  docType: "",
  clinic: "",
  clinicsOptions: [],
  specialtiesOptions: [],
  rolesOptions: [],
  isLoading: false,
};

export const updateDoctorAdmin = createAsyncThunk(
  "doctorAdmin/updateDoctorAdmin",
  updateDoctorAdminThunk
);
export const deleteDoctorAdmin = createAsyncThunk(
  "doctorAdmin/deleteDoctorAdmin",
  deleteDoctorAdminThunk
);
export const fetchClinicsOptions = createAsyncThunk(
  "doctorAdmin/fetchClinicsOptions",
  async (_, { dispatch }) => {
    const response = await dispatch(getAllClinics());
    return response.payload;
  }
);
export const fetchSpecialtiesOptions = createAsyncThunk(
  "doctorAdmin/fetchSpecialtiesOptions",
  async (_, { dispatch }) => {
    const response = await dispatch(getAllSpecialties());
    return response.payload;
  }
);
export const fetchRolesOptions = createAsyncThunk(
  "doctorAdmin/fetchRolesOptions",
  async (_, { dispatch }) => {
    const response = await dispatch(getAllRoles());
    return response.payload;
  }
);
const doctorAdminSlice = createSlice({
  name: "doctorAdmin",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setEditDoctor: (state, { payload }) => {
      return { ...state, ...payload };
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteDoctorAdmin.rejected, ({ payload }) => {
        toast.error(payload);
      })
      .addCase(updateDoctorAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDoctorAdmin.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Doctor was updated!");
      })
      .addCase(updateDoctorAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(fetchClinicsOptions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.clinicsOptions = payload.clinics;
      })
      .addCase(fetchClinicsOptions.rejected, (state, { payload }) => {
        console.log(action.error.message);
        toast.error(payload);
      })
      .addCase(fetchSpecialtiesOptions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.specialtiesOptions = payload.specialties;
      })
      .addCase(fetchSpecialtiesOptions.rejected, ({ payload }) => {
        console.log(action.error.message);
        toast.error(payload);
      })
      .addCase(fetchRolesOptions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.rolesOptions = payload.roles;
      })
      .addCase(fetchRolesOptions.rejected, ({ payload }) => {
        console.log(action.error.message);
        toast.error(payload);
      });
  },
});

// console.log(userAuthSlice)

export default doctorAdminSlice.reducer;

export const { handleChange, setEditDoctor, clearValues } =
  doctorAdminSlice.actions;
