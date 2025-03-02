"use client";
import { useGetBookingList } from "@/hooks/get.hooks";
import MainLayout from "@/layout/MainLayout";
import React from "react";
import { TfiEraser } from "react-icons/tfi";
import BookingCard from "../_components/cards/BookingCard";
import EmptyHistory from "../profile/booking-history/EmptyHistory";

const CartPage = () => {
  const { data: bookingList } = useGetBookingList();

  return (
    <MainLayout>
      <div className="mx-10 lg:mx-20 my-10 lg:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          {bookingList?.data?.results &&
          bookingList?.data?.results.length > 0 ? (
            <div>
              <div className="space-y-4">
                {bookingList?.data?.results.map((booking: any) => {
                  return <BookingCard key={booking.id} booking={booking} />;
                })}
              </div>
            </div>
          ) : (
            <EmptyHistory />
          )}
        </div>
        <div className="col-span-1">2</div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
