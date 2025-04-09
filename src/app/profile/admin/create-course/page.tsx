"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { useCreateCourse } from "@/hooks/post.hook";

export const dynamic = "force-dynamic"; // Add this

// Validation schema
const courseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.number().min(0, "Price cannot be negative"),
  description: z.string().min(10, "Description must be at least 10 characters"),

  thumbnail: z
    .any()
    .refine((files) => {
      if (typeof window === "undefined") return true;
      return files?.length > 0;
    }, "Thumbnail is required")
    .refine((files) => files?.length > 0, "Thumbnail is required")
    .refine((files) => files[0]?.size <= 5_000_000, "Max file size is 5MB")
    .refine(
      (files) =>
        ["image/jpeg", "image/png", "image/webp"].includes(files[0]?.type),
      "Only .jpg, .png, and .webp formats are supported"
    ),
});

type CourseFormData = z.infer<typeof courseSchema>;

const CreateCourse = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutate: handleCourse, isPending } = useCreateCourse();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
    },
  });

  // Watch thumbnail for preview
  const thumbnail = watch("thumbnail");
  React.useEffect(() => {
    if (thumbnail?.length > 0) {
      const file = thumbnail[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [thumbnail]);

  const onSubmit = async (data: CourseFormData) => {
    if (!data.thumbnail || data.thumbnail.length === 0) {
      toast.error("Please select a thumbnail image.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price.toString());
    formData.append("description", data.description);

    // Check if thumbnail file is selected
    if (data?.thumbnail && data?.thumbnail?.length > 0) {
      formData.append("thumbnail", data?.thumbnail?.[0]);
    }

    // Debugging - Log the thumbnail file before submitting
    console.log("Thumbnail File:", data.thumbnail[0]);

    try {
      await handleCourse(formData, {
        onSuccess: () => {
          reset();
          setPreviewImage(null);
          toast.success("Course Created Successfully");
        },
      });
    } catch (error) {
      console.error("Error creating course:", error);
      toast.error("Course creation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Course
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Course Title */}
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
            placeholder="Title"
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
            placeholder="Learn React Native from scratch and build cross-platform mobile apps"
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

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => {
              reset();
              setPreviewImage(null);
            }}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
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
                Creating...
              </>
            ) : (
              "Create Course"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
