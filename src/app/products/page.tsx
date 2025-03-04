"use client";
import { ApiBaseMysql } from "@/Helper/ApiBase";
import MainLayout from "@/layout/MainLayout";
import axios from "axios";
import Pagination from "../_components/Pagination";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ActivityList from "../_components/cards/ActivityList";
import { debounce } from "lodash";
import { ClipLoader } from "react-spinners"; // Import a small spinner component
import { FaCalendar, FaSearch } from "react-icons/fa"; // Import icons

const fetchData = async (
  { search, category, sort, page }: any,
  setIsLoading: any
) => {
  try {
    setIsLoading(true);
    const data = {
      search,
      category: category,
      sort,
      page,
    };
    const response = await axios.post(
      `${ApiBaseMysql}/shop/tours-filter/`,
      data
    );
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(false);
    return error;
  }
};

const ProductList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [categoryList, setCategoryList] = useState(["Tour"]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [productList, setProductList] = useState([]);
console.log(productList,'productList')
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 500),
    []
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setSearch(searchQuery.replace(/_/g, " "));
      setInputValue(searchQuery.replace(/_/g, " "));
    }
  }, [searchParams]);

  useEffect(() => {
    const params = {
      search: search,
      category: category,
      sort: sort,
      page: page,
    };

    fetchData(params, setIsLoading).then((data: any) => {
      if (data?.data) {
        setProductList(data.data);
      }
      if (data?.pagination) {
        setTotalPages(data.pagination.total_pages);
        setTotalItems(data.pagination.total_items);
      }
    });
  }, [search, category, sort, page]);

  useEffect(() => {
    const params: any = {
      search: search,
      category: category,
      sort: sort,
      page: page,
    };
    const queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    router.push(`/products?${queryString}`);
  }, [search, category, sort, page]);

  const paginationOptions = useMemo(
    () => ({
      totalPages: totalPages,
      totalItems: totalItems,
      page: page,
      setPage: setPage,
    }),
    [totalPages, totalItems, page]
  );

  const handleCategory = useCallback((item: any) => {
    setCategory(item);
  }, []);

  const handleSort = useCallback((sortBy: string) => {
    setSort(sortBy);
  }, []);

  const handlePopularSearch = useCallback((item: string) => {
    const formattedItem = item.replace(/\s+/g, "_");
    setInputValue(formattedItem);
    setSearch(formattedItem);
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-10 py-10">
        {/* New Search Design */}
        <div className="flex gap-4">
          <div className="w-full  bg-[#F0F0F0] rounded-xl shadow-lg p-4 flex items-center space-x-4">
            <input
              type="text"
              placeholder="What Are You Going?"
              value={inputValue}
              onChange={handleSearchChange}
              className="flex-grow text-[#010A15] placeholder-[#010A15] outline-none border-none bg-transparent font-bold text-[15px]"
            />
            <button type="button" className="text-gray-700 hover:text-black">
              <FaCalendar />
            </button>
          </div>
          <button
            type="submit"
            className="bg-[#010A15] px-9 rounded-lg text-white"
          >
            <FaSearch />
          </button>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-black">
            <p className="text-lg font-bold">
              Showing results for:{" "}
              <span className="text-blue-600">{search}</span>
            </p>
            <p className="text-sm text-gray-600">Total Results: {totalItems}</p>
          </div>
          {isLoading && (
            <div className="ml-2">
              <ClipLoader size={30} color="#36D7B7" />
            </div>
          )}

          {/* Right Side: Filters */}
          <div className="flex items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-bold">Category:</label>
              <select
                value={category}
                onChange={(e) => handleCategory(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">All</option>
                {categoryList.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-bold">Sort By:</label>
              <select
                value={sort}
                onChange={(e) => handleSort(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">None</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>

        <ActivityList data={productList} />
        <div className="flex justify-center">
          <Pagination {...paginationOptions} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductList;
