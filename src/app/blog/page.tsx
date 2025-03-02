"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { fetchBlogs } from "@/utils/get/get.action";
import MainLayout from "@/layout/MainLayout";
import { SearchIcon } from "lucide-react";
import BlogCard from "../_components/cards/BlogCard";
import Pagination from "../_components/LinkPagination";
import { ClipLoader } from "react-spinners";
import { debounce } from "lodash"; // Import debounce from lodash

const MemoizedBlogCard = React.memo(BlogCard);
const MemoizedPagination = React.memo(Pagination);

const Blogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useCallback(
    debounce((searchValue: string) => {
      setSearch(searchValue);
      setPage(1);
    }, 300),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    debouncedSearch(searchValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const params = {
        search: search,
        page: page,
      };
      try {
        const data = await fetchBlogs(params);
        setBlogs(data?.data?.results);
        setCount(data?.data?.count);
        setNextPage(data?.data?.next);
        setPreviousPage(data?.data?.previous);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search, page]);

  useEffect(() => {
    const params: any = {
      search: search,
      page: page,
    };
    const queryString = new URLSearchParams(params).toString();
    router.replace(`?${queryString}`);
  }, [page, search, router]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-10 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blogs</h1>
          {isLoading && (
            <div className="ml-2">
              <ClipLoader size={30} color="#36D7B7" />
            </div>
          )}
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              defaultValue={search}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        <MemoizedBlogCard data={blogs} />

        <MemoizedPagination
          currentPage={page}
          totalPages={Math.ceil(count / 10)}
          onPageChange={(newPage: number) => setPage(newPage)}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </MainLayout>
  );
};

export default Blogs;
