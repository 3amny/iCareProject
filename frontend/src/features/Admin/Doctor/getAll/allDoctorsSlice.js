import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getAllDoctorsThunk } from "./allDoctorsThunk";

const initialStateFilter = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
  isLoading: true,
  doctors: [],
  totalDoctors: 0,
  numOfPages: 1,
  page: 1,
};

export const getAllDoctors = createAsyncThunk(
  "allDoctors/getAllDoctors",
  getAllDoctorsThunk
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
      })
      .addCase(getAllDoctors.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { showLoading, hideLoading } = allDoctorsSlice.actions;
export default allDoctorsSlice.reducer;
