import axios from "axios";
// import { cookies } from "next/headers";
import envConfig from "./env.config";

const axiosInstance = axios.create({
  baseURL: "http://gt.codecanvascreation.com",
  // baseURL: envConfig.baseApi,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // const cookiesStore = cookies();
    const accessToken = localStorage.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
