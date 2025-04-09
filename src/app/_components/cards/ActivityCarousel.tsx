"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Heading";
import React, { useRef } from "react";
import Link from "next/link";

function ActivityCarousel({ data }: { data: any }) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <Heading
        title="Featured Courses"
        description="Explore trending courses with modules and lectures"
        showButtons={true}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <Slider ref={sliderRef} {...settings}>
        {data?.data?.map((course: any) => (
          <div key={course._id} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {/* Thumbnail */}
              <div className="relative h-48 w-full">
                <img
                  src={course.thumbnail || "/default-image.jpg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <Link
                href={`/course/${course._id}`}
                className="p-4 flex flex-col flex-grow cursor-pointer"
              >
                <h2 className="text-lg font-bold mb-1 line-clamp-2">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {course.description}
                </p>
                <div className="text-red-600 font-bold text-base mb-2">
                  ৳{course.price}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ActivityCarousel;
