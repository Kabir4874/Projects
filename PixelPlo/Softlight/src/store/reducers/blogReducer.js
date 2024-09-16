import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_blogs = createAsyncThunk(
  "blog/get_blogs",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/client/blogs-get", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_blog = createAsyncThunk(
  "blog/get_blog",
  async (blogId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(`/client/blog-get/${blogId}`, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const blogReducer = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    blog: "",
    comments: [],
    totalBlog: 0,
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_blogs.fulfilled, (state, { payload }) => {
        state.blogs = payload.blogs;
      })
      .addCase(get_blog.fulfilled, (state, { payload }) => {
        state.blog = payload.blog;
      });
  },
});

export const { messageClear } = blogReducer.actions;
export default blogReducer.reducer;
