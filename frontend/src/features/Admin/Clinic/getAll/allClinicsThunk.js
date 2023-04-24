import { getAllReviewsBySubjectId } from "features/Reviews/reviewSlice";
import apiFetch from "utils/requests/axios";
export const getAllClinicsThunk = async (_, thunkAPI) => {
  let url = "/clinics";
  try {
    const response = await apiFetch.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getClinicByIdThunk = async (clinicId, thunkAPI) => {
  let url = `/clinics/${clinicId}`;
  try {
    const response = await apiFetch.get(url);
    thunkAPI.dispatch(
      getAllReviewsBySubjectId({ subject: "clinics", subjectId: clinicId })
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
