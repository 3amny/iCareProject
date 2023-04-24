import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
import { getAllReviewsBySubjectId } from "features/Reviews/reviewSlice";

export const getAllDoctorsThunk = async (_, thunkAPI) => {
  let url = "/doctors";
  try {
    const response = await apiFetch.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getDoctorByIdThunk = async (doctorId, thunkAPI) => {
  let url = `/doctors/${doctorId}`;
  try {
    const response = await apiFetch.get(url, authUserHeader);
    thunkAPI.dispatch(
      getAllReviewsBySubjectId({ subject: "doctors", subjectId: doctorId })
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
