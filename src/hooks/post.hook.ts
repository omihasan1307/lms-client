import { reviewToDb, updatedProfileToDb } from "@/utils/post/post.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useReview = () => {
  return useMutation({
    mutationKey: ["REVIEW"],
    mutationFn: async (data: any) => await reviewToDb(data),
    onSuccess: (data) => {
      toast.success("Review successfully completed");
    },
    onError: (data: any) => {
      toast.error(data?.details?.error || "Review added Failed");
    },
  });
};
export const useUpdateProfile = () => {
  return useMutation({
    mutationKey: ["PROFILE"],
    mutationFn: async (data: any) => await updatedProfileToDb(data),
    onSuccess: (data) => {
      toast.success("Profile Updated successfully completed");
    },
    onError: (data: any) => {
      toast.error(data?.details?.error || "Review added Failed");
    },
  });
};
