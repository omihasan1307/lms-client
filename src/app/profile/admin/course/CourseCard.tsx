"use client";
import { useDeletedCourse } from "@/hooks/post.hook";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { FaRegClock, FaStar, FaTrash, FaUserGraduate } from "react-icons/fa6";
import { toast } from "react-toastify";

const CourseCard = ({ course }: { course: any }) => {
  const { mutate: deleteCourseMutation } = useDeletedCourse();
  const router = useRouter();

  const handleDelete = (id: string) => {
    deleteCourseMutation(id, {
      onSuccess: () => {
        router.refresh();
      },
      onError: (error) => {},
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex-grow">
        <div className="relative h-48 w-full">
          <Image
            src={course.thumbnail || "/default-course.jpg"}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold">
            {course.category || "Development"}
          </div>
        </div>
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-3">
            <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
              {course.level || "Beginner"}
            </span>
            {course.rating && (
              <div className="flex items-center text-yellow-500">
                <FaStar className="mr-1" />
                <span className="text-gray-700 font-medium">
                  {course.rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {course.description}
          </p>

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <FaUserGraduate className="mr-1" />
            <span className="mr-4">{course.students || 0} students</span>
            {course.duration && (
              <>
                <FaRegClock className="mr-1" />
                <span>{course.duration}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            {course.price === 0 ? (
              <span className="text-xl font-bold text-green-600">Free</span>
            ) : (
              <span className="text-xl font-bold text-gray-800">
                ${course.price}
              </span>
            )}
            {course.originalPrice && course.price < course.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            <Link
              href={`/profile/admin/updated-course/${course._id}`}
              className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
              title="Edit course"
            >
              <FaEdit size={18} />
            </Link>
            <button
              className="p-2 text-red-600 hover:text-red-800 transition-colors"
              title="Delete course"
              onClick={() => handleDelete(course._id)}
            >
              <FaTrash size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
