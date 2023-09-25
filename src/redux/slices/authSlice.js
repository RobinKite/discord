import { api } from "@/services/client";
import { setAuthToken, setRefreshToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: null,
    email: null,
    name: null,
    isLoggedIn: false,
    roles: [],
    permissions: [],
  },
  reducers: {
    setUser: (state, action) => {
      const { id, email, avatar, name, userName } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.name = name;
      state.id = id;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.password = null;
      state.name = null;
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

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  console.log("waiting...");
  const result = await api.post("auth/login", data);
  console.log("done");
  const { access_token, refresh_token } = result.data;
  const { id, email, avatar, name, userName } = result.data.user;
  thunkAPI.dispatch(setUser({ id, email, avatar, name, userName }));

  setAuthToken(access_token);
  setRefreshToken(refresh_token);
  return result;
});

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    console.log("waiting...");
    const result = await api.post("auth/register", data);
    console.log("done");
    const { access_token, refresh_token } = result.data;
    const { id, email, avatar, name, userName } = result.data.user;
    setAuthToken(access_token);
    setRefreshToken(refresh_token);
    console.log(data, result);
    thunkAPI.dispatch(setUser({ id, email, avatar, name, userName }));
    return result;
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
