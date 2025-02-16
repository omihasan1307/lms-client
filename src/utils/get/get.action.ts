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
  let fetchOptions = {};
  fetchOptions = {
    cache: "no-store",
  };

  try {
    const response = await axios.get(
      `${envConfig.baseApi}/shop/tours/`,
      fetchOptions
    );
    return response?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
