"use client";
import { useGetBookingById, useGetProfile } from "@/hooks/get.hooks";
import MainLayout from "@/layout/MainLayout";
import { useSearchParams } from "next/navigation";
import SelectedContinueItem from "../personal-info/SelectedContinueItem";

const ConfirmCheckout = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: selectedBookingCart } = useGetBookingById(id);

  const { data } = useGetProfile();
  const profileData = data?.data || {};

  console.log(profileData);

  return (
    <MainLayout>
      <div className="mx-10 lg:mx-20 my-10 lg:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <h1 className="text-xl font-bold ">Your Personal Details</h1>
          <hr className="my-2" />
          <div className="border">
            <h1 className="font-semibold ">
              {profileData?.first_name} {profileData?.last_name}
            </h1>
            <p> {profileData?.email}</p>
            <p> {profileData?.phone}</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="col-span-1">
            {selectedBookingCart ? (
              <SelectedContinueItem
                selectedBookingCart={selectedBookingCart?.data}
              />
            ) : (
              <p>Loading booking details...</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ConfirmCheckout;
