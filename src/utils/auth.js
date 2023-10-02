import { Tokens } from "@/constants";
import { api } from "@/services/client";

export const getTokens = () => {
  return {
    accessToken: localStorage.getItem(Tokens.ACCESS),
    refreshToken: localStorage.getItem(Tokens.REFRESH),
  };
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `${token}`;
    localStorage.setItem(Tokens.ACCESS, token);
  } else {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem(Tokens.ACCESS);
  }
};

export const setRefreshToken = (token) => {
  if (token) {
    localStorage.setItem(Tokens.REFRESH, token);
  } else {
    localStorage.removeItem(Tokens.REFRESH);
  }
};
