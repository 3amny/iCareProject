import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiFetch from "utils/requests/axios";
import { getAllUsersThunk } from "./allUsersThunk";

const initialState = {
  isLoading: true,
  users: [],
  totalUsers: 0,
  numOfPages: 1,
  page: 1,
};

export const getAllUsers = createAsyncThunk(
  "allUsers/getAllUsers",
  getAllUsersThunk
);

const allUsersSlice = createSlice({
  name: "allUsers",
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
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload.users;
        state.totalUsers = payload.totalUsers;
      })
      .addCase(getAllUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { showLoading, hideLoading } = allUsersSlice.actions;
export default allUsersSlice.reducer;
