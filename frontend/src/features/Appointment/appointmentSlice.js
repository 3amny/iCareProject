import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createAppointmentThunk,
  deleteDoctorAppointmentThunk,
  deleteUserAppointmentThunk,
  getAppointmentsByDoctorIdThunk,
  getAppointmentsByUserIdThunk,
  getAvailableTimeSlotsThunk,
  updateAppointmentStatusThunk,
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
  appointments: [],
  appoinment: null,
  status: "",
  statusList: ["Upcoming", "Finished", "In process"],
  totalAppointments: 0,
};

export const getAvailableTimeSlots = createAsyncThunk(
  "appointment/getAllAppointments",
  getAvailableTimeSlotsThunk
);
export const getAppointmentsByUserId = createAsyncThunk(
  "appointments/getAppointmentsByUserId",
  getAppointmentsByUserIdThunk
);
export const getAppointmentsByDoctorId = createAsyncThunk(
  "appointments/getAppointmentsByDoctorId",
  getAppointmentsByDoctorIdThunk
);
export const createAppointment = createAsyncThunk(
  "appointment/createAppointment",
  createAppointmentThunk
);
export const updateAppointmentStatus = createAsyncThunk(
  "appointment/updateAppointmentStatus",
  updateAppointmentStatusThunk
);
export const deleteUserAppointment = createAsyncThunk(
  "appointment/deleteUserAppointment",
  deleteUserAppointmentThunk
);
export const deleteDoctorAppointment = createAsyncThunk(
  "appointment/deleteUserAppointment",
  deleteDoctorAppointmentThunk
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
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
    setEditAppointmentStatus: (state, { payload }) => {
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
      .addCase(deleteUserAppointment.rejected, ({ payload }) => {
        toast.error(payload);
      })
      .addCase(updateAppointmentStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAppointmentStatus.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Status was updated!");
      })
      .addCase(updateAppointmentStatus.rejected, (state, { payload }) => {
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
      })
      .addCase(getAppointmentsByUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAppointmentsByUserId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.appointments = payload.appointments;
        state.totalAppointments = payload.totalAppointments;
      })
      .addCase(getAppointmentsByUserId.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getAppointmentsByDoctorId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAppointmentsByDoctorId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.appointments = payload.appointments;
        state.totalAppointments = payload.totalAppointments;
      })
      .addCase(getAppointmentsByDoctorId.rejected, (state, { payload }) => {
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
  showLoading,
  setTimeSlots,
  setFinalDateValues,
  setEditAppointmentStatus,
} = appointmentSlice.actions;
