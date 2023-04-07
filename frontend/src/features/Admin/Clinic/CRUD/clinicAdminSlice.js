import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authUserHeader } from "utils/requests/authHeaders";
import {
  getAllClinics,
  hideLoading,
  showLoading,
} from "../getAll/allClinicsSlice";

import {
  createClinicAdminThunk,
  deleteClinicAdminThunk,
  updateClinicAdminThunk,
} from "./clinicAdminThunk";

const initialState = {
  editClinicId: "",
  isLoading: false,
  isEditing: false,
  name: "",
  email: "",
  phone: "",
  city: "",
  street: "",
  isVerified: false,
};

export const createClinicAdmin = createAsyncThunk(
  "clinicAdmin/createClinicAdmin",
  createClinicAdminThunk
);
export const updateClinicAdmin = createAsyncThunk(
  "clinicAdmin/updateClinicAdmin",
  updateClinicAdminThunk
);
export const deleteClinicAdmin = createAsyncThunk(
  "clinicAdmin/deleteClinicAdmin",
  deleteClinicAdminThunk
);

const clinicAdminSlice = createSlice({
  name: "clinicAdmin",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setEditClinic: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClinicAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createClinicAdmin.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Clinic Created");
      })
      .addCase(createClinicAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteClinicAdmin.rejected, ({ payload }) => {
        toast.error(payload);
      })
      .addCase(updateClinicAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateClinicAdmin.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Clinic was updated!");
      })
      .addCase(updateClinicAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

// console.log(userAuthSlice)

export default clinicAdminSlice.reducer;
export const { handleChange, setEditClinic, clearValues } =
  clinicAdminSlice.actions;
