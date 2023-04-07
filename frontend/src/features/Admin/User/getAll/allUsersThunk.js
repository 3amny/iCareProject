import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
export const getAllUsersThunk = async (_, thunkAPI) => {
  let url = "/admin/users";
  try {
    const response = await apiFetch.get(url, authUserHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
