import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllRolesThunk,
  createRoleThunk,
  updateRoleThunk,
  deleteRoleThunk,
} from "./RoleThunk";

const initialState = {
  editRoleId: "",
  isLoading: false,
  isEditing: false,
  name: "",
  totalRoles: 0,
  roles: [],
};

export const getAllRoles = createAsyncThunk(
  "role/getAllRoles",
  getAllRolesThunk
);
export const createRole = createAsyncThunk("role/createRole", createRoleThunk);
export const updateRole = createAsyncThunk("role/updateRole", updateRoleThunk);
export const deleteRole = createAsyncThunk("role/deleteRole", deleteRoleThunk);

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setEditRole: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRole.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Role Created");
      })
      .addCase(createRole.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteRole.rejected, ({ payload }) => {
        toast.error(payload);
      })
      .addCase(updateRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRole.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Role was updated!");
      })
      .addCase(updateRole.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getAllRoles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRoles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.roles = payload.roles;
      })
      .addCase(getAllRoles.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default roleSlice.reducer;
export const {
  handleChange,
  setEditRole,
  clearValues,
  hideLoading,
  showLoading,
} = roleSlice.actions;
