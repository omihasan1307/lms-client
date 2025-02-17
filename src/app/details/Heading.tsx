import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Heading({ data }: any) {
  return (
    <div className="my-5">
      <h2 className="text-[34px] font-bold">{data?.title || ""}</h2>

      <div className="flex gap-4 items-center justify-between mt-2 text-[15px]">
        <div className="flex items-center gap-5">
          <p className=" pr-4 bg-[#DD2509] py-[4px] px-2  text-white rounded-lg">
            Best Seller
          </p>

          <p className="flex gap-[10px] items-center justify-center border-l-2 pl-4 border-[#010A15B2] text-[#010A15B2]">
            <FaStar color="#FF9900" /> <span className="font-bold ">4.5</span>{" "}
            <span className="">(250)Reviews</span>
          </p>
          <p className="border-l-2 pl-4 border-[#010A15B2]">
            {" "}
            <span className="font-bold">Activity provider: </span>{" "}
            <span className="underline">{data?.contactInformation || ""}</span>
          </p>
        </div>
        <div className="py-2 px-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AiFillHeart
                  size={24}
                  color={data?.is_favorite ? "red" : "gray"}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to Wishlist</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

export default Heading;
