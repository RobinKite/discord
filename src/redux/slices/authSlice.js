import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "@/services/client";

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
    // setUser: (state, action) => {
    //   state.email = action.payload.user.email;
    //   state.password = action.payload.user.password;
    //   state.token = action.payload.access_token;

    //   state.isLoggedIn = true;
    // },
    refreshUser: state => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    logoutUser: state => {
      state.isLoggedIn = false;
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
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { user, access_token } = action.payload.data;
        state.email = user.email;
        state.name = user.name;
        state.userName = user.username;
        state.token = access_token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { user, access_token } = action.payload.data;
        state.email = user.email;
        state.name = user.name;
        state.userName = user.username;
        state.token = access_token;
        state.isLoggedIn = true;
      });
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
