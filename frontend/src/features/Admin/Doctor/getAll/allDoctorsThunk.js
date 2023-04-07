import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";

export const getAllDoctorsThunk = async (_, thunkAPI) => {
  let url = "/admin/doctors";
  try {
    const response = await apiFetch.get(url, authUserHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
