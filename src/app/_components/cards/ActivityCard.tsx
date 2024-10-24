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
                src="https://s3-alpha-sig.figma.com/img/82ad/eeaf/50a0ae2d1c41c877eb1c9b4bfc6706e6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jJql2bfGObTULJuA4lAG0iaIVWcYASO96vO26HGR6sVjK--4MOeHIWgJ2OO5jlRB30fVWAo-jCSogypz75lfFZUUC3KLhJ5AZ-8nwKt7RAMQrE6QmErmyX72Pomz-8AKr3ZyLf5asAl3QIMQVqTZt8BRwuuU3OT-zmUVAwzKU1nQi-gmomt9dR33S0UHga3BHoSVqJqo9qg7lipU2MsYXgcyTXP0XKtOQEGdHcWdC8pZcw9WcztXXMSlRW-2ODqaNlqk3AWncLI-7O~IaTrYKoCkhsBcKSN-gvm-8KD0qsb-Dev6vPphDl8Rb8Y5TRlZSALAim1JvIfIi872BsGGLQ__"
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
