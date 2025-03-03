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
    const response = await axiosInstance.get(`/shop/tours/`);
    console.log(response);
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
export const getBookingList = async (params = {}) => {
  try {
    const response = await axiosInstance.get(`/shop/bookings/`, {
      params,
    });
    return response?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

const fetchBlogs = async (data: any) => {
  try {
    const params = {
      search: data.search ? data.search : "",
      page: data.page ? data.page : "",
      page_size: data.page_size ? data.page_size : 10,
    };
    const response = await axiosInstance.get(`/blog/blogs/`, { params });
    return response.data;
  } catch (error) {
    return error;
  }
};
const fetchBlogDetail = async (id: any) => {
  try {
    const response = await axiosInstance.get(`/blog/blogs/${id}/`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export { fetchBlogs, fetchBlogDetail };
