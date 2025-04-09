import React from "react";
import {
  FiUsers,
  FiBook,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";
import Link from "next/link";
import { getCourses } from "@/actions/get.action";

const AdminPage = async () => {
  // Mock data - replace with your actual data
  const stats = [
    {
      title: "Total Users",
      value: "1,243",
      icon: <FiUsers size={24} />,
      change: "+12%",
      trend: "up",
    },
    {
      title: "Total Courses",
      value: "56",
      icon: <FiBook size={24} />,
      change: "+5%",
      trend: "up",
    },
    {
      title: "Revenue",
      value: "$24,560",
      icon: <FiDollarSign size={24} />,
      change: "+8.2%",
      trend: "up",
    },
    {
      title: "Completion Rate",
      value: "78%",
      icon: <FiBarChart2 size={24} />,
      change: "-2%",
      trend: "down",
    },
  ];

  const quickActions = [
    {
      title: "Create Course",
      icon: <FiBook size={20} />,
      link: "/profile/admin/create-course",
    },
    {
      title: "Create Modules",
      icon: <FiUsers size={20} />,
      link: "/profile/admin/create-module",
    },
    {
      title: "Create Lectures",
      icon: <FiBarChart2 size={20} />,
      link: "/profile/admin/create-lecture",
    },
  ];

  const courses: any = await getCourses("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              <FiSettings size={20} />
            </button>
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats?.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div
                className={`mt-4 text-sm ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                <span>{stat.change}</span> from last month
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions?.map((action, index) => (
              <Link key={index} href={action.link} legacyBehavior>
                <a className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-200 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                    {action.icon}
                  </div>
                  <span className="font-medium text-gray-900">
                    {action.title}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Courses */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Recent Courses
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {courses?.data?.map((course: any) => (
              <div
                key={course.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {course.title || "tt"}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {course.price || "tt"} students enrolled
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{course.date}</span>
                    <Link href={`/admin/courses/${course.id}`} legacyBehavior>
                      <a className="text-sm font-medium text-blue-600 hover:text-blue-800">
                        View
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-gray-200 text-right">
            <Link href="/profile/admin/course" legacyBehavior>
              <a className="text-sm font-medium text-blue-600 hover:text-blue-800">
                View all courses →
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
