"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { getSingleModule } from "@/actions/get.action";
import { useUpdatedModule } from "@/hooks/post.hook";

// Schema: only title
const updateModuleSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
});

type UpdateModuleFormData = z.infer<typeof updateModuleSchema>;

const UpdatedModule = ({ params }: { params: any }) => {
  const { id } = params;
  const router = useRouter();
  const pathname = usePathname();
  const { mutate: updateModule, isPending } = useUpdatedModule();

  const [module, setModule] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateModuleFormData>({
    resolver: zodResolver(updateModuleSchema),
  });

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const { data } = await getSingleModule(id);
        setModule(data);
        reset({ title: data.title });
      } catch {
        toast.error("Failed to load module");
      }
    };

    fetchModule();
  }, [id, reset]);

  const onSubmit = async (data: UpdateModuleFormData) => {
    updateModule(
      { id: module._id, data: { title: data.title } },
      {
        onSuccess: () => {
          router.push(pathname);
        },

        onError: () => toast.error("Update failed"),
      }
    );
  };

  if (!module)
    return <div className="text-center py-10">Loading module...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Update Module Title</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title")}
            className={`mt-1 block w-full px-3 py-2 rounded border shadow-sm sm:text-sm ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter module title"
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? "Updating..." : "Update Title"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedModule;
