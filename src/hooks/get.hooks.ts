import axiosInstance from "@/lib/AxiosInstance";
import envConfig from "@/lib/env.config";
import {
  getBookingList,
  getProductDetails,
  getProductList,
  getProfile,
} from "@/utils/get/get.action";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductDetails = (type: string | null, id: number) => {
  return useQuery({
    queryKey: ["PRODUCT_LIST", type, id],
    queryFn: () => getProductDetails(type, id),
  });
};

export const useGetProduct = () => {
  return useQuery({
    queryKey: ["PRODUCT_LIST"],
    queryFn: getProductList,
  });
};
export const useGetProfile = () => {
  return useQuery({
    queryKey: ["PROFILE"],
    queryFn: getProfile,
  });
};
export const useGetBookingList = (status?: string) => {
  return useQuery({
    queryKey: ["BOOKING_LIST"],
    queryFn: () => getBookingList({ status }),
  });
};

export const useGetBookingById = (id: string | null) => {
  return useQuery({
    queryKey: ["booking", id],
    queryFn: async () => {
      if (!id) return null;
      const res = await axiosInstance.get(`/shop/bookings/${id}`);
      return res.data;
    },
    enabled: !!id, // Only fetch if id exists
  });
};
