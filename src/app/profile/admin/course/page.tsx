import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { getCourses } from "@/actions/get.action";
import { notFound } from "next/navigation";

import CourseCard from "./CourseCard";

export const dynamic = "force-dynamic";

const CoursesPage = async ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  const searchQuery = searchParams?.search || "";
  const courses: any = await getCourses(searchQuery);

  if (!courses || courses.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Header with Create Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">
            Courses
          </h1>
          <p className="text-lg text-gray-600">
            Learn from industry experts with practical, project-based courses.
          </p>
        </div>
        <Link
          href="/profile/admin/create-course"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md"
        >
          <FaPlus />
          Create New Course
        </Link>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses?.data?.map((course: any) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
