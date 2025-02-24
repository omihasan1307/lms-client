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
