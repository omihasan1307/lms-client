import axios from "axios";
import { baseApi } from "@/Helper/ApiBase";

const axiosInstance = axios.create({
  baseURL: baseApi,
  // headers: {
  //   "Content-Type": "application/json",
  // },
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
});

axiosInstance.interceptors.request.use(
  (config) => {
    let accessToken = "";

    if (typeof window !== "undefined") {
      const localStorageToken = localStorage.getItem("accessToken");

      if (localStorageToken) {
        accessToken = localStorageToken;
      }
    }

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Ensure client-side before removing the token
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
