import apiFetch from "utils/requests/axios";
import { logoutUser } from "./userSlice";
import { clearDoctorsState } from "features/Admin/Doctor/getAll/allDoctorsSlice";
import { clearValues } from "features/Admin/Specialties/specialtySlice";
import { clearClinicsState } from "features/Admin/Clinic/getAll/allClinicsSlice";
export const registerUserThunk = async (user, thunkAPI) => {
  const url = "/auth/register";
  try {
    const response = await apiFetch.post(url, user);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue(`Unauthorized access! Logging out...`);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  const url = "/auth/login";
  try {
    const response = await apiFetch.post(url, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  const url = "/auth/update";
  try {
    const response = await apiFetch.patch(url, user, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const clearUserStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearDoctorsState());
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(clearClinicsState());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject;
  }
};
