"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { useCreateLecture } from "@/hooks/post.hook";
import { getModules } from "@/actions/get.action";

// Validation schema
const lectureSchema = z.object({
  moduleId: z.string().min(1, "Module is required"),
  title: z.string().min(3, "Title must be at least 3 characters"),
  videoUrl: z.string().url("Invalid video URL").min(1, "Video URL is required"),
  pdfNotes: z
    .any()
    .refine((files) => files?.length > 0, "PDF Notes are required")
    .refine((files) => files[0]?.size <= 5_000_000, "Max file size is 5MB")
    .refine(
      (files) => ["application/pdf"].includes(files[0]?.type),
      "Only .pdf formats are supported"
    ),
});

type LectureFormData = z.infer<typeof lectureSchema>;

const CreateLecture = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    // Fetch module data on component mount
    const fetchModules = async () => {
      const data: any = await getModules();
      setModules(data?.data || []);
    };
    fetchModules();
  }, []);

  const { mutate: handleLecture } = useCreateLecture(); // Hook for creating lecture

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<LectureFormData>({
    resolver: zodResolver(lectureSchema),
    defaultValues: {
      moduleId: "",
      title: "",
      videoUrl: "",
      pdfNotes: undefined, // Set to undefined instead of null
    },
  });

  const pdfNotes = watch("pdfNotes");

  // Preview PDF Notes if a file is selected
  React.useEffect(() => {
    if (pdfNotes?.length > 0) {
      const file = pdfNotes[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [pdfNotes]);

  const onSubmit: SubmitHandler<LectureFormData> = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("moduleId", data.moduleId);
    formData.append("title", data.title);
    formData.append("videoUrl", data.videoUrl);

    if (data?.pdfNotes && data?.pdfNotes?.length > 0) {
      formData.append("pdfNotes", data?.pdfNotes?.[0]);
    }

    try {
      await handleLecture(formData, {
        onSuccess: () => {
          reset();
          setPreviewImage(null);
          toast.success("Lecture Created Successfully");
        },
      });
    } catch (error) {
      console.error("Error creating lecture:", error);
      toast.error("Lecture creation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Lecture
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Module Selection */}
        <div>
          <label
            htmlFor="moduleId"
            className="block text-sm font-medium text-gray-700"
          >
            Select Module
          </label>
          <select
            id="moduleId"
            {...register("moduleId")}
            className={`mt-1 block w-full rounded px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.moduleId ? "border-red-500" : "border"
            }`}
          >
            <option value="">Select a module</option>
            {modules?.map((module: any) => (
              <option key={module._id} value={module._id}>
                {module.title}
              </option>
            ))}
          </select>
          {errors.moduleId && (
            <p className="mt-1 text-sm text-red-600">
              {errors.moduleId.message}
            </p>
          )}
        </div>

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Lecture Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title")}
            className={`mt-1 block w-full rounded px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.title ? "border-red-500" : "border"
            }`}
            placeholder="Lecture Title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* Video URL */}
        <div>
          <label
            htmlFor="videoUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Video URL
          </label>
          <input
            id="videoUrl"
            type="url"
            {...register("videoUrl")}
            className={`mt-1 block w-full rounded px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.videoUrl ? "border-red-500" : "border"
            }`}
            placeholder="Video URL"
          />
          {errors.videoUrl && (
            <p className="mt-1 text-sm text-red-600">
              {errors.videoUrl.message}
            </p>
          )}
        </div>

        {/* PDF Notes */}
        <div>
          <label
            htmlFor="pdfNotes"
            className="block text-sm font-medium text-gray-700"
          >
            PDF Notes
          </label>
          <input
            id="pdfNotes"
            type="file"
            accept="application/pdf"
            {...register("pdfNotes")}
            className={`mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${
              errors.pdfNotes ? "border-red-500" : "border"
            }`}
          />

          {previewImage && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <img
                src={previewImage}
                alt="PDF preview"
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
              "Create Lecture"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateLecture;
