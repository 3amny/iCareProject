import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createAppointmentThunk,
  deleteAppointmentThunk,
  getAvailableTimeSlotsThunk,
  updateAppointmentThunk,
} from "./appointmentThunk";

const initialState = {
  editAppointmentId: "",
  startDate: null,
  endDate: null,
  notes: "",
  date: null,
  startTime: null,
  endTime: null,
  timeSlots: [],
  isLoading: false,
  isReady: false,
};

export const getAvailableTimeSlots = createAsyncThunk(
  "appointment/getAllAppointments",
  getAvailableTimeSlotsThunk
);
export const createAppointment = createAsyncThunk(
  "appointment/createAppointment",
  createAppointmentThunk
);
export const updateAppointment = createAsyncThunk(
  "appointment/updateAppointment",
  updateAppointmentThunk
);
export const deleteAppointment = createAsyncThunk(
  "appointment/deleteAppointment",
  deleteAppointmentThunk
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setIsReady: (state, { payload }) => {
      return { ...state, isReady: true, ...payload };
    },
    setDate: (state, { payload }) => {
      return { ...state, date: payload.date, ...payload };
    },
    setTimeSlots: (state, { payload }) => {
      return {
        ...state,
        startTime: payload.startTime,
        endTime: payload.endTime,
        ...payload,
      };
    },
    setFinalDateValues: (state, { payload }) => {
      return {
        ...state,
        startDate: payload.startDateValues,
        endDate: payload.endDateValues,
        ...payload,
      };
    },
    setEditAppointment: (state, { payload }) => {
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
      .addCase(createAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAppointment.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Appointment was Created");
      })
      .addCase(createAppointment.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteAppointment.rejected, ({ payload }) => {
        toast.error(payload);
      })
      .addCase(updateAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAppointment.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Clinic was updated!");
      })
      .addCase(updateAppointment.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getAvailableTimeSlots.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAvailableTimeSlots.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.timeSlots = payload.availableTimeSlots;
      })
      .addCase(getAvailableTimeSlots.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

// console.log(userAuthSlice)

export default appointmentSlice.reducer;
export const {
  setDate,
  handleChange,
  setEditAppointment,
  clearValues,
  hideLoading,
  setIsReady,
  showLoading,
  setIsOpen,
  setTimeSlots,
  setFinalDateValues,
} = appointmentSlice.actions;
