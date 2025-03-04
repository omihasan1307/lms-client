"use client";
import { useSearchParams } from "next/navigation";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const booking = searchParams.get("booking");
  const bookingDetails = booking
    ? JSON.parse(decodeURIComponent(booking))
    : null;

  return (
    <MainLayout>
      <div className="mx-10 lg:mx-20 my-10">
        {/* Success Message */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600">
            Payment Successful!
          </h1>
          <p className="mt-4 text-gray-600">
            Thank you for your purchase. Your booking has been confirmed.
          </p>
        </div>

        {/* Booking Details */}
        {bookingDetails && (
          <div className="mt-8 rounded-lg shadow-lg p-6 bg-green-50">
            <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>

            {/* Product Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {bookingDetails.data.product_title}
              </h3>
              <p className="text-gray-600">{bookingDetails.data.subtitle}</p>
              <p className="text-gray-600">
                <span className="font-semibold">Duration:</span>{" "}
                {bookingDetails.data.duration}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Departure:</span>{" "}
                {new Date(
                  bookingDetails.data.departure_date_time
                ).toLocaleString()}
              </p>
            </div>

            {/* Participants */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Participants</h3>
              <div className="flex items-center gap-5">
                {bookingDetails.data.participants.map((participant: any) => (
                  <div
                    key={participant.id}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <p className="text-gray-600">
                      <span className="font-semibold">Type:</span>{" "}
                      {participant.participant_type}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Quantity:</span>{" "}
                      {participant.quantity}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Price per Unit:</span> €
                      {participant.cost_per_unit}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Option:</span>{" "}
                      {participant.option_name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Amount */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Payment Summary</h3>
              <p className="text-gray-600">
                <span className="font-semibold">Total Amount:</span> €
                {bookingDetails.data.total_amount}
              </p>
            </div>

            {/* Status */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Booking Status</h3>
              <p className="text-gray-600">
                <span className="font-semibold">Status:</span>{" "}
                {bookingDetails.data.status}
              </p>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SuccessPage;
