"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SelectedCartItem = ({ selectedBookingCart }: any) => {
  const router = useRouter();

  const handleCheckout = () => {
    if (selectedBookingCart) {
      router.push(
        `/personal-info/api-type=${selectedBookingCart.api_type}&id=${selectedBookingCart.id}`
      );
    }
  };

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Order Details</h1>

      {selectedBookingCart ? (
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="flex gap-4">
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

            <div className="flex items-center justify-between">
              <p className="text-sm font-bold mt-2">Price:</p>
              <p>€{selectedBookingCart.total_amount}</p>
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-md text-sm">
            <p className="flex justify-between font-bold">
              Total (1){" "}
              <span className="text-red-600 text-lg">
                €{selectedBookingCart.total_amount}
              </span>
            </p>
            <p className="text-xs text-gray-500">No Additional Charges</p>
          </div>

          {/* Checkout Button with Navigation */}
          <button
            onClick={handleCheckout}
            className="w-full bg-red-600 text-white py-2 rounded-md font-bold hover:bg-red-700 transition"
          >
            Checkout
          </button>

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
  );
};

export default SelectedCartItem;
