"use client";
import { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";

const Loading = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
      </div>

      {/* <div className="flex items-center justify-center h-screen">
  
        <DotLoader color="#11B76B" loading={true} speedMultiplier={2} />
      </div> */}
    </>
  );
};

export default Loading;
