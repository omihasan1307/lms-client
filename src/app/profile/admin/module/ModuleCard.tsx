"use client";
import { useDeletedCourse, useDeletedModule } from "@/hooks/post.hook";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash } from "react-icons/fa";

const ModuleCard = ({ module }: { module: any }) => {
  const { mutate: deleteModuleMutation } = useDeletedModule();
  const router = useRouter();

  const handleDelete = (id: string) => {
    deleteModuleMutation(id, {
      onSuccess: () => router.refresh(),
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex-grow block">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Title: {module.title}
          </h3>
          <h3 className=" mb-3">
            Course:
            <span className="text-green-700 font-semibold">
              {module?.course?.title || "No Courses"}
            </span>
          </h3>
        </div>
      </div>
      <div className="p-4 border-t flex justify-end gap-3">
        <Link
          href={`/profile/admin/updated-module/${module._id}`}
          className="text-blue-600 hover:text-blue-800"
          title="Edit module"
        >
          <FaEdit size={18} />
        </Link>
        <button
          onClick={() => handleDelete(module._id)}
          className="text-red-600 hover:text-red-800"
          title="Delete module"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;
