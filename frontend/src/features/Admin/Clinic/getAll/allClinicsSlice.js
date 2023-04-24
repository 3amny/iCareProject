import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllClinicsThunk, getClinicByIdThunk } from "./allClinicsThunk";

const initialStateFilter = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
  isLoading: true,
  clinics: [],
  currentClinic: null,
  totalClinics: 0,
  numOfPages: 1,
  page: 1,
};

export const getAllClinics = createAsyncThunk(
  "allClinics/getAllClinics",
  getAllClinicsThunk
);

export const getClinicById = createAsyncThunk(
  "allClinics/getClinicById",
  getClinicByIdThunk
);
const allClinicsSlice = createSlice({
  name: "allClinics",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllClinics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllClinics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.clinics = payload.clinics;
        state.totalClinics = payload.totalClinics;
      })
      .addCase(getAllClinics.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getClinicById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getClinicById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentClinic = payload.clinic;
      })
      .addCase(getClinicById.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { showLoading, hideLoading } = allClinicsSlice.actions;
export default allClinicsSlice.reducer;
