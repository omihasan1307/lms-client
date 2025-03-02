import React, { useEffect, useState } from "react";

// DownArrowSvg Component
function DownArrowSvg({ className }: any) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-up-01-round">
        <path
          id="Vector"
          d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6"
          stroke="#141B34"
          strokeWidth="1.5"
          strokeLinecap="round"
          fillOpacity="round"
        />
      </g>
    </svg>
  );
}

// PaginationNumber Component
const PaginationNumber = ({ children, active = false, ...props }: any) => {
  return (
    <button
      {...props}
      className={`px-3.5 py-[9px] rounded shadow flex-col justify-center items-center inline-flex ${
        active ? "bg-red-500 text-white" : "bg-white text-gray-700"
      } hover:bg-red-500 hover:text-white transition-colors duration-200`}
    >
      <div className="w-4 text-center text-[16px] font-normal leading-none">
        {children}
      </div>
    </button>
  );
};

// Pagination Component
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  nextPage,
  previousPage,
}: any) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    let pages: number[] = [];
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }
    setPages(pages);
  }, [currentPage, totalPages]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 p-4">
      {/* Previous Button */}
      <div
        className="w-8 h-8 py-[11px] flex justify-center items-center cursor-pointer hover:bg-gray-200 rounded transition-colors duration-200"
        onClick={() => {
          if (currentPage === 1) return;
          onPageChange(currentPage - 1);
        }}
      >
        <DownArrowSvg className="rotate-90" />
      </div>

      {/* Pagination Numbers */}
      <div className="flex flex-wrap gap-1.5">
        {pages.map((item, index) => (
          <PaginationNumber
            key={index}
            active={item === currentPage}
            onClick={() => {
              if (item === currentPage) return;
              onPageChange(item);
            }}
          >
            {item}
          </PaginationNumber>
        ))}
      </div>

      {/* Next Button */}
      <div
        className="w-8 h-8 py-[11px] flex justify-center items-center cursor-pointer hover:bg-gray-200 rounded transition-colors duration-200"
        onClick={() => {
          if (currentPage === totalPages) return;
          onPageChange(currentPage + 1);
        }}
      >
        <DownArrowSvg className="-rotate-90" />
      </div>
    </div>
  );
};

export default Pagination;