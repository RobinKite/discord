import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: null,
    email: null,
    password: null,
    name: null,
    token: null,
    isLoggedIn: false,
    roles: [],
    permissions: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    updateUserProfile: (state, action) => {
      state.userName = { ...state.userName, ...action.payload };
    },
    setUserRoles: (state, action) => {
      state.roles = action.payload;
    },
    setUserPermissions: (state, action) => {
      state.permissions = action.payload;
    },
  },
});

export const {
  setUser,
  logoutUser,
  setToken,
  clearToken,
  updateUserProfile,
  setUserRoles,
  setUserPermissions,
} = authSlice.actions;
export default authSlice.reducer;
