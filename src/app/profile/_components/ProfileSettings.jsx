"use client";
import { useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia";

const countries = [
  { name: "Bangladesh", code: "+88", flag: "https://flagcdn.com/w20/bd.png" },
  { name: "United States", code: "+1", flag: "https://flagcdn.com/w20/us.png" },
  { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/w20/gb.png" },
  { name: "India", code: "+91", flag: "https://flagcdn.com/w20/in.png" },
  
];

function ProfileSettings() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
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
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Customer Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="ahosan@example.com"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Phone Number with Custom Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex items-center relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-32 p-2 border border-gray-300 rounded-l-md bg-white"
              >
                <img
                  src={selectedCountry.flag}
                  alt={`${selectedCountry.name} flag`}
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
                      <img src={country.flag} alt={`${country.name} flag`} className="w-7 h-5 mr-2" />
                      <span>{country.code}</span>
                    </div>
                  ))}
                </div>
              )}

              <input
                type="text"
                placeholder="01747 51XX XX"
                className="w-full p-2 border border-gray-300 rounded-r-md"
              />
            </div>
          </div>

          {/* Address */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              placeholder="Via San Pietro Ad Aram 142, Usmate, Milano, Italy"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileSettings;
