"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import MainLayout from "@/layout/MainLayout";
import Expect from "./Expect";
import Form from "./Form";
import Gallery from "./Gallery";
import Heading from "./Heading";
import MeetingPoint from "./MeetingPoint";
import Overview from "./Overview";
import Queries from "./Queries";
import { useGetProductDetails } from "@/hooks/get.hooks";

function Details() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");

  const { data: tourData, isLoading } = useGetProductDetails(type, id as any);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="px-20 flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </MainLayout>
    );
  }

  if (!tourData?.data) {
    return (
      <MainLayout>
        <div className="px-20 flex justify-center items-center h-screen">
          <p className="text-xl text-gray-700">No data available.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="px-20">x
        <Heading data={tourData?.data} />
        <Gallery data={tourData?.data} />
        <div className="flex w-full">
          <div className="w-3/4">
            <Overview data={tourData?.data} />
            <MeetingPoint data={tourData?.data} />
            <Expect data={tourData?.data} />
            <Queries data={tourData?.data} />
          </div>
          <div className="w-1/4">
            <Form data={tourData?.data} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Details;
