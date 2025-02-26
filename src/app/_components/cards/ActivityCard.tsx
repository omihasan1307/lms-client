"use client";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useGetProduct } from "@/hooks/get.hooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ActivityCard() {
  const router = useRouter();
  const { data } = useGetProduct();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full py-10 px-5 md:px-10">
      <Slider {...settings}>
        {data?.data?.slice(0, 6)?.map((activity: any) => (
          <div key={activity.id} className="p-2">
            <div className="bg-white relative transition duration-500 rounded-lg shadow-md cursor-pointer">
              <div className="relative w-full h-60">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={activity.image}
                  alt={activity.title}
                />
                <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm">
                  <AiFillHeart
                    size={24}
                    color={activity.is_favorite ? "red" : "gray"}
                  />
                </div>
                <div className="absolute top-2 left-2 flex items-center bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
                  <AiFillStar size={20} color="#FF9900" />
                  <p className="ml-2 font-bold text-sm">4.5</p>
                  <p className="ml-1 text-xs opacity-80">(1500 reviews)</p>
                </div>
              </div>
              <div
                className="py-4 px-4"
                onClick={() => {
                  const queryString = `?type=${activity?.api?.api_type}&id=${activity?.api?.id}`;
                  router.push(`/details${queryString}`);
                }}
              >
                <h1 className="text-[#010A15] font-bold text-lg mb-2 hover:text-gray-900">
                  {activity.title}
                </h1>
                <div className="flex gap-2 items-center text-sm text-gray-600">
                  <p>1 day</p>
                  <p>•</p>
                  <p>Small group</p>
                </div>
                <div className="flex gap-2 mt-4 items-center">
                  <p className="text-red-600 text-base font-bold">
                    From{" "}
                    <span className="text-xl">
                      €{activity.discounted_price}
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">Per Person</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ActivityCard;
