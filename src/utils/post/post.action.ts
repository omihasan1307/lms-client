// "use server";

import axiosInstance from "@/lib/AxiosInstance";

export const reviewToDb = async (data: any) => {
  try {
    const res = await axiosInstance.post("/shop/reviews/", data);
    return res?.data;
  } catch (error: any) {
    console.log("Review Error", error);
    throw new Error(`Review Error : ${error?.message}`);
  }
};
export const updatedProfileToDb = async (data: any) => {
  try {
    const res = await axiosInstance.patch("/auth/users/me/", data);
    return res?.data;
  } catch (error: any) {
    console.log("Review Error", error);
    throw new Error(`Review Error : ${error?.message}`);
  }
};

export const bookActivity = async (data: any) => {
  try {
    const response = await axiosInstance.post(
      `/shop/lmss/g/create/bookings/`,
      data
    );
    return response?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
