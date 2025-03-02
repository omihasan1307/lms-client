import Image from "next/image";
import React from "react";
import { FaCalendar, FaUsers } from "react-icons/fa6";
import { TbTicket } from "react-icons/tb";

function BookingCard({ booking }: any) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex flex-col sm:flex-row justify-between mt-5">
        <div className="flex flex-col sm:flex-row items-start">
          {/* Image */}
          <div className="relative w-full sm:w-32 h-40 sm:h-36 mb-4 sm:mb-0 mr-0 sm:mr-4">
            <Image
              src={booking.product_thumbnail || "/default-image.jpg"}
              alt={booking.product_title}
              layout="fill"
              className="object-cover rounded-md"
            />
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
              {booking.status}
              <TbTicket />
            </span>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-bold mb-1">{booking.product_title}</h3>
            <p className="text-gray-500 text-sm flex items-center mb-1">
              <span className="mr-2">
                🛫 Departure: {booking.departure_from || "Unknown"}
              </span>
            </p>
            <p className="text-gray-500 text-sm flex items-center mb-1">
              <span className="mr-2">⏳ Duration: {booking.duration}</span>
            </p>
            <p className="text-gray-500 text-sm flex items-center mb-4">
              <span className="mr-2 flex items-center gap-2">
                <FaCalendar />{" "}
                {new Date(booking.departure_date_time).toLocaleDateString()}
              </span>
            </p>
            <div className="flex gap-5">
              <p className="text-gray-900 text-sm">
                <span className="flex gap-1 items-center">
                  <FaUsers /> {booking.total_persons} Persons
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex flex-col justify-center items-end sm:items-end mt-4 sm:mt-0 border-t sm:border-t-0 sm:border-l sm:pl-4 pt-4 sm:pt-0">
          <p className="text-xs text-gray-800">Total Price</p>
          <p className="text-xl font-extrabold text-gray-900">
            €{booking.total_amount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
