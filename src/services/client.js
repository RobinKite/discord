import { getTokens, setAuthToken, setRefreshToken } from "@/utils/auth";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://64.226.102.49:8080/api/v1",
});

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
