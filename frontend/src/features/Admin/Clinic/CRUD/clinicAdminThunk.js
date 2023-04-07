import { authUserHeader } from "utils/requests/authHeaders";
import apiFetch from "utils/requests/axios";
import {
  getAllClinics,
  hideLoading,
  showLoading,
} from "../getAll/allClinicsSlice";
import { clearValues } from "./clinicAdminSlice";

export const createClinicAdminThunk = async (clinic, thunkAPI) => {
  try {
    const response = await apiFetch.post(
      "/admin/clinics",
      clinic,
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
export const updateClinicAdminThunk = async (
  { clinicId, clinic },
  thunkAPI
) => {
  try {
    const response = await apiFetch.patch(
      `/admin/clinics/${clinicId}`,
      clinic,
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteClinicAdminThunk = async ({clinicId}, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await apiFetch.delete(
      `/admin/clinics/${clinicId}`,
      authUserHeader(thunkAPI)
    );

    thunkAPI.dispatch(getAllClinics());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
