import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { notFound } from "next/navigation";
import { getLectures } from "@/actions/get.action";
import LectureCard from "./LectureCard";

export const dynamic = "force-dynamic";

const LecturePage = async () => {
  const lectures: any = await getLectures();

  if (!lectures || lectures.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Header with Create Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">
            Lecture
          </h1>
          <p className="text-lg text-gray-600">
            Learn from industry experts with practical, project-based Lecture.
          </p>
        </div>
        <Link
          href="/profile/admin/create-lecture"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md"
        >
          <FaPlus />
          Create New Lecture
        </Link>
      </div>

      {/* Lecture Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lectures?.data?.map((lecture: any) => (
          <LectureCard key={lecture._id} lecture={lecture} />
        ))}
      </div>
    </div>
  );
};

export default LecturePage;
