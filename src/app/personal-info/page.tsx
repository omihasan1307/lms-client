"use client";

import MainLayout from "@/layout/MainLayout";
import { useSearchParams } from "next/navigation";
import ProfileSettings from "../profile/_components/ProfileSettings";
import { useGetBookingById } from "@/hooks/get.hooks"; // Create this hook
import SelectedContinueItem from "./SelectedContinueItem";

const PersonalInfo = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: selectedBookingCart } = useGetBookingById(id);

  return (
    <MainLayout>
      <div className="mx-10 lg:mx-20 my-10 lg:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <ProfileSettings />
        </div>
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
    </MainLayout>
  );
};

export default PersonalInfo;
