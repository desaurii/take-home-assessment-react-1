import axios from "axios";
let isRefreshing = false;
let failedQueue = [];

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await axios.post("https://dummyjson.com/auth/refresh", {
          refreshToken,
          expiresInMins: 1,
        });

        const newAccessToken = res.data.accessToken;

        localStorage.setItem("token", newAccessToken);

        failedQueue.forEach((prom) => {
          prom.resolve(newAccessToken);
        });

        failedQueue = [];
        isRefreshing = false;

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        failedQueue.forEach((prom) => {
          prom.reject(refreshError);
        });

        failedQueue = [];
        isRefreshing = false;

        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  },
);
