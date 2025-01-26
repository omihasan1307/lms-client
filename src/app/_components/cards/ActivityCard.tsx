import React from "react";
import {  AiFillHeart} from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

function ActivityCard() {
  return (
    <div className=" flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="max-w-sm py-32">
          <div className="bg-white relative transition duration-500 rounded-lg">
            <div className="relative">
              <img
                className="rounded-lg"
                src="https://www.travelandleisure.com/thmb/wsA6EXFuYkqtuJGLbQWw05-cwPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-como-MOSTBEAUTIFUL0921-cb08f3beff1041e4beefc67b5e956b23.jpg"
                alt="Dubai Tandem Skydive"
              />

              {/* Top-right corner: Price tag */}
              <div className="absolute top-2 right-2 py-2 px-4  ">
              <AiFillHeart size={24} color="gray" />

              </div>

              {/* Top-left corner: Rating */}
              <div className="absolute top-2 left-2 flex items-center  py-1 px-3 ">
              <AiFillStar size={24} color="#FF9900" />
              <p className="ml-2 text-white font-bold text-[14px]">4.5</p>
                <p className="ml-1 text-[#FFFFFFB2] text-[12px]">(1500 reviews)</p>
              </div>

              {/* Bottom-left corner of the image: Label */}
              <div className="absolute bottom-2 left-2 py-2 px-4 ">
                <span className="text-xs bg-[#DD2509] text-white rounded-md p-2">Adventure</span>
              </div>
            </div>

            <div className="py-6  rounded-lg bg-white">
              <h1 className="text-[#010A15] font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                Dubai: Tandem Skydive Experience at The Palm
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[#010A15] tracking-wide">1 day</p>
                <p>.</p>
                <p className="text-[#010A15] tracking-wide">Small group</p>
              </div>
              <div className="flex gap-3 mt-5 items-center">
                <p className="text-[#DD2509] text-[14px] font-bold">From <span className="text-[22px]"> €250</span></p> 
                <p className="text-[#010A15] text-[14px] font-normal">Per Person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
