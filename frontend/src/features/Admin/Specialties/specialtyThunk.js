import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
import {
  clearValues,
  getAllSpecialties,
  hideLoading,
  showLoading,
} from "./specialtySlice";
import { logoutUser } from "features/User/Auth/userSlice";

export const getAllSpecialtiesThunk = async (_, thunkAPI) => {
  let url = "/admin/specialties";
  try {
    const response = await apiFetch.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const createSpecialtyThunk = async (specialty, thunkAPI) => {
  try {
    const response = await apiFetch.post(
      "/admin/specialties",
      specialty,
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
export const updateSpecialtyThunk = async (
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

export const deleteSpecialtyThunk = async (specialtyId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await apiFetch.delete(
      `/admin/specialties/${specialtyId}`,
      authUserHeader(thunkAPI)
    );

    thunkAPI.dispatch(getAllSpecialties());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
