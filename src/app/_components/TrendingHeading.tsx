import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TrendingHeading = () => {
  return (
    <div className="flex items-center justify-between  bg-gradient-to-r from-gray-50 to-white  rounded-xl mb-0 mt-40">
      {/* Text Heading */}
      <div>
        <h2 className="text-[36px] font-bold text-[##010A15]">Trending 2023</h2>
        <p className="text-[15px] text-[##010A15] mt-1">
          Sost Brilliant Reasons Entrada should be your one-stop-one
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-2">
        <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-900">
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TrendingHeading;
