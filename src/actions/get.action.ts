// actions/get.action.ts
import { baseApi } from "@/Helper/ApiBase";
import axiosInstance from "@/lib/AxiosInstance";

export const getCourses = async (search: string = ""): Promise<any[]> => {
  try {
    const url = search
      ? `${baseApi}/courses?title=${encodeURIComponent(search)}`
      : `${baseApi}/courses`;

    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
};

export const getSingleCourse = async (id: number) => {
  try {
    const response = await fetch(`${baseApi}/courses/${id}`);
    return await response.json();
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error?.message || "Failed to fetch Course item");
  }
};

export const getModules = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${baseApi}/modules`, { cache: "no-store" });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch Modules:", error);
    return [];
  }
};

export const getSingleModule = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/modules/${id}`);
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error?.message || "Failed to fetch modules item");
  }
};

export const getLectures = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${baseApi}/lecture`, { cache: "no-store" });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    console.log("Lectures data:", data); // Add this log to inspect the response
    return data;
  } catch (error) {
    console.error("Failed to fetch lecture:", error);
    return [];
  }
};

export const getSingleLecture = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/lecture/${id}`);
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error?.message || "Failed to fetch lecture item");
  }
};
