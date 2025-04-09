"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { getCourses } from "@/actions/get.action";
import { useCreateModule } from "@/hooks/post.hook";

const moduleSchema = z.object({
  title: z.string().min(3, "Module title must be at least 3 characters"),
  courseId: z.string().min(1, "Please select a course"),
});

type ModuleFormData = z.infer<typeof moduleSchema>;

const CreateModule = () => {
  const [courses, setCourses] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { mutate: handleCreateModule } = useCreateModule();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ModuleFormData>({
    resolver: zodResolver(moduleSchema),
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getCourses();
        setCourses(res);
      } catch (err) {
        toast.error("Failed to load courses");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const onSubmit = async (data: ModuleFormData) => {
    try {
      await handleCreateModule(data, {
        onSuccess: () => {
          reset();
        },
        onError: () => {},
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">
        Create New Module
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Module Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Module Title
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Enter module title"
            className={`w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Select Course */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Course
          </label>
          <select
            {...register("courseId")}
            className={`w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.courseId ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isLoading}
          >
            <option value="">-- Select a course --</option>
            {courses?.data?.map((course: any) => (
              <option key={course._id} value={course._id}>
                {course.title}
              </option>
            ))}
          </select>
          {errors.courseId && (
            <p className="text-sm text-red-600 mt-1">
              {errors.courseId.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Creating..." : "Create Module"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateModule;
