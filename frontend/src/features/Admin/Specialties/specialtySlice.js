import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createSpecialtyThunk,
  deleteSpecialtyThunk,
  getAllSpecialtiesThunk,
  updateSpecialtyThunk,
} from "./specialtyThunk";

const initialState = {
  editSpecialtyId: "",
  isLoading: false,
  isEditing: false,
  name: "",
  totalSpecalties: 0,
  specialties: [],
};

export const getAllSpecialties = createAsyncThunk(
  "specialty/getAllSpecialties",
  getAllSpecialtiesThunk
);

export const createSpecialty = createAsyncThunk(
  "specialty/createSpecialty",
  createSpecialtyThunk
);
export const updateSpecialty = createAsyncThunk(
  "specialty/updateSpecialty",
  updateSpecialtyThunk
);
export const deleteSpecialty = createAsyncThunk(
  "specialty/deleteSpecialty",
  deleteSpecialtyThunk
);

const specialtySlice = createSlice({
  name: "specialty",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setEditSpecialty: (state, { payload }) => {
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
      .addCase(createSpecialty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSpecialty.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Specialty Created");
      })
      .addCase(createSpecialty.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteSpecialty.rejected, ({ payload }) => {
        toast.error(payload);
      })
      .addCase(updateSpecialty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSpecialty.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Clinic was updated!");
      })
      .addCase(updateSpecialty.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getAllSpecialties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSpecialties.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.specialties = payload.specialties;
      })
      .addCase(getAllSpecialties.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

// console.log(userAuthSlice)

export default specialtySlice.reducer;
export const {
  handleChange,
  setEditSpecialty,
  clearValues,
  hideLoading,
  showLoading,
} = specialtySlice.actions;
