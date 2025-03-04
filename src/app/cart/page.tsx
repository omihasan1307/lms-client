"use client";
import { useGetBookingList } from "@/hooks/get.hooks";
import MainLayout from "@/layout/MainLayout";
import React, { useState } from "react";
import BookingCard from "../_components/cards/BookingCard";
import EmptyHistory from "../profile/booking-history/EmptyHistory";
import SelectedCartItem from "./SelectedCartItem";

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
          <SelectedCartItem selectedBookingCart={selectedBookingCart} />
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
