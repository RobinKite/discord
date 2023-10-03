import { Endpoint } from "@/constants/api";
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
    isLoading: false,
  },
  reducers: {
    loginUser: (state, action) => {
      const { id, email, avatar, name, userName } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.name = name;
      state.id = id;
      state.isLoading = false;
      state.avatar = avatar;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.password = null;
      state.name = null;
      state.isLoading = false;
      setAuthToken();
      setRefreshToken();
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
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

export const setUser = createAsyncThunk(Endpoint.ME, async (_, thunkAPI) => {
  const result = await api.get(Endpoint.ME);
  const { id, email, avatar, name, userName } = result.data;
  thunkAPI.dispatch(loginUser({ id, email, avatar, name, userName }));
  return result;
});

export const login = createAsyncThunk(
  Endpoint.LOGIN,
  async (data, thunkAPI) => {
    const result = await api.post(Endpoint.LOGIN, data);
    const { access_token, refresh_token } = result.data;
    const { id, email, avatar, name, userName } = result.data.user;
    thunkAPI.dispatch(loginUser({ id, email, avatar, name, userName }));
    setAuthToken(access_token);
    setRefreshToken(refresh_token);
    return result;
  }
);

export const register = createAsyncThunk(
  Endpoint.REGISTER,
  async (data, thunkAPI) => {
    const result = await api.post(Endpoint.REGISTER, data);
    const { access_token, refresh_token } = result.data;
    const { id, email, avatar, name, userName } = result.data.user;
    thunkAPI.dispatch(loginUser({ id, email, avatar, name, userName }));
    setAuthToken(access_token);
    setRefreshToken(refresh_token);
    console.log(data, result);
    thunkAPI.dispatch(loginUser({ id, email, avatar, name, userName }));
    return result;
  }
);

export const {
  loginUser,
  logoutUser,
  setToken,
  clearToken,
  updateUserProfile,
  setUserRoles,
  setUserPermissions,
  setIsLoading,
} = authSlice.actions;
export default authSlice.reducer;
