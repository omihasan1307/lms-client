import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaRegClock, FaUserGraduate } from 'react-icons/fa';

const CourseCard = ({ course }: { course: any }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/course/${course._id}`}>
        <div className="relative h-48">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
              {course.level || 'Beginner'}
            </span>
            {course.rating && (
              <div className="flex items-center text-yellow-500">
                <FaStar className="mr-1" />
                <span className="text-gray-700 font-medium">{course.rating}</span>
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {course.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
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

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-800">
              ${course.price}
            </span>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;