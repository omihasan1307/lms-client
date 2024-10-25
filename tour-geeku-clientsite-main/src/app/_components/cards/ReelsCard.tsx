import React from "react";

function ReelsCard() {
  return (
    <div className="flex justify-center items-center mb-20 w-60">
      <div className="flex flex-col justify-between w-60  rounded-lg  sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer bg-[url('https://cdn.pixabay.com/photo/2023/10/13/17/10/mushroom-8313142_1280.jpg')] bg-cover">
        
        {/* Empty div to push the content to the bottom */}
        <div className="flex-grow"></div>

        {/* Bottom Content */}
        <div className="p-4 flex flex-col mb-1">
          <h3 className="text-[15px] font-bold pb-2 text-white">Sunset</h3>
          <p className="truncate text-[#FFFFFFB2] text-sm font-normal">Subtitle Is Here</p>
        </div>
      </div>
    </div>
  );
}

export default ReelsCard;
