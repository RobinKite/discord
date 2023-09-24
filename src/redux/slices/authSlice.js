import { api } from "@/services/client";
// import { setAuthToken, setRefreshToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: null,
    email: null,
    name: null,
    token: null,
    isLoggedIn: false,
    roles: [],
    permissions: [],
  },
  reducers: {
    setUser: (state, action) => {
      const { email, userName, name } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.name = name;
    },
    logoutUser: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.password = null;
      state.name = null;
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

export const login = createAsyncThunk(
  "auth/login",
  async (data /* thunkAPI */) => {
    const result = await api.post("auth/login", data);
    // const { token, refreshToken } = result;
    // setAuthToken(token);
    // setRefreshToken(refreshToken);
    console.log(data, result);
    // thunkAPI.dispatch(setUser(...data));
    // return result;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data /* thunkAPI */) => {
    const result = await api.post("auth/register", data);
    // const { token, refreshToken } = result;
    // setAuthToken(token);
    // setRefreshToken(refreshToken);
    console.log(data, result);
    // thunkAPI.dispatch(setUser(...data));
    // return result;
  }
);

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
