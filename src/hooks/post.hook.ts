import {
  createCourse,
  createLecture,
  createModule,
  deleteCourse,
  deleteLecture,
  deleteModule,
  updateCourse,
  updateLecture,
  updateModule,
} from "@/actions/post.action";
import axiosInstance from "@/lib/AxiosInstance";
import { reviewToDb, updatedProfileToDb } from "@/utils/post/post.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateCourse = () => {
  return useMutation({
    mutationKey: ["COURSE"],
    mutationFn: async (data: any) => await createCourse(data),
    onSuccess: (data) => {
      toast.success("Course successfully completed");
    },
    onError: (data: any) => {
      console.log("error", data);
      toast.error(data || "Course added Failed");
    },
  });
};

export const useDeletedCourse = () => {
  return useMutation<string, Error, string>({
    mutationKey: ["COURSE"],
    mutationFn: async (id: string) => {
      const response = await deleteCourse(id);
      return response;
    },
    onSuccess: () => {
      toast.success("Course successfully deleted");
    },
    onError: (error: Error) => {
      console.error("Error deleting course:", error);
      toast.error(error.message || "Failed to delete course");
    },
  });
};

type UpdateCourseArgs = {
  id: string;
  data: any;
};

export const useUpdatedCourse = () => {
  return useMutation<string, Error, UpdateCourseArgs>({
    mutationKey: ["COURSE"],
    mutationFn: async ({ id, data }) => {
      const response = await updateCourse(id, data);
      return response;
    },
    onSuccess: () => {
      toast.success("Course successfully updated");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update course");
    },
  });
};

export const useCreateModule = () => {
  return useMutation({
    mutationKey: ["MODULE"],
    mutationFn: async (data: any) => await createModule(data),
    onSuccess: (data) => {
      toast.success("Module successfully completed");
    },
    onError: (data: any) => {
      console.log("error", data);
      toast.error(data || "Module added Failed");
    },
  });
};

export const useDeletedModule = () => {
  return useMutation<string, Error, string>({
    mutationKey: ["MODULE"],
    mutationFn: async (id: string) => {
      const response = await deleteModule(id);
      return response;
    },
    onSuccess: () => {
      toast.success("Module successfully deleted");
    },
    onError: (error: Error) => {
      console.error("Error deleting Module:", error);
      toast.error(error.message || "Failed to delete Module");
    },
  });
};

type UpdateModuleArgs = {
  id: string;
  data: any;
};

export const useUpdatedModule = () => {
  return useMutation<string, Error, UpdateModuleArgs>({
    mutationKey: ["COURSE"],
    mutationFn: async ({ id, data }) => {
      const response = await updateModule(id, data);
      return response;
    },
    onSuccess: () => {
      toast.success("Module successfully updated");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update Module");
    },
  });
};

export const useCreateLecture = () => {
  return useMutation({
    mutationKey: ["LECTURE"],
    mutationFn: async (data: any) => await createLecture(data),
    onSuccess: (data) => {
      toast.success("Lecture successfully completed");
    },
    onError: (data: any) => {
      console.log("error", data);
      toast.error(data || "Lecture added Failed");
    },
  });
};

export const useDeletedLecture = () => {
  return useMutation<string, Error, string>({
    mutationKey: ["LECTURE"],
    mutationFn: async (id: string) => {
      const response = await deleteLecture(id);
      return response;
    },
    onSuccess: () => {
      toast.success("Lecture successfully deleted");
    },
    onError: (error: Error) => {
      console.error("Error deleting Lecture:", error);
      toast.error(error.message || "Failed to delete Lecture");
    },
  });
};

type UpdateLectureArgs = {
  id: string;
  data: any;
};

export const useUpdatedLecture = () => {
  return useMutation<string, Error, UpdateLectureArgs>({
    mutationKey: ["LECTURE"],
    mutationFn: async ({ id, data }) => {
      const response = await updateLecture(id, data);
      return response;
    },
    onSuccess: () => {
      toast.success("Lecture successfully updated");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update Lecture");
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
