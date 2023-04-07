import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
export const getAllClinicsThunk = async (_, thunkAPI) => {
  let url = "/admin/clinics";
  try {
    const response = await apiFetch.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
