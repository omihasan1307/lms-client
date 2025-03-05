"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import MainLayout from "@/layout/MainLayout";
import Expect from "./Expect";
import Form from "./Form";
import Gallery from "./Gallery";
import Heading from "./Heading";
import MeetingPoint from "./MeetingPoint";
import Overview from "./Overview";
import Queries from "./Queries";
import { useGetProductDetails } from "@/hooks/get.hooks";

function DetailsContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");

  // Fetch product details based on the type and id
  const { data: tourData, isLoading } = useGetProductDetails(type, id as any);

  if (isLoading) {
    return (
      <div className="px-20 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!tourData?.data) {
    return (
      <div className="px-20 flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700">No data available.</p>
      </div>
    );
  }

  return (
    <div className="px-20">
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
  );
}

export default function Details() {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <DetailsContent />
      </Suspense>
    </MainLayout>
  );
}

// "use client";
// import { useSearchParams } from "next/navigation";
// import MainLayout from "@/layout/MainLayout";
// import Expect from "./Expect";
// import Form from "./Form";
// import Gallery from "./Gallery";
// import Heading from "./Heading";
// import MeetingPoint from "./MeetingPoint";
// import Overview from "./Overview";
// import Queries from "./Queries";
// import { useGetProductDetails } from "@/hooks/get.hooks";

// function Details() {
//   const searchParams = useSearchParams();
//   const type = searchParams.get("type");
//   const id = searchParams.get("id");

//   const { data: tourData, isLoading } = useGetProductDetails(type, id as any);

//   if (isLoading) {
//     return (
//       <MainLayout>
//         <div className="px-20 flex justify-center items-center h-screen">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
//         </div>
//       </MainLayout>
//     );
//   }

//   if (!tourData?.data) {
//     return (
//       <MainLayout>
//         <div className="px-20 flex justify-center items-center h-screen">
//           <p className="text-xl text-gray-700">No data available.</p>
//         </div>
//       </MainLayout>
//     );
//   }

//   return (
//     <MainLayout>
//       <div className="px-20">
//         <Heading data={tourData?.data} />
//         <Gallery data={tourData?.data} />
//         <div className="flex w-full">
//           <div className="w-3/4">
//             <Overview data={tourData?.data} />
//             <MeetingPoint data={tourData?.data} />
//             <Expect data={tourData?.data} />
//             <Queries data={tourData?.data} />
//           </div>
//           <div className="w-1/4">
//             <Form data={tourData?.data} />
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }

// export default Details;
