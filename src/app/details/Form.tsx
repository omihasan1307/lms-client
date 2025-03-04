import { checkAvailibility } from "@/utils/get/get.action";
import React, { useState } from "react";
import AvailabilityModal from "./Availibility";

function Form({ data }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [schedules, setSchedules] = useState([]);

  const handleCheckAvailability = async () => {
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    try {
      const response = await checkAvailibility(data.id, { date: selectedDate });
      setSchedules(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error checking availability:", error);
      alert("Failed to check availability. Please try again.");
    }
  };

  return (
    <div className="shadow-2xl p-4 rounded-xl">
      <h2 className="text-xl font-extrabold text-black">
        Reserve Your Tickets
      </h2>
      <div>
        {/* Price Section */}
        <div className="bg-gray-100 p-4 rounded-md max-w-xs mt-3">
          <p className="font-bold text-[15px] text-[#010A15] mb-1">From:</p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 line-through text-[15px]">
              €99.00
            </span>
            <span className="text-red-600 font-bold text-[20px]">
              €{data?.basePrice}
            </span>
            <span className="text-[15px] text-[#010A15B2]">
              x {data?.basePriceFor}
            </span>
          </div>
        </div>

        {/* Select Language */}
        <div className="mt-3">
          <label className="block font-bold text-[15px] text-[#010A15] mb-1">
            Select Language
          </label>
          <div className="flex items-center bg-gray-100 p-2 rounded-md">
            <select className="bg-transparent w-full focus:outline-none text-[15px] text-[#010A15]">
              <option>English</option>
            </select>
          </div>
        </div>

        {/* Select Date */}
        <div className="mt-3">
          <label className="block font-bold text-[15px] text-[#010A15] mb-1">
            Select Date
          </label>
          <div className="flex items-center bg-gray-100 p-2 rounded-md">
            <input
              type="date"
              className="bg-transparent w-full focus:outline-none text-[15px] text-[#010A15]"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        {/* Check Availability Button */}
        <button
          onClick={handleCheckAvailability}
          className="mt-5 w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700"
        >
          Check Availability
        </button>
      </div>

      {/* Render the Availability Modal */}
      <AvailabilityModal
        isOpen={isModalOpen}
        schedules={schedules}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        handleCheckAvailability={handleCheckAvailability}
        setSelectedDate={setSelectedDate}
        product_id={data?.id}
      />
    </div>
  );
}

export default Form;
