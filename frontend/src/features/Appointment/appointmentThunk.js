import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
import {
  clearValues,
  getAppointmentsByDoctorId,
  getAppointmentsByUserId,
  hideLoading,
  showLoading,
} from "./appointmentSlice";
import { authDoctorHeader } from "utils/requests/authDoctorHeaders";

export const getAvailableTimeSlotsThunk = async (
  { doctorId, chosenDate },
  thunkAPI
) => {
  let url = `/doctors/${doctorId}/appointment`;
  try {
    const response = await apiFetch.get(url, {
      headers: authUserHeader(thunkAPI).headers,
      params: {
        date: chosenDate,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const getAppointmentsByDoctorIdThunk = async (_, thunkAPI) => {
  let url = "/account/doctor-appointments";
  try {
    const response = await apiFetch.get(url, authDoctorHeader(thunkAPI));
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const getAppointmentsByUserIdThunk = async (_, thunkAPI) => {
  let url = "/account/user-appointments";
  try {
    const response = await apiFetch.get(url, authUserHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const createAppointmentThunk = async (
  { doctorId, startDate, endDate, notes },
  thunkAPI
) => {
  let url = `/doctors/${doctorId}/appointment`;
  try {
    const response = await apiFetch.post(
      url,
      { startDate, endDate, notes },
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const updateAppointmentStatusThunk = async (
  { appointmentId, status },
  thunkAPI
) => {
  let url = `/account/doctor-appointments/${appointmentId}`;
  try {
    const response = await apiFetch.patch(
      url,
      { status },
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteUserAppointmentThunk = async (appointmentId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  let url = `/account/user-appointments/${appointmentId}`;
  try {
    const response = await apiFetch.delete(url, authUserHeader(thunkAPI));
    thunkAPI.dispatch(getAppointmentsByUserId());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteDoctorAppointmentThunk = async (appointmentId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  let url = `/account/doctor-appointments/${appointmentId}`;
  try {
    const response = await apiFetch.delete(url, authDoctorHeader(thunkAPI));
    thunkAPI.dispatch(getAppointmentsByDoctorId());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
