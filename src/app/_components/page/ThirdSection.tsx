"use client";
import React, { useState } from "react";
import { PlayCircle, Clock, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ThirdSection = () => {
  const [playVideo1, setPlayVideo1] = useState(false);
  const [playVideo2, setPlayVideo2] = useState(false);

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Comprehensive Materials",
      description: "200+ hours of course content",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Certification",
      description: "Earn recognized credentials",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-24 space-y-20 lg:px-0 px-6">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
          Our Features
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
          What's Included in Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Year-Round Online Batch?
          </span>
        </h1>
        <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
          Learn from anywhere in the country with top-tier educators. Your
          learning never stops with our full suite of features.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Card 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
          <div className="aspect-video relative">
            {playVideo1 ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/s2skans2dP4?autoplay=1"
                title="React JS Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className="w-full h-full cursor-pointer relative"
                onClick={() => setPlayVideo1(true)}
              >
                <img
                  src="https://img.youtube.com/vi/s2skans2dP4/maxresdefault.jpg"
                  alt="React Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="flex flex-col items-center">
                    <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-white transition" />
                    <span className="mt-2 text-white font-medium">
                      Watch Preview
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  12:34
                </div>
              </div>
            )}
          </div>
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium text-blue-600">
                React JS
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Master React in Minutes
            </h2>
            <p className="text-gray-600">
              Dive into the core concepts of React JS through interactive live
              classes led by industry experts.
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                View Course Details
              </Button>
            </div>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
          <div className="aspect-video relative">
            {playVideo2 ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-bt_y4Loofg?autoplay=1"
                title="MongoDB Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className="w-full h-full cursor-pointer relative"
                onClick={() => setPlayVideo2(true)}
              >
                <img
                  src="https://img.youtube.com/vi/-bt_y4Loofg/maxresdefault.jpg"
                  alt="MongoDB Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="flex flex-col items-center">
                    <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-white transition" />
                    <span className="mt-2 text-white font-medium">
                      Watch Preview
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  08:42
                </div>
              </div>
            )}
          </div>
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-sm font-medium text-green-600">
                Database
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              MongoDB Simplified
            </h2>
            <p className="text-gray-600">
              Access an extensive recorded video library to review database
              concepts anytime at your own pace.
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                View Course Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-10">
        <Link
          href={"/course"}
          className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all"
        >
          Explore All Courses
        </Link>
        <p className="text-gray-500 text-sm mt-4">
          Join 10,000+ students who have transformed their careers with us
        </p>
      </div>
    </div>
  );
};

export default ThirdSection;
