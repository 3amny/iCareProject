import { authUserHeader } from "utils/requests/authHeaders";
import apiFetch from "utils/requests/axios";
import { getAllUsers, hideLoading, showLoading } from "../getAll/allUsersSlice";
import { clearValues } from "./userAdminSlice";

export const updateUserAdminThunk = async ({ user, userId }, thunkAPI) => {
  try {
    const response = await apiFetch.patch(
      `/admin/users/${userId}`,
      user,
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteUserAdminThunk = async (userId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await apiFetch.delete(
      `/admin/users/${userId}`,
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(getAllUsers());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
