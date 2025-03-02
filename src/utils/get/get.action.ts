// "use server";
import axiosInstance from "@/lib/AxiosInstance";
import envConfig from "@/lib/env.config";
import axios from "axios";

export const getProductDetails = async (type: string | null, id: Number) => {
  try {
    const response = await axios.get(
      `${envConfig.baseApi}/shop/tours/${type}/${id}`
    );
    return response?.data;
  } catch (error: any) {
    console.log(error.response?.data?.error?.message);
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch tour Details"
    );
  }
};

export const getProductList = async () => {
  try {
    const response = await axios.get(`${envConfig.baseApi}/shop/tours/`);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
export const getProfile = async () => {
  try {
    const response = await axiosInstance.get(`/auth/users/me/`);
    return response?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
