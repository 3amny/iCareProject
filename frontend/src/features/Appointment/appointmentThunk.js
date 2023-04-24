import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
import {
  clearValues,
  getAllSpecialties,
  hideLoading,
  showLoading,
} from "./appointmentSlice";

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
export const createAppointmentThunk = async (
  { doctorId, startDate, endDate, notes },
  thunkAPI
) => {
  let url = `/doctors/${doctorId}/appointment`;
  console.log(
    `doctorId: ${doctorId} startDate: ${startDate} endDate:${endDate} notes:${notes}`
  );
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
export const updateAppointmentThunk = async (
  { specialtyId, specialty },
  thunkAPI
) => {
  try {
    const response = await apiFetch.patch(
      `/admin/specialties/${specialtyId}`,
      specialty,
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteAppointmentThunk = async (specialtyId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await apiFetch.delete(
      `/admin/specialties/${specialtyId}`,
      authUserHeader(thunkAPI)
    );

    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
