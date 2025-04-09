import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  showButtons?: boolean;
  onPrev?: () => void; // Add onPrev prop
  onNext?: () => void; // Add onNext prop
}

const Heading = ({
  title,
  description,
  showButtons = false,
  onPrev,
  onNext,
}: HeadingProps) => {
  return (
    <div className="flex items-center justify-between  rounded-xl mb-10">
      {/* Text Heading */}
      <div>
        <h2 className="text-[36px] font-bold text-[#010A15]">{title}</h2>
        <p className="text-[15px] text-[#010A15] mt-1">{description}</p>
      </div>

      {/* Navigation Buttons (Conditional) */}
      {showButtons && (
        <div className="flex space-x-2">
          <button
            className="p-2 bg-gray-800 rounded-md hover:bg-gray-900"
            onClick={onPrev}
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <button
            className="p-2 bg-gray-800 rounded-md hover:bg-gray-900"
            onClick={onNext}
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Heading;
