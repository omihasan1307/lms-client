"use client";
import React from "react";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  slug: string;
  short_desc: string;
  category: {
    id: number;
    name: string;
  };
  created_at: string;
  images: {
    id: number;
    image: string;
  }[];
  tags: {
    id: number;
    name: string;
  }[];
}

function BlogCard({ data }: { data: Blog[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Blog Image */}
          <div className="relative h-48 w-full">
            <img
              className="w-full h-full object-cover"
              src={blog.images[0]?.image || "/default-blog-image.jpg"}
              alt={blog.title}
            />
            {/* Category Badge */}
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
              {blog.category.name}
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-4">
            <Link href={`/blogs/${blog.slug}`}>
              <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors duration-300">
                {blog.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4 line-clamp-3">{blog.short_desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Date */}
            <p className="text-sm text-gray-500">
              {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;