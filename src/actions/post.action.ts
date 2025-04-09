import axiosInstance from "@/lib/AxiosInstance";

export const createCourse = async (data: any) => {
  try {
    const res = await axiosInstance.post("/courses", data);
    return res?.data;
  } catch (error: any) {
    console.log("Course Error", error?.response?.data?.message);
    throw new Error(`Course Error : ${error?.response?.data?.message}`);
  }
};
export const deleteCourse = async (id: string): Promise<string> => {
  try {
    const res = await axiosInstance.delete(`/courses/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Failed to delete course"
    );
  }
};
export const updateCourse = async (id: string, data: any): Promise<string> => {
  try {
    const res = await axiosInstance.patch(`/courses/${id}`, data);
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Failed to updated course"
    );
  }
};

export const createModule = async (data: any) => {
  try {
    const res = await axiosInstance.post("/modules", data);
    return res?.data;
  } catch (error: any) {
    console.log("Course Error", error?.response?.data?.message);
    throw new Error(`Course Error : ${error?.response?.data?.message}`);
  }
};

export const deleteModule = async (id: string): Promise<string> => {
  try {
    const res = await axiosInstance.delete(`/modules/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Failed to delete course"
    );
  }
};

export const updateModule = async (id: string, data: any): Promise<string> => {
  try {
    const res = await axiosInstance.patch(`/modules/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Failed to update Module"
    );
  }
};

export const createLecture = async (data: any) => {
  try {
    const res = await axiosInstance.post("/lecture", data);
    return res?.data;
  } catch (error: any) {
    console.log("Course Error", error?.response?.data?.message);
    throw new Error(`Lecture Error : ${error?.response?.data?.message}`);
  }
};

export const deleteLecture = async (id: string): Promise<string> => {
  try {
    const res = await axiosInstance.delete(`/lecture/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Failed to delete Lecture"
    );
  }
};

export const updateLecture = async (id: string, data: any): Promise<string> => {
  try {
    const res = await axiosInstance.patch(`/lecture/${id}`, data, {});
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Failed to update Lecture"
    );
  }
};
