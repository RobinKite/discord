import { Status } from "@/constants";
import { Endpoint } from "@/constants/api";
import { api } from "@/services/client";
import { blurple } from "@/theme/designTokens";
import { setAuthToken, setRefreshToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SAMPLE_FRIENDS } from "@/constants/mock";
import { setServers } from "./serverSlice";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: null,
    email: null,
    name: null,
    isLoggedIn: true,
    roles: [],
    permissions: [],
    isLoading: false,
    status: Status.ONLINE, //mock
    userRegistrationDate: "09.19.2023", //mock
    serverRegistrationDate: "09.10.2023", //mock
    bannerColor: blurple, //mock
    friends: SAMPLE_FRIENDS,
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
    logoutUser: state => {
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
    setUserFriends: (state, action) => {
      state.friends = action.payload;
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
    try {
      const result = await api.post(Endpoint.LOGIN, data);
      const { access_token, refresh_token } = result.data;
      const { id, email, avatar, name, userName } = result.data.user;
      thunkAPI.dispatch(loginUser({ id, email, avatar, name, userName }));
      thunkAPI.dispatch(setServers());
      setAuthToken(access_token);
      setRefreshToken(refresh_token);
      return result;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 400) {
            throw new Error("Login failed: " + error.response.data.message);
          } else if (!error.response.status) {
            throw new Error("Network error: " + error.message);
          }
          throw new Error("Login failed: " + error.response.data.message);
        }
      }
      throw new Error(
        "Login failed. It's possible that this is due to a lack of internet access."
      );
    }
  }
);

export const register = createAsyncThunk(
  Endpoint.REGISTER,
  async (data, thunkAPI) => {
    try {
      const result = await api.post(Endpoint.REGISTER, data);
      const { access_token, refresh_token } = result.data;
      const { id, email, avatar, name, userName } = result.data.user;
      thunkAPI.dispatch(loginUser({ id, email, avatar, name, userName }));
      setAuthToken(access_token);
      setRefreshToken(refresh_token);
      return result;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 409) {
            throw new Error(
              "Registration failed: " + error.response.data.message
            );
          } else if (error.response.status === 400) {
            throw new Error("Network error: " + error.response.data.message);
          } else if (!error.response.status) {
            throw new Error("Network error: " + error.message);
          }
          throw new Error(
            "Registration failed: " + error.response.data.message
          );
        }
      }
      throw new Error(
        "Registration failed. It's possible that this is due to a lack of internet access."
      );
    }
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
