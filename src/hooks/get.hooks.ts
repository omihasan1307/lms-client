import {
  getBookingList,
  getProductDetails,
  getProductList,
  getProfile,
} from "@/utils/get/get.action";
import { useQuery } from "@tanstack/react-query";

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
export const useGetBookingList = () => {
  return useQuery({
    queryKey: ["BOOKING_LIST"],
    queryFn: getBookingList,
  });
};
