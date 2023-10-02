import { getTokens, setAuthToken, setRefreshToken } from "@/utils/auth";
import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use(
  (config) => {
    const token = getTokens().accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (r) => r.data,
  async function (error) {
    const { refreshToken } = getTokens();
    const originalRequest = error.config;

    if (originalRequest._retry) {
      setAuthToken();
      setRefreshToken();
    } else if (error.response.status === 401) {
      originalRequest._retry = true;

      return await axios
        .get("/api/v1/auth/refresh", {
          headers: {
            "Refresh-token": refreshToken,
          },
        })
        .then(({ data }) => {
          setAuthToken(data.token);
          setRefreshToken(data.refreshToken);
          originalRequest.headers.Authorization = data.token;
          return api(originalRequest);
        })
        .catch((err) => {
          console.error(err);
          setAuthToken();
          setRefreshToken();
        });
    }

    return Promise.reject(error);
  }
);
