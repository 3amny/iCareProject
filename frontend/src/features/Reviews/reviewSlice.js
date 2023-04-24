import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createReviewThunk,
  deleteReviewThunk,
  getAllReviewsBySubjectIdThunk,
  updateReviewThunk,
} from "./reviewThunk";

const initialState = {
  review: null,
  editReviewId: "",
  Loading: false,
  isEditing: false,
  totalReviews: 0,
  comment: "",
  review: 0,
  reviews: [],
};

export const getAllReviewsBySubjectId = createAsyncThunk(
  "review/getAllReviewsBySubjectId",
  getAllReviewsBySubjectIdThunk
);

export const createReview = createAsyncThunk(
  "review/createReview",
  createReviewThunk
);
export const updateReview = createAsyncThunk(
  "review/updateReview",
  updateReviewThunk
);
export const deleteReview = createAsyncThunk(
  "review/deleteReview",
  deleteReviewThunk
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setEditReview: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
    showLoading: (state) => {
      state.Loading = true;
    },
    hideLoading: (state) => {
      state.Loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReview.pending, (state) => {
        state.Loading = true;
      })
      .addCase(createReview.fulfilled, (state, { payload }) => {
        state.review = payload.review;
        state.Loading = false;
        toast.success("Review was created");
      })
      .addCase(createReview.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      })
      .addCase(deleteReview.fulfilled, ({ payload }) => {
        toast.success("Review was deleted");
      })
      .addCase(deleteReview.rejected, ({ payload }) => {
        toast.error(payload);
      })
      .addCase(updateReview.pending, (state) => {
        state.Loading = true;
      })
      .addCase(updateReview.fulfilled, (state) => {
        state.Loading = false;
        toast.success("Review was updated!");
      })
      .addCase(updateReview.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      })
      .addCase(getAllReviewsBySubjectId.pending, (state) => {
        state.Loading = true;
      })
      .addCase(getAllReviewsBySubjectId.fulfilled, (state, { payload }) => {
        state.Loading = false;
        state.reviews = payload.reviews;
      })
      .addCase(getAllReviewsBySubjectId.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      });
  },
});

export default reviewSlice.reducer;
export const {
  handleChange,
  setEditReview,
  clearValues,
  hideLoading,
  showLoading,
} = reviewSlice.actions;
