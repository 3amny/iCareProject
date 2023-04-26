import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getAllDoctorsThunk, getDoctorByIdThunk } from "./allDoctorsThunk";

const initialStateFilter = {
  search: "",
  searchClinics: "all",
  searchSpecialty: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
  isLoading: true,
  doctors: [],
  currentDoctor: null,
  totalDoctors: 0,
  numOfPages: 0,
  page: 1,
  ...initialStateFilter,
};

export const getAllDoctors = createAsyncThunk(
  "allDoctors/getAllDoctors",
  getAllDoctorsThunk
);
export const getDoctorById = createAsyncThunk(
  "allDoctors/getDoctorById",
  getDoctorByIdThunk
);

const allDoctorsSlice = createSlice({
  name: "allDoctors",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    clearFilters: (state) => {
      return { ...state, ...initialStateFilter };
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearDoctorsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllDoctors.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.doctors = payload.doctors;
        state.totalDoctors = payload.totalDoctors;
        state.numOfPages = payload.numOfPages;
      })
      .addCase(getAllDoctors.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getDoctorById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDoctorById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentDoctor = payload.doctor;
      })
      .addCase(getDoctorById.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const {
  showLoading,
  hideLoading,
  clearFilters,
  handleChange,
  changePage,
  clearDoctorsState,
} = allDoctorsSlice.actions;
export default allDoctorsSlice.reducer;
