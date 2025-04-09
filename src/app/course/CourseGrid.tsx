import CourseCard from "./CourseCard";

const CourseGrid = ({ courses }: any) => {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No courses found</p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {courses?.data?.map((course: any) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;
