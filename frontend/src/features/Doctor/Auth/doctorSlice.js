import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getRoleFromLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addUserToLocalStorage,
} from "utils/localStorage/localStorage";
import {
  loginDoctorThunk,
  registerDoctorThunk,
  updateDoctorThunk,
} from "./doctorThunk";
import { getAllClinics } from "features/Admin/Clinic/getAll/allClinicsSlice";
import { getAllSpecialties } from "features/Admin/Specialties/specialtySlice";
const initialState = {
  doctor: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  role: getRoleFromLocalStorage(),
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  phone: "",
  docType: "",
  experience: "",
  isMember: false,
  startTime: "",
  endTime: "",
  interval: "",
  clinic: "",
  specialtiesOptions: [],
  clinicsOptions: [],
  isLoading: false,
};
export const registerDoctor = createAsyncThunk(
  "doctor/registerDoctor",
  async (doctor, thunkAPI) => {
    return registerDoctorThunk("/doctor/auth/register", doctor, thunkAPI);
  }
);

export const loginDoctor = createAsyncThunk(
  "doctor/loginDoctor",
  async (doctor, thunkAPI) => {
    return loginDoctorThunk("/doctor/auth/login", doctor, thunkAPI);
  }
);

export const updateDoctor = createAsyncThunk(
  "doctor/updateDoctor",
  async (doctor, thunkAPI) => {
    return updateDoctorThunk("/doctor/auth/update", doctor, thunkAPI);
  }
);
export const fetchClinicsOptions = createAsyncThunk(
  "doctor/fetchClinicsOptions",
  async (_, { dispatch }) => {
    const response = await dispatch(getAllClinics());
    return response.payload;
  }
);
export const fetchSpecialtiesOptions = createAsyncThunk(
  "doctor/fetchSpecialtiesOptions",
  async (_, { dispatch }) => {
    const response = await dispatch(getAllSpecialties());
    return response.payload;
  }
);
const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    logoutDoctor: (state) => {
      state.doctor = null;
      removeUserFromLocalStorage();
    },
    toggleMember: (state) => {
      state.isMember = !state.isMember;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerDoctor.fulfilled, (state, { payload }) => {
        const { doctor, token, role } = payload;
        state.isLoading = false;
        state.doctor = doctor;
        addUserToLocalStorage(doctor, token, role);
        toast.success(`Welcome, ${doctor.firstName}`);
      })
      .addCase(registerDoctor.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginDoctor.fulfilled, (state, { payload }) => {
        const { doctor, token, role } = payload;
        state.isLoading = false;
        state.doctor = doctor;
        state.token = token;
        state.role = role;
        addUserToLocalStorage(doctor, token, role);
        toast.success(`Welcome, ${doctor.firstName}`);
      })
      .addCase(loginDoctor.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDoctor.fulfilled, (state, { payload }) => {
        const { doctor, token, role } = payload;
        state.isLoading = false;
        state.doctor = doctor;
        state.token = token;
        state.role = role;
        addUserToLocalStorage(doctor, token, role);
        toast.success(`Doctor information updated`);
      })
      .addCase(updateDoctor.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(fetchClinicsOptions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.clinicsOptions = payload.clinics;
      })
      .addCase(fetchClinicsOptions.rejected, ({ payload }) => {
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
      });
  },
});

export const { logoutDoctor, handleChange, toggleMember } = doctorSlice.actions;
export default doctorSlice.reducer;
