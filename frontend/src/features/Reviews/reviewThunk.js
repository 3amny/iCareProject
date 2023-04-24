import apiFetch from "utils/requests/axios";
import { authUserHeader } from "utils/requests/authHeaders";
import {
  clearValues,
  getAllReviewsBySubjectId,
  hideLoading,
  showLoading,
} from "./reviewSlice";
import { logoutUser } from "features/User/Auth/userSlice";

export const getAllReviewsBySubjectIdThunk = async (
  { subject, subjectId },
  thunkAPI
) => {
  let url = `/${subject}/${subjectId}/reviews`;
  try {
    const response = await apiFetch.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const getAllReviewsThunk = async ({ limit }, thunkAPI) => {
  let url = `/reviews`;
  try {
    const response = await apiFetch.get(url, {
      params: {
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const createReviewThunk = async (
  { subject, subjectId, comment, rating },
  thunkAPI
) => {
  let url = `/${subject}/${subjectId}/reviews`;
  try {
    const response = await apiFetch.post(
      url,
      { comment, rating },
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(
      getAllReviewsBySubjectId({ subject: subject, subjectId: subjectId })
    );

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateReviewThunk = async (
  { subjectId, subject, reviewId, comment, rating },
  thunkAPI
) => {
  let url = `/${subject}/${subjectId}/reviews/${reviewId}`;
  try {
    const response = await apiFetch.patch(
      url,
      { comment, rating },
      authUserHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(
      getAllReviewsBySubjectId({ subject: subject, subjectId: subjectId })
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteReviewThunk = async (
  { subject, subjectId, reviewId },
  thunkAPI
) => {
  thunkAPI.dispatch(showLoading());
  let url = `/${subject}/${subjectId}/reviews/${reviewId}`;
  try {
    const response = await apiFetch.delete(url, authUserHeader(thunkAPI));

    thunkAPI.dispatch(
      getAllReviewsBySubjectId({ subject: subject, subjectId: subjectId })
    );
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
