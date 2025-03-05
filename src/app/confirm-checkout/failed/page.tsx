"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

const FailedPageContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const apiType = searchParams.get("api-type");

  return (
    <div className="mx-10 lg:mx-20 my-10">
      <h1 className="text-2xl font-bold text-red-600">Payment Failed</h1>
      <p className="mt-4">
        Sorry, your payment could not be processed. Please try again or contact
        support.
      </p>

      <div className="mt-6 p-6 border border-red-200 bg-red-50 rounded-lg">
        <h2 className="text-lg font-semibold">Error Details</h2>
        <p className="mt-2 text-sm text-gray-700">Booking ID: {id || "N/A"}</p>
        <p className="mt-2 text-sm text-gray-700">
          API Type: {apiType || "N/A"}
        </p>
      </div>

      <div className="mt-6">
        <Link
          href={`/confirm-checkout?id=${id}`}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Retry Payment
        </Link>
      </div>
    </div>
  );
};

const FailedPage = () => {
  return (
    <MainLayout>
      <Suspense fallback={<p>Loading...</p>}>
        <FailedPageContent />
      </Suspense>
    </MainLayout>
  );
};

export default FailedPage;

// "use client";
// import { useSearchParams } from "next/navigation";
// import MainLayout from "@/layout/MainLayout";
// import Link from "next/link";

// const FailedPage = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
//   const apiType = searchParams.get("api-type");

//   return (
//     <MainLayout>
//       <div className="mx-10 lg:mx-20 my-10">
//         <h1 className="text-2xl font-bold text-red-600">Payment Failed</h1>
//         <p className="mt-4">
//           Sorry, your payment could not be processed. Please try again or contact
//           support.
//         </p>

//         <div className="mt-6 p-6 border border-red-200 bg-red-50 rounded-lg">
//           <h2 className="text-lg font-semibold">Error Details</h2>
//           <p className="mt-2 text-sm text-gray-700">
//             Booking ID: {id || "N/A"}
//           </p>
//           <p className="mt-2 text-sm text-gray-700">
//             API Type: {apiType || "N/A"}
//           </p>
//         </div>

//         <div className="mt-6">
//           <Link
//             href={`/confirm-checkout?id=${id}`}
//             className="bg-red-500 text-white px-4 py-2 rounded-md"
//           >
//             Retry Payment
//           </Link>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default FailedPage;
