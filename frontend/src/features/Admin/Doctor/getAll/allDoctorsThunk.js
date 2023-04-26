import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
import { getAllReviewsBySubjectId } from "features/Reviews/reviewSlice";
import { getAllClinics } from "features/Admin/Clinic/getAll/allClinicsSlice";
import { getAllSpecialties } from "features/Admin/Specialties/specialtySlice";

export const getAllDoctorsThunk = async (_, thunkAPI) => {
  const { page, search, searchSpecialty, searchClinics, sort } =
    thunkAPI.getState().allDoctors;
  let url = `/doctors?clinic=${searchClinics}&docType=${searchSpecialty}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const response = await apiFetch.get(url);
    thunkAPI.dispatch(getAllClinics());
    thunkAPI.dispatch(getAllSpecialties());

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
