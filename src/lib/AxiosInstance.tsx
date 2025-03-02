import axios from "axios";
import Cookies from "js-cookie";
import { ApiBaseMysql } from "@/Helper/ApiBase";

const axiosInstance = axios.create({
  baseURL: ApiBaseMysql,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken =
      Cookies.get("access_token") || localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `JWT ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Cookies.remove("access_token");
      // localStorage.removeItem("accessToken");

      // if (typeof window !== "undefined") {
      //   window.location.href = "/login";
      // }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
