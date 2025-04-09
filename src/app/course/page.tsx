import { getCourses } from "@/actions/get.action";
import MainLayout from "@/layout/MainLayout";
import CourseGrid from "./CourseGrid";
import SearchForm from "../_components/SearchForm";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const CoursesPage = async ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  const searchQuery = searchParams?.search || "";
  const courses = await getCourses(searchQuery);

  if (!courses || courses.length === 0) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts with practical, project-based courses.
          </p>
        </div>

        <SearchForm initialQuery={searchQuery} />
        <CourseGrid courses={courses} />
      </div>
    </MainLayout>
  );
};

export async function generateMetadata({ params, searchParams }: any) {
  const searchQuery = searchParams.search || "";
  const courses = await getCourses(searchQuery);

  return {
    title: `Courses `,
    description: `Courses related to "${searchQuery}"`,
  };
}

export default CoursesPage;
