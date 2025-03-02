"use client";
import { useGetProfile } from "@/hooks/get.hooks";
import { useUpdateProfile } from "@/hooks/post.hook";
import { useState, useEffect } from "react";
import { LiaUserEditSolid } from "react-icons/lia";

const countries = [
  { name: "Bangladesh", code: "+88", flag: "https://flagcdn.com/w20/bd.png" },
  { name: "United States", code: "+1", flag: "https://flagcdn.com/w20/us.png" },
  {
    name: "United Kingdom",
    code: "+44",
    flag: "https://flagcdn.com/w20/gb.png",
  },
  { name: "India", code: "+91", flag: "https://flagcdn.com/w20/in.png" },
];

function ProfileSettings() {
  const { data } = useGetProfile();
  const profileData = data?.data || {};

  const { mutate: handleUpdateProfile } = useUpdateProfile();

  const [userData, setUserData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (profileData) {
      setUserData({
        first_name: profileData.first_name || "",
        last_name: profileData.last_name || "",
        email: profileData.email || "",
        date_of_birth: profileData.date_of_birth || "",
        phone: profileData.phone || "",
        blood_group: profileData.blood_group || "",
        address: profileData.address || "",
        city: profileData.city || "",
        country: profileData.country || "",
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleUpdate = () => {
    handleUpdateProfile(userData);
    console.log("Updated Profile Data:", userData);
  };

  return (
    <div>
      <main className="flex-1 pb-4 md:pb-6 lg:pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-xl md:text-2xl font-bold">Profile Settings</h1>
          <button className="text-gray-500 hover:text-gray-700 flex items-center mt-4 md:mt-0 text-[14px]">
            <span className="mr-2 flex justify-center items-center">
              <LiaUserEditSolid />
            </span>
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex items-center relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-32 p-2 border border-gray-300 rounded-l-md bg-gray-100"
              >
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  className="w-7 h-5 mr-2"
                />
                <span>({selectedCountry.code})</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-12 left-0 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => handleCountrySelect(country)}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-7 h-5 mr-2"
                      />
                      <span>{country.code}</span>
                    </div>
                  ))}
                </div>
              )}

              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-r-md bg-gray-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              value={userData.date_of_birth}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blood Group
            </label>
            <input
              type="text"
              name="blood_group"
              value={userData.blood_group}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={userData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={userData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
          >
            Update Profile
          </button>
        </div>
      </main>
    </div>
  );
}

export default ProfileSettings;
