import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("user")) || null,
    isAuthenticated: JSON.parse(sessionStorage.getItem("user")) ? true : false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const loginUser = (state) => state.auth.user;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
