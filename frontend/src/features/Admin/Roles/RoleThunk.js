import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
import { clearValues, getAllRoles, hideLoading, showLoading } from "./RoleSlice";
import { logoutUser } from "features/User/Auth/userSlice";

export const getAllRolesThunk = async (_, thunkAPI) => {
  let url = "/admin/roles";
  try {
    const response = await apiFetch.get(url, authUserHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createRoleThunk = async (role, thunkAPI) => {
  let url = "/admin/roles";
  try {
    const response = await apiFetch.post(url, role, authUserHeader(thunkAPI));
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

export const updateRoleThunk = async ({ roleId, role }, thunkAPI) => {
  try {
    const response = await apiFetch.patch(
      `/admin/roles/${roleId}`,
      role,
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteRoleThunk = async (roleId , thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await apiFetch.delete(
      `/admin/roles/${roleId}`,
      authUserHeader(thunkAPI)
    );

    thunkAPI.dispatch(getAllRoles());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
