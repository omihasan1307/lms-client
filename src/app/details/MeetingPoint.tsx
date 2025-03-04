import Image from "next/image";
import React from "react";

function MeetingPoint({ data }: any) {
  return (
    <div>
      <h2 className="text-xl font-extrabold">Meeting Point</h2>
      <div className="flex mt-4 ml-2 gap-4 items-center">
        <div>
          <Image
            src="/location-favourite-02.png"
            height={20}
            width={20}
            alt="Meeting point icon"
          />
        </div>
        <p className="text-[#DD2509] text-[15px] font-bold">
          {data?.option?.meet?.address}
        </p>
      </div>
      <p className="bg-[#F4F4F4] mt-3 p-6 mr-2 rounded-lg text-[#010A15B2] text-[15px]">
        {data?.option?.meet?.description}
      </p>

      {/* Drop-off Section */}
      <h2 className="text-xl font-extrabold mt-6">Drop-off Point</h2>
      <div className="flex mt-4 ml-2 gap-4 items-center">
        <div>
          <Image
            src="/location-favourite-02.png"
            height={20}
            width={20}
            alt="Drop-off point icon"
          />
        </div>
        <p className="text-[#DD2509] text-[15px] font-bold">
          {data.option?.drop?.address}
        </p>
      </div>
      <p className="bg-[#F4F4F4] mt-3 p-6 mr-2 rounded-lg text-[#010A15B2] text-[15px]">
        {data?.option?.drop?.description}
      </p>
    </div>
  );
}

export default MeetingPoint;
