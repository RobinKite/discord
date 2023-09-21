import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    token: null,
    isLoggedIn: false,
    roles: [],
    permissions: [],
  },
  reducers: {
    setUser: (state, action) => {
      const { email, userName, password, firstName, lastName } = action.payload;
      state.userName = action.payload;
      state.isLoggedIn = true;

      state.email = email;
      state.userName = userName;
      state.password = password;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    logoutUser: state => {
      state.token = null;
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.password = null;
      state.firstName = null;
      state.lastName = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: state => {
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
