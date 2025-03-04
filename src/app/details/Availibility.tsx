"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { bookActivity } from "@/utils/post/post.action";
import { useAuth } from "@/Helper/authContext";

export default function AvailabilityPopup({
  isOpen,
  schedules,
  onClose,
  selectedDate,
  setSelectedDate,
  handleCheckAvailability,
  product_id,
}: AvailabilityPopupProps) {
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null
  );
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (schedules.length > 0) {
      setSelectedSchedule(schedules[0]);
      setSelectedSlot(schedules[0].available_slots[0] || null);
    }
  }, [schedules]);

  if (!isOpen) return null;

  const handleScheduleSelection = (schedule: Schedule) => {
    if (selectedSchedule?.schedule_id === schedule.schedule_id) {
      return;
    }
    setSelectedSchedule(schedule);
    setSelectedSlot(null);
    setQuantities({});
  };

  const handleSlotSelection = (slot: Slot) => {
    console.log("Slot selected:", slot);
    setSelectedSlot(slot);

    const initialQuantities: { [key: string]: number } = {};
    slot.prices.forEach((price) => {
      initialQuantities[price.price_id] = 0;
    });
    setQuantities(initialQuantities);
  };

  const handleQuantityChange = (priceId: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [priceId]: Math.max(0, (prev[priceId] || 0) + change),
    }));
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    const modal = e.target as HTMLElement;
    if (modal && modal.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleBook = async () => {
    try {
      if (!isAuthenticated) {
        router.push("login");
      }
      if (!selectedSchedule || !selectedSlot) {
        console.error("Please select a schedule and time slot");
        return;
      }

      const bookingData = {
        product_id: product_id,
        departure_date: selectedDate,
        start_time: selectedSlot.start_time,
        items: Object.entries(quantities)
          .filter(([_, quantity]) => quantity > 0)
          .map(([priceId, quantity]) => ({
            price_id: priceId,
            quantity,
          })),
      };

      const data = await bookActivity(bookingData);
      console.log("Booking Data:", data);
      alert("Reservation Successful");
      router.push("/cart");
    } catch (error) {
      alert("Could not reserve your booking");
    }
  };

  const handleAddToCart = () => {
    handleBook();
  };

  const calculateTotalPrice = () => {
    if (!selectedSlot) return 0;

    return selectedSlot.prices.reduce((total, price) => {
      const quantity = quantities[price.price_id] || 0;
      return total + price.price * quantity;
    }, 0);
  };

  return (
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-3xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <input
            type="date"
            className="border p-2 rounded w-1/3"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <Button
            onClick={handleCheckAvailability}
            className="bg-[#DD2509] text-white px-4 py-2 rounded"
          >
            Check Now
          </Button>
        </div>

        {/* Schedule List */}
        {schedules.map((schedule) => (
          <div
            key={schedule.schedule_id}
            onClick={() => handleScheduleSelection(schedule)}
            className={`border p-4 mb-4 rounded-lg cursor-pointer transition-all ${
              selectedSchedule?.schedule_id === schedule.schedule_id
                ? "border-blue-500 shadow-lg"
                : "border-gray-300 hover:border-gray-500"
            }`}
          >
            <h2 className="text-lg font-semibold">{schedule.schedule_name}</h2>
            <div className="flex items-center text-gray-600 gap-2">
              <MapPinIcon className="w-5 h-5" />
              <span>Meet at {schedule.location}</span>
            </div>
            <div className="flex items-center text-gray-600 gap-2 my-2">
              <ClockIcon className="w-5 h-5" />
              <span>{schedule.duration}</span>
              <GlobeAltIcon className="w-5 h-5" />
              <span>{schedule.language}</span>
            </div>
            <p className="font-medium">
              Opening Time: {schedule.start_time} - {schedule.end_time}
            </p>

            {/* Slot Selection */}
            <p className="font-medium mb-1">Starting Time:</p>
            <div className="flex gap-2 overflow-x-auto">
              {schedule.available_slots.map((slot) => (
                <button
                  key={slot.start_time}
                  className={`px-4 py-2 border rounded transition-colors duration-200 ${
                    selectedSlot?.start_time === slot.start_time
                      ? "bg-[#DD2509] text-white"
                      : "bg-white hover:bg-gray-200"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSlotSelection(slot);
                  }}
                >
                  {slot.start_time}
                </button>
              ))}
            </div>

            {selectedSchedule?.schedule_id === schedule.schedule_id &&
              selectedSlot?.prices.map((price) => (
                <div
                  key={price.price_id}
                  className="mt-3 flex justify-between items-center"
                >
                  <p>
                    {price.name} ({price.option}): €{price.price} (Capacity:{" "}
                    {price.capacity})
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-1 bg-gray-300 rounded"
                      onClick={() => handleQuantityChange(price.price_id, -1)}
                    >
                      -
                    </button>
                    <span className="text-lg">
                      {quantities[price.price_id] || 0}
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-300 rounded"
                      onClick={() => handleQuantityChange(price.price_id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

            {selectedSchedule?.schedule_id === schedule.schedule_id && (
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold">
                  Total Price: €{calculateTotalPrice()}
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={handleBook}
                    className="bg-[#DD2509] text-white px-4 py-2 rounded w-full"
                  >
                    Book Now
                  </Button>
                  <Button
                    onClick={handleAddToCart}
                    className="bg-black text-white px-4 py-2 rounded w-full"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
