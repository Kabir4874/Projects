import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_reviews = createAsyncThunk(
  "home/get_reviews",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/client/reviews-get", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const homeReducer = createSlice({
  name: "home",
  initialState: {
    reviews: [],
    totalProject: 0,
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_reviews.fulfilled, (state, { payload }) => {
      state.reviews = payload.reviews;
    });
  },
});

export const { messageClear } = homeReducer.actions;
export default homeReducer.reducer;
