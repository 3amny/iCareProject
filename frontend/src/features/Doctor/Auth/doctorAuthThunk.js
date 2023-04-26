import apiFetch from "utils/requests/axios";
import { logoutDoctor } from "./doctorAuthSlice";
import { authDoctorHeader } from "utils/requests/authDoctorHeaders";

export const registerDoctorThunk = async (url, doctor, thunkAPI) => {
  try {
    const response = await apiFetch.post(url, doctor);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutDoctor());
      return thunkAPI.rejectWithValue(`Unauthorized access! Logging out...`);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginDoctorThunk = async (url, doctor, thunkAPI) => {
  try {
    const response = await apiFetch.post(url, doctor);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateDoctorThunk = async (url, doctor, thunkAPI) => {
  try {
    const response = await apiFetch.patch(
      url,
      doctor,
      authDoctorHeader(thunkAPI)
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
