// actions/get.action.ts
import { baseApi } from "@/Helper/ApiBase";
import axiosInstance from "@/lib/AxiosInstance";

// Global fetch timeout (8 seconds - below Vercel's 10s limit)
const FETCH_TIMEOUT = 8000;

const fetchWithTimeout = async (url: string, options: RequestInit = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      next: { revalidate: 60 },
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

export const getCourses = async (search: string = ""): Promise<any[]> => {
  try {
    const url = search
      ? `${baseApi}/courses?title=${encodeURIComponent(search)}`
      : `${baseApi}/courses`;

    return await fetchWithTimeout(url);
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return []; // Return empty array instead of failing
  }
};

export const getSingleCourse = async (id: number) => {
  try {
    return await fetchWithTimeout(`${baseApi}/courses/${id}`);
  } catch (error: any) {
    console.error("Fetch error:", error);
    throw new Error(error?.message || "Failed to fetch Course");
  }
};

export const getModules = async (): Promise<any[]> => {
  try {
    return await fetchWithTimeout(`${baseApi}/modules`);
  } catch (error) {
    console.error("Failed to fetch Modules:", error);
    return [];
  }
};

export const getSingleModule = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/modules/${id}`, {
      timeout: FETCH_TIMEOUT,
    });
    return res.data;
  } catch (error: any) {
    console.error("Axios error:", error);
    throw new Error(error?.message || "Failed to fetch module");
  }
};

export const getLectures = async (): Promise<any[]> => {
  try {
    const data = await fetchWithTimeout(
      `${baseApi}/lecture`
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch lectures:", error);
    return [];
  }
};

export const getSingleLecture = async (id: number) => {
  try {
    const res = await axiosInstance.get(
      `/lecture/${id}`,
      {
        timeout: FETCH_TIMEOUT,
      }
    );
    return res.data;
  } catch (error: any) {
    console.error("Axios error:", error);
    throw new Error(error?.message || "Failed to fetch lecture");
  }
};
