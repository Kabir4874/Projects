import { createSlice } from "@reduxjs/toolkit";

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
