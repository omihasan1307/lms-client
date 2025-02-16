"use client";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useGetProduct } from "@/hooks/get.hooks";

function ActivityCard() {
  const router = useRouter();
  const { data } = useGetProduct();

  return (
    <div>
      <div className="w-full py-20 px-20 flex items-center justify-between">
        {data?.data?.map((activity: any) => (
          <div
            key={activity.id}
            className="bg-white relative transition duration-500 rounded-lg"
          >
            <div
              className="relative"
              onClick={() => {
                const queryString = `?type=${activity?.api?.api_type}&id=${activity?.api?.id}`;
                router.push(`/details${queryString}`);
              }}
            >
              <img
                className="rounded-lg"
                src={activity.image}
                alt={activity.title}
              />

              {/* Top-right corner: Price tag */}
              <div className="absolute top-2 right-2 py-2 px-4">
                <AiFillHeart
                  size={24}
                  color={activity.is_favorite ? "red" : "gray"}
                />
              </div>

              {/* Top-left corner: Rating */}
              <div className="absolute top-2 left-2 flex items-center py-1 px-3">
                <AiFillStar size={24} color="#FF9900" />
                <p className="ml-2 text-white font-bold text-[14px]">4.5</p>
                <p className="ml-1 text-[#FFFFFFB2] text-[12px]">
                  (1500 reviews)
                </p>
              </div>

              {/* Bottom-left corner of the image: Label */}
              <div className="absolute bottom-2 left-2 py-2 px-4">
                <span className="text-xs bg-[#DD2509] text-white rounded-md p-2">
                  Adventure
                </span>
              </div>
            </div>

            <div className="py-6 rounded-lg bg-white">
              <h1 className="text-[#010A15] font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                {activity.title}
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[#010A15] tracking-wide">1 day</p>
                <p>.</p>
                <p className="text-[#010A15] tracking-wide">Small group</p>
              </div>
              <div className="flex gap-3 mt-5 items-center">
                <p className="text-[#DD2509] text-[14px] font-bold">
                  From{" "}
                  <span className="text-[22px]">
                    €{activity.discounted_price}
                  </span>
                </p>
                <p className="text-[#010A15] text-[14px] font-normal">
                  Per Person
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityCard;
