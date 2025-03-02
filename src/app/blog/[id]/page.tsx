"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MainLayout from "@/layout/MainLayout";
import BlogCard from "../../_components/cards/BlogCard";
import { fetchBlogDetail } from "@/utils/get/get.action";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog]: any = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchBlogDetail(id);
        if (data.success) {
          setBlog(data.data);
          setActiveImage(data.data.images[0]?.image || null);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError("Failed to fetch blog data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500 text-xl">{error}</p>
        </div>
      </MainLayout>
    );
  }

  if (!blog) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-500 text-xl">No blog found</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-10 py-8">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        <div className="text-sm text-gray-600 mb-6">
          Category: <span className="font-semibold">{blog.category.name}</span>
        </div>

        <div className="mb-8">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-md">
            <img
              src={activeImage || blog.images[0]?.image}
              alt={blog.title}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {blog.images.map((image: any) => (
            <div
              key={image.id}
              className={`relative w-full h-32 rounded-lg overflow-hidden shadow-md cursor-pointer ${
                activeImage === image.image ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveImage(image.image)}
            >
              <img
                src={image.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-700 mb-6">{blog.short_desc}</p>

        <div className="prose max-w-none mb-8">
          <p>{blog.details}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag: any) => (
            <span
              key={tag.id}
              className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Related Blogs</h2>
          <BlogCard data={blog.related_blogs} />
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetailPage;
