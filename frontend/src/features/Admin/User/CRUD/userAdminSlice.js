import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { updateUserAdminThunk, deleteUserAdminThunk } from "./userAdminThunk";
import { getAllRoles } from "features/Admin/Roles/RoleSlice";

const initialState = {
  editUserId: "",
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  phone: "",
  city: "",
  steet: "",
  role: "",
  dateOfBirth: null,
  rolesOptions: [],
  isLoading: false,
};

export const updateUserAdmin = createAsyncThunk(
  "userAdmin/updateUserAdmin",
  updateUserAdminThunk
);
export const deleteUserAdmin = createAsyncThunk(
  "userAdmin/deleteUserAdmin",
  deleteUserAdminThunk
);
export const fetchRolesOptions = createAsyncThunk(
  "userAdmin/fetchRolesOptions",
  async (_, { dispatch }) => {
    const response = await dispatch(getAllRoles());
    return response.payload;
  }
);
const userAdminSlice = createSlice({
  name: "userAdmin",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setEditUser: (state, { payload }) => {
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
      .addCase(deleteUserAdmin.rejected, ({ payload }) => {
        toast.error(payload);
      })
      .addCase(updateUserAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserAdmin.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("User was updated!");
      })
      .addCase(updateUserAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(fetchRolesOptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rolesOptions = action.payload.roles;
      })
      .addCase(fetchRolesOptions.rejected, (state, action) => {
        console.log(action.payload.error.message);
        toast.error(action.payload);
      });
  },
});

// console.log(userAuthSlice)

export default userAdminSlice.reducer;
export const { handleChange, setEditUser, clearValues } =
  userAdminSlice.actions;
