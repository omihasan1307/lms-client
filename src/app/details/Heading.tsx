import React from "react";
import { FaStar } from "react-icons/fa6";

function Heading() {
  return (
    <div className="my-5">
      <h2 className="text-[34px] font-bold">
        Hop-On Hop-Off Panoramic Open Bus Ticket
      </h2>

      <div className="flex gap-4  items-center mt-2 text-[15px]">
        <p className=" pr-4 bg-[#DD2509] py-[4px] px-2  text-white rounded-lg">
          Best Seller
        </p>

        <p className="flex gap-[10px] items-center justify-center border-l-2 pl-4 border-[#010A15B2] text-[#010A15B2]">
          <FaStar color="#FF9900" />{" "}
          <span className="font-bold ">4.5</span>{" "}
          <span className="">(250)Reviews</span>
        </p>
        <p className="border-l-2 pl-4 border-[#010A15B2]">
          {" "}
          <span className="font-bold">Activity provider: </span> <span className="underline">Gray Line - I Love Rome</span>
        </p>
        
      </div>
    </div>
  );
}

export default Heading;
