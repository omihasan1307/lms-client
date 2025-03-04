"use client";
import { useGetBookingList } from "@/hooks/get.hooks";
import MainLayout from "@/layout/MainLayout";
import React, { useState } from "react";
import BookingCard from "../_components/cards/BookingCard";
import EmptyHistory from "../profile/booking-history/EmptyHistory";
import Image from "next/image";
import { TbTicket } from "react-icons/tb";
import Link from "next/link";

const CartPage = () => {
  const { data: bookingList } = useGetBookingList("Reserved");
  const [selectedBookingCart, setSelectedBookingCart] = useState<any>(null);

  return (
    <MainLayout>
      <div className="mx-10 lg:mx-20 my-10 lg:grid grid-cols-3 gap-5">
        {/* Booking List */}
        <div className="col-span-2">
          {bookingList?.data?.results?.length > 0 ? (
            <div className="space-y-4">
              {bookingList.data.results.map((booking: any) => (
                <div
                  key={booking.id}
                  onClick={() => setSelectedBookingCart(booking)}
                  className={`cursor-pointer ${
                    selectedBookingCart?.id === booking.id
                      ? "border-2 border-blue-500 rounded-md"
                      : ""
                  }`}
                >
                  <BookingCard booking={booking} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyHistory />
          )}
        </div>

        {/* Selected Booking Details */}
        <div className="col-span-1 bg-white p-4 rounded-md shadow-md border">
          <h1 className="text-lg font-bold mb-4">Order Details</h1>

          {selectedBookingCart ? (
            <div className="space-y-4">
              {/* Selected Booking Item */}
              <div className="border-b pb-4">
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="relative w-20 h-20">
                    <Image
                      src={
                        selectedBookingCart.product_thumbnail ||
                        "/default-image.jpg"
                      }
                      alt={selectedBookingCart.product_title}
                      layout="fill"
                      className="object-cover rounded-md"
                    />
                  </div>

                  {/* Booking Info */}
                  <div className="flex-1">
                    <h2 className="text-sm font-bold">
                      {selectedBookingCart.product_title}
                    </h2>
                    <p className="text-xs text-gray-500">
                      Provided by {selectedBookingCart.provider || "Unknown"}
                    </p>

                    <div className="text-xs text-gray-600 mt-2 space-y-1">
                      <p>
                        📅{" "}
                        {new Date(
                          selectedBookingCart.departure_date_time
                        ).toLocaleDateString()}
                      </p>
                      <p>⏳ {selectedBookingCart.duration}</p>
                      <p>
                        👨‍👩‍👧‍👦 {selectedBookingCart.total_persons} Adults x €
                        {selectedBookingCart.adult_price}
                      </p>
                      {selectedBookingCart.child_price && (
                        <p>
                          👶 {selectedBookingCart.child_count} Child x €
                          {selectedBookingCart.child_price}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <p className="text-sm font-bold mt-2">
                  Price: €{selectedBookingCart.total_amount}
                </p>
              </div>

              {/* Total Price Section */}
              <div className="bg-gray-100 p-3 rounded-md text-sm">
                <p className="flex justify-between font-bold">
                  Total (1){" "}
                  <span className="text-red-600 text-lg">
                    €{selectedBookingCart.total_amount}
                  </span>
                </p>
                <p className="text-xs text-gray-500">No Additional Charges</p>
              </div>

              {/* Continue Button */}
              <button className="w-full bg-red-600 text-white py-2 rounded-md font-bold hover:bg-red-700 transition">
                Continue
              </button>

              {/* Sign-in Message */}
              <Link
                href="/login"
                className="text-xs text-center text-gray-500 mt-2 mx-auto w-full"
              >
                Please Sign In for saving your cart items
              </Link>
            </div>
          ) : (
            <p className="text-gray-500 text-sm text-center">
              Click on a booking to view details.
            </p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
