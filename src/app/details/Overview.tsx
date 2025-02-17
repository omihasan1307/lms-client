import Image from "next/image";
import React from "react";

function Overview({ data }: any) {
  return (
    <div>
      <h2 className="text-xl font-extrabold">About</h2>
      <p className="mt-3 pr-8 text-base text-[#010A15B2]">
        {data?.description || ""}
      </p>
      <h2 className="text-xl font-extrabold mt-3">Overview</h2>
      <div className="flex flex-wrap  lg:w-4/5  sm:mb-2 -mx-2">
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-4 p-4 h-full items-center ">
            <Image
              src="/calendar-remove-01.png"
              height={20}
              width={20}
              alt="icon"
              className=""
            />
            <div className="">
              <h3 className="title-font font-bold text-[15px] text-[#010A15]">
                Free Cancelation
              </h3>
              <p className="text-[15px] text-[#010A15B2]">
                Cancel up to 24 hours in advance for a full refund
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-4 p-4 h-full items-center ">
            <Image src="/wheelchair.png" height={20} width={20} alt="icon" />
            <div>
              <h3 className="title-font font-bold text-[15px] text-[#010A15]">
                Wheelchair Accessible
              </h3>
              <p className="text-[15px] text-[#010A15B2]">Yes</p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-4 p-4 h-full items-center ">
            <Image
              src="/calendar-favorite-01.png"
              height={24}
              width={24}
              alt="icon"
            />
            <div>
              <h3 className="title-font font-bold text-[15px] text-[#010A15]">
                Reserve now & pay later
              </h3>
              <p className="text-[15px] text-[#010A15B2]">
                Keep your travel plans flexible — book your spot and pay nothing
                today.
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-4 p-4 h-full items-center ">
            <Image src="/stars.png" height={20} width={20} alt="icon" />
            <div>
              <h3 className="title-font font-bold text-[15px] text-[#010A15]">
                Covid-19 precautions
              </h3>
              <p className="text-[15px] text-[#010A15B2]">
                Special health and safety measures are in place. Check your
                activity voucher once you book for full details.
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-4 p-4 h-full items-center ">
            <Image src="/time-quarter.png" height={20} width={20} alt="icon" />
            <div>
              <h3 className="title-font font-bold text-[15px] text-[#010A15]">
                Duration 6.5 hours
              </h3>
              <p className="text-[15px] text-[#010A15B2]">
                Check availability to see starting times.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-4 p-4 h-full items-center ">
            <Image src="/flag-02.png" height={20} width={20} alt="icon" />
            <div>
              <h3 className="title-font font-bold text-[15px] text-[#010A15]">
                Live tour guide
              </h3>
              <p className="text-[15px] text-[#010A15B2]">English </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
