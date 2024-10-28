import React from "react";

function Form() {
  return (
    <div className=" shadow-2xl p-4 rounded-xl">
      <h2 className="text-xl font-extrabold text-black">
        Reserve Your Tickets
      </h2>
      <div>
        <div className="bg-gray-100 p-4 rounded-md max-w-xs mt-3">
        <p className="font-bold text-[15px] text-[#010A15] mb-1">From:</p>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 line-through text-[15px]">€99.00</span>
          <span className="text-red-600 font-bold text-[20px]">€49.00</span>
          <span className="text-[15px] text-[#010A15B2]">x 1 Adult</span>
        </div>
      </div>

      {/* <!-- Select Your Tickets --> */}
      <div className="mt-3">
        <label className="block font-bold text-[15px] text-[#010A15] mb-1">
          Select Your Tickets
        </label>
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <select className="bg-transparent w-full focus:outline-none text-[15px] text-[#010A15]">
            <option>2 Adults, 4 Children</option>
            <option>1 Adult, 2 Children</option>
            <option>3 Adults</option>
          </select>
        </div>
      </div>
      {/* <!-- Select Language --> */}
      <div className="mt-3">
        <label className="block font-bold text-[15px] text-[#010A15] mb-1">
          Select Language
        </label>
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <select className="bg-transparent w-full focus:outline-none text-[15px] text-[#010A15]">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div >
      {/* <!-- Select Date --> */}
      <div className="mt-3">
        <label className="block font-bold text-[15px] text-[#010A15] mb-1">
          Select Date
        </label>
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <input
            type="date"
            className="bg-transparent w-full focus:outline-none text-[15px] text-[#010A15]"
            value="2023-09-15"
          />
        </div>
      </div>

      {/* <!-- Check Availability Button --> */}
      <button className="mt-5 w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700">
        Check Availability
      </button>
      </div>
    </div>
  );
}

export default Form;
