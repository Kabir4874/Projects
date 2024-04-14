import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    console.log(info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(adminLogin.pending, (state) => {
    //     state.loader = true;
    //   })
    //   .addCase(adminLogin.fulfilled, (state) => {
    //     state.loader = false;
    //     // You might update other state properties here upon successful login
    //   })
    //   .addCase(adminLogin.rejected, (state) => {
    //     state.loader = false;
    //     // You might handle login failure here, e.g., display an error message
    //   });
  },
});

export default authReducer.reducer;
