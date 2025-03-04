"use client";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

function ActivityCarousel({ data }: { data: any[] }) {
  const router = useRouter();

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

  return (
    <div className="py-10">
      <Slider {...settings}>
        {data.map((activity) => (
          <div key={activity.id} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {/* Image Section */}
              <div className="relative h-48 w-full">
                <img
                  className="w-full h-full object-cover"
                  src={activity.image || "/default-image.jpg"}
                  alt={activity.title}
                />
                <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm">
                  <AiFillHeart
                    size={24}
                    color={activity.is_favorite ? "red" : "gray"}
                  />
                </div>
                {activity?.total_reviews > 0 && (
                  <div className="absolute top-2 left-2 flex items-center bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
                    <AiFillStar size={20} color="#FF9900" />
                    <p className="ml-2 font-bold text-sm">
                      {activity?.avg_rating?.toFixed(1)}
                    </p>
                    <p className="ml-1 text-xs opacity-80">
                      ({activity?.total_reviews} reviews)
                    </p>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div
                className="p-4 flex flex-col flex-grow"
                onClick={() => {
                  const queryString = `?type=${activity?.api?.api_type}&id=${activity?.api?.id}`;
                  router.push(`/details${queryString}`);
                }}
              >
                <h2 className="text-lg font-bold mb-2 line-clamp-2">
                  {activity.title || "Untitled"}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {activity.duration || "N/A"}
                </p>
                <div className="mt-auto">
                  <p className="text-red-600 font-bold">
                    From €{activity.discounted_price || activity.price || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600">Per Person</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ActivityCarousel;
