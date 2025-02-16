import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbPointFilled } from "react-icons/tb";

function Queries({ data }: any) {
  return (
    <div>
      <h2 className="text-xl font-extrabold mt-6">Additional Queries</h2>
      <p className="text-[#DD2509] text-[15px] font-bold mt-3">
        What’s Included & Not Included
      </p>
      <div className="flex flex-wrap   bg-[#F4F4F4]  rounded-lg mt-3">
        <div className="sm:w-1/2 w-full">
          <div className="flex gap-2 p-4 h-full items-center">
            <TbPointFilled className="text-[#69BA43] flex-shrink-0 text-md" />{" "}
            {/* Set fixed size */}
            <div>
              <p className="text-[15px] text-[#010A15] font-bold">Included</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="flex gap-2 p-4 h-full items-center">
            <TbPointFilled className="text-[#9B341D] flex-shrink-0 text-md" />{" "}
            {/* Set fixed size */}
            <div>
              <p className="text-[15px] text-[#010A15] font-bold">Exclusions</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="flex gap-2 p-4 h-full items-center">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />{" "}
            {/* Set fixed size */}
            <div>
              <p className="text-[15px] text-[#010A15B2]">
                Multilingual audio headset
              </p>
            </div>
          </div>
        </div>

        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-2 p-4 h-full items-center ">
            <RxCross2 className="text-[#9B341D] flex-shrink-0 text-md" />

            <div className="">
              <p className="text-[15px] text-[#010A15B2]">
                Admission to attractions, monuments and museums
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-2 p-4 h-full items-center ">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />

            <div className="">
              <p className="text-[15px] text-[#010A15B2]">
                Hop-on hop-off map of Rome showing the route of the Panoramic
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-2 p-4 h-full items-center ">
            <RxCross2 className="text-[#9B341D] flex-shrink-0 text-md" />

            <div className="">
              <p className="text-[15px] text-[#010A15B2]">
                Optional gratuities
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-2 p-4 h-full items-center ">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />

            <div className="">
              <p className="text-[15px] text-[#010A15B2] ">WiFi available</p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-2 p-4 h-full items-center ">
            <RxCross2 className="text-[#9B341D] flex-shrink-0 text-md" />

            <div className="">
              <p className="text-[15px] text-[#010A15B2]">
                Please be advised that, only small dogs with kennel are admitted
                on board
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 w-full">
          <div className="  flex gap-2 p-4 h-full items-center ">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />

            <div className="">
              <p className="text-[15px] text-[#010A15B2] ">
                Interesting and informative commentary through the headphones.
                13 languages available
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Additional information */}
      <p className="text-[#DD2509] text-[15px] font-bold mt-3">
        Additional information
      </p>
      <div className="mt-3 bg-[#F4F4F4] rounded-lg py-5">
        <ul className="list-none pl-5 text-[#010A15B2] text-[15px] pr-2">
          <li className="mb-2 flex items-start">
            <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
            <p>Confirmation will be received at time of booking</p>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
            <p>
              <span className="text-black font-bold">Important:</span> Rome is a
              lively capital city and therefore political events, demonstrations
              and celebrations can disrupt the itinerary at any time, especially
              during special events, holidays summer and at weekends. While
              every effort is made to ensure a smooth and frequent service there
              may be delays, reduced frequency and route alterations due to
              traffic congestion and road closures
            </p>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
            <p>No heart problems or other serious medical conditions</p>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
            <p>Most travellers can participate</p>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
            <p>
              From April to October The Hop on Hop off bus operates everyday
              from 8:30AM to 6:45PM (First bus from Largo Peretti, Last bus
              6:45PM from Termini). Buses depart every 15/20 minutes from
              Termini Station (Stop 1)
            </p>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
            <p>
              From November to March the Hop on Hop off bus operates every day
              from 9:00 AM to 5:00 PM (First bus from Largo Peretti, Last bus
              5:30 PM from Termini). Buses depart every 15/20 minutes from
              Termini Station (Stop 1)
            </p>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
            <p>
              Authorized by the Municipality of Rome, our hop-on-hop-off route
              adheres to the city's decorum. Explore Rome effortlessly with
              conveniently located bus stops near prominent monuments and key
              points of interest.
            </p>
          </li>
        </ul>
      </div>
      {/* What’s Included & Not Included */}
      <p className="text-[#DD2509] text-[15px] font-bold mt-3">
        What’s Included & Not Included
      </p>
      <div className="bg-[#F4F4F4]  rounded-lg px-2 py-1 mt-3">
        <div className="sm:w-1/2 w-full mt-3">
          <div className="flex gap-2 py-2 px-2 h-full items-center">
            <TbPointFilled className="text-[#69BA43] flex-shrink-0 text-md" />{" "}
            {/* Set fixed size */}
            <div>
              <p className="text-[15px] text-[#010A15] font-bold">
                Dress Code (for all genders):
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="flex pb-2 gap-2 px-2 h-full items-center">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />{" "}
            {/* Set fixed size */}
            <div>
              <p className="text-[15px] text-[#010A15B2]">
                Knees and shoulders must be covered
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="flex pb-2 gap-2 px-2 h-full items-center">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />{" "}
            {/* Set fixed size */}
            <div>
              <p className="text-[15px] text-[#010A15B2]">
                No clothing with rips, holes, or transparent material{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="flex pb-2 gap-2 px-2 h-full items-center">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />{" "}
            {/* Set fixed size */}
            <div>
              <p className="text-[15px] text-[#010A15B2]">
                No hats or sunglasses worn inside{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Opening hours */}
      <p className="text-[#DD2509] text-[15px] font-bold mt-3">Opening hours</p>
      <div className="text-[15px] text-[#010A15B2] my-3 space-y-3 bg-[#F4F4F4] p-5 rounded-lg">
        <div className="flex justify-between border-b-[1px] pb-2 font-bold">
          <p>Saturday</p>
          <p>07:00 - 19:00</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-2">
          <p>Sunday</p>
          <p>07:00 - 19:00</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-2">
          <p>Monday</p>
          <p>07:00 - 19:00</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-2">
          <p>Tuesday</p>
          <p>07:00 - 19:00</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-2">
          <p>Wednesday</p>
          <p>07:00 - 19:00</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-2">
          <p>Thursday</p>
          <p>07:00 - 19:00</p>
        </div>
        <div className="flex justify-between border-b-[1px] pb-2">
          <p>Friday</p>
          <p>07:00 - 19:00</p>
        </div>
      </div>
    </div>
  );
}

export default Queries;
