"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

const SearchForm = ({ initialQuery }: { initialQuery: string }) => {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    router.push(`/course?search=${newQuery}`);
  };

  return (
    <div className="mb-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-grow relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for courses, topics, or instructors..."
            value={query}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
