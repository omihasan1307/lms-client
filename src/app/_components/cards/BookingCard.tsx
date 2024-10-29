import Image from "next/image";
import React from "react";
import { FaCalendar, FaUsers } from "react-icons/fa6";
import { TbTicket } from "react-icons/tb";
import { TfiEraser } from "react-icons/tfi";

function BookingCard() {
  return (
    <div>
      <div className="bg-white  rounded-lg  ">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">Booking History</h1>
          <button className="text-gray-500 hover:text-gray-700 flex items-center gap-2 text-sm">
            <TfiEraser />
            Clear All
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-5">
          <div className="flex flex-col sm:flex-row items-start">
            {/* Image */}
            <div className="relative w-full sm:w-32 h-40 sm:h-36 mb-4 sm:mb-0 mr-0 sm:mr-4">
              <Image
                src="https://cdn.pixabay.com/photo/2024/10/24/03/36/ai-generated-9144650_1280.jpg"
                alt="Dubai Skydive Experience"
                layout="fill"
                className="object-cover rounded-md"
              />
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                Booked
                <TbTicket />
              </span>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-lg font-bold mb-1">
                Dubai: Tandem Skydive Experience at The Palm
              </h3>
              <p className="text-gray-500 text-sm flex items-center mb-1">
                <span className="mr-2">📷 24 Hour & Digital Walking Tour</span>
              </p>
              <p className="text-gray-500 text-sm flex items-center mb-1">
                <span className="mr-2">⏰ 1 hour</span>
              </p>
              <p className="text-gray-500 text-sm flex items-center mb-4">
                <span className="mr-2 flex items-center gap-2">
                  <FaCalendar /> 15 October 2023
                </span>
              </p>
              <div className="flex gap-5">
                <p className="text-gray-900 text-sm">
                  <span className="flex gap-1 items-center">
                    <FaUsers />2 Adults x €37.68
                  </span>
                </p>
                <p className="text-gray-900 text-sm">
                  <span className="flex gap-1 items-center">
                    <FaUsers />2 Child x €16.68
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex flex-col justify-center items-end sm:items-end mt-4 sm:mt-0 border-t sm:border-t-0 sm:border-l sm:pl-4 pt-4 sm:pt-0">
            <p className="text-xs text-gray-800">Total Price</p>
            <p className="text-xl font-extrabold text-gray-900">€49.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
