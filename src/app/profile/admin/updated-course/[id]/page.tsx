"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { useUpdatedCourse } from "@/hooks/post.hook";
import { getSingleCourse } from "@/actions/get.action";

const updateCourseSchema = z.object({
  title: z.string().min(3),
  price: z.number().min(0),
  description: z.string().min(10),
  thumbnail: z.any().optional(),
});

type UpdateCourseFormData = z.infer<typeof updateCourseSchema>;

const UpdateCourse = ({ params }: { params: any }) => {
  const { id } = params;
  const router = useRouter();
  const pathname = usePathname();
  const { mutate: updateCourse, isPending } = useUpdatedCourse();

  const [course, setCourse] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UpdateCourseFormData>({
    resolver: zodResolver(updateCourseSchema),
  });

  const thumbnail = watch("thumbnail");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await getSingleCourse(id);
        setCourse(data);
        reset({
          title: data.title,
          price: data.price,
          description: data.description,
        });
        setPreviewImage(data.thumbnail);
      } catch (err) {
        toast.error("Failed to load course data");
      }
    };

    fetchCourse();
  }, [id, reset]);

  useEffect(() => {
    if (thumbnail?.length > 0) {
      const file = thumbnail[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [thumbnail]);

  const onSubmit = async (data: UpdateCourseFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price.toString());
    formData.append("description", data.description);

    if (data?.thumbnail && data?.thumbnail?.length > 0) {
      formData.append("thumbnail", data.thumbnail[0]);
    }

    updateCourse(
      { id: course._id, data: formData },
      {
        onSuccess: () => {
          router.push(pathname);
        },

        onError: () => toast.error("Update failed"),
      }
    );
  };

  if (!course) {
    return <div className="text-center py-10">Loading course data...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Update Course</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Course Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title")}
            className={`mt-1 block w-full rounded px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.title ? "border-red-500" : "border"
            }`}
            placeholder="Course Title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price (BDT)
          </label>
          <input
            id="price"
            type="number"
            {...register("price", { valueAsNumber: true })}
            className={`mt-1 block w-full rounded px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.price ? "border-red-500" : "border"
            }`}
            placeholder="3300"
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register("description")}
            className={`mt-1 block w-full rounded px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.description ? "border-red-500" : "border"
            }`}
            placeholder="Write course details..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Thumbnail */}
        <div>
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-700"
          >
            Thumbnail Image
          </label>
          <input
            id="thumbnail"
            type="file"
            accept="image/*"
            {...register("thumbnail")}
            className={`mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${
              errors.thumbnail ? "border-red-500" : "border"
            }`}
          />
          {previewImage && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <img
                src={previewImage}
                alt="Thumbnail preview"
                className="h-40 object-cover rounded-md border"
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end space-x-3">
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Updating...
              </>
            ) : (
              "Update Course"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourse;
