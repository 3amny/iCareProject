import { authUserHeader } from "utils/requests/authHeaders";
import apiFetch from "utils/requests/axios";
import {
  getAllDoctors,
  hideLoading,
  showLoading,
} from "../getAll/allDoctorsSlice";
import { clearValues } from "./doctorSlice";

export const updateDoctorAdminThunk = async (
  { doctor, doctorId },
  thunkAPI
) => {
  try {
    
    const response = await apiFetch.patch(
      `/doctors/${doctorId}`,
      doctor,
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteDoctorAdminThunk = async (doctorId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await apiFetch.delete(
      `/doctors/${doctorId}`,
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(getAllDoctors());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
