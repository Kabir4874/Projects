import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_projects = createAsyncThunk(
  "project/get_projects",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/client/projects-get", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_project = createAsyncThunk(
  "project/get_project",
  async (projectId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(`/client/project-get/${projectId}`, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const projectReducer = createSlice({
  name: "project",
  initialState: {
    projects: [],
    project: "",
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
    builder
      .addCase(get_projects.fulfilled, (state, { payload }) => {
        state.projects = payload.projects;
      })
      .addCase(get_project.fulfilled, (state, { payload }) => {
        state.project = payload.project;
      });
  },
});

export const { messageClear } = projectReducer.actions;
export default projectReducer.reducer;
