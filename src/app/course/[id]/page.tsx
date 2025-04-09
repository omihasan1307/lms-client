import { getSingleCourse } from "@/actions/get.action";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import { AiFillBook } from "react-icons/ai";
import { FaStar, FaRegClock, FaUserGraduate } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";

const CourseDetailsPage = async ({ params }: { params: any }) => {
  const { id } = await params;
  const { data: courseDetails } = await getSingleCourse(id);

  const { price, title, description, thumbnail, modules = [] } = courseDetails || {};

  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Course Header */}
        <div className="mb-8 text-center">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
            Development
          </span>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center text-yellow-500">
              <FaStar className="mr-1" />
              <span className="font-medium text-gray-700">4.9 (128 reviews)</span>
            </div>
            <div className="flex items-center text-gray-500">
              <FaUserGraduate className="mr-1" />
              <span>1,245 students</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About This Course</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{description}</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <FaRegClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Duration</h4>
                    <p className="text-gray-500">8 weeks</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <AiFillBook className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Lessons</h4>
                    <p className="text-gray-500">42</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <IoMdPricetag className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Level</h4>
                    <p className="text-gray-500">Beginner</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <FaUserGraduate className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Certificate</h4>
                    <p className="text-gray-500">Yes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modules & Lectures Accordion */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Modules and Lectures</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {modules.map((module: any, index: number) => (
                  <AccordionItem key={module._id} value={`module-${index}`}>
                    <AccordionTrigger className="text-gray-800">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      {module.lectures?.length > 0 ? (
                        <ul className="space-y-2 pl-6">
                          {module.lectures.map((lecture: any, i: number) => (
                            <li key={i} className="text-gray-600">
                              - {lecture.title}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 pl-6">No lectures added yet.</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Column: Course Card */}
          <div className="col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={thumbnail}
                    alt="Course Thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-gray-800">${price}</span>
                    <span className="text-sm line-through text-gray-400">$650</span>
                  </div>
                  <p className="text-green-600 font-medium mb-4">
                    23% discount ends in 2 days
                  </p>

                  <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 mb-4">
                    Enroll Now
                  </button>

                  <button className="w-full py-3 px-4 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-200">
                    Add to Wishlist
                  </button>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-3">This course includes:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        42 hours on-demand video
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        15 coding exercises
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Full lifetime access
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Certificate of completion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CourseDetailsPage;
