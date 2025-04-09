import { FiUser, FiMail, FiCalendar, FiSettings, FiBook, FiAward } from 'react-icons/fi';
import Image from 'next/image';

const UserProfile = () => {
  // Mock user data - replace with your actual data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    joinDate: "January 2023",
    avatar: "/default-avatar.jpg", // Replace with your avatar path
    bio: "Frontend developer and UI enthusiast. Building interactive web experiences with React and Next.js.",
    stats: {
      coursesCompleted: 12,
      certificates: 5,
      activeCourses: 3
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative h-32 bg-gradient-to-r from-blue-500 to-blue-600">
            {/* Cover Photo */}
          </div>
          
          <div className="px-6 pb-6 -mt-16 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
              <div className="relative h-24 w-24 rounded-full border-4 border-white bg-white shadow-md">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.bio}</p>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-gray-600">
                    <FiMail className="mr-2" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="mr-2" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <FiSettings />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                <FiBook size={20} />
              </div>
              <div>
                <p className="text-gray-500">Courses Completed</p>
                <p className="text-2xl font-bold">{user.stats.coursesCompleted}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <FiAward size={20} />
              </div>
              <div>
                <p className="text-gray-500">Certificates</p>
                <p className="text-2xl font-bold">{user.stats.certificates}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                <FiUser size={20} />
              </div>
              <div>
                <p className="text-gray-500">Active Courses</p>
                <p className="text-2xl font-bold">{user.stats.activeCourses}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Enrolled Courses */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">My Courses</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((course) => (
                <div key={course} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div>
                    <h3 className="font-medium">Course Title {course}</h3>
                    <p className="text-sm text-gray-500">Progress: {course * 25}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                      <div 
                        className="bg-blue-600 h-1.5 rounded-full" 
                        style={{ width: `${course * 25}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-center text-blue-600 hover:text-blue-800 font-medium">
              View All Courses
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {['Completed lesson', 'Earned certificate', 'Started new course'].map((activity, i) => (
                <div key={i} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <FiAward size={14} />
                  </div>
                  <div>
                    <p className="text-sm">{activity}</p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;