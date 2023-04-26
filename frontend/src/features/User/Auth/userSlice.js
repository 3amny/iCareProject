import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getRoleFromLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "utils/localStorage/localStorage";
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  clearUserStoreThunk,
} from "./userThunk";

const initialState = {
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  role: getRoleFromLocalStorage(),
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  registerUserThunk
);

export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);

export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);
export const clearStoreUser = createAsyncThunk(
  "user/clearStoreUser",
  clearUserStoreThunk
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.role = null;
      state.token = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user, token, role } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user, token, role);
        toast.success(`Welcome, ${user.firstName}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user, token, role } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.role = role;
        addUserToLocalStorage(user, token, role);
        toast.success(`Welcome, ${user.firstName}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user, token, role } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.role = role;
        addUserToLocalStorage(user, token, role);
        toast.success(`User information updated`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStoreUser.rejected, (state, { payload }) => {
        toast.error("There was an error");
      });
  },
});

// console.log(userAuthSlice)
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
