import Image from "next/image";
import { format } from "path";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbPointFilled } from "react-icons/tb";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Queries({ data }: any) {
  // const schedule = data?.schedules?.map((sch: any) =>
  //   sch?.available_days?.map((day: any) => day.name)
  // );

  const schedule = data?.schedules?.[0];

  if (!schedule) return <p>No schedule available</p>;

  // Get available days from the schedule
  const availableDays = schedule.available_days.map((day: any) => day.name);

  return (
    <div>
      <h2 className="text-xl font-extrabold mt-6">Additional Queries</h2>
      <p className="text-[#DD2509] text-[15px] font-bold mt-3">
        What’s Included & Not Included
      </p>

      {/* ------------------ */}

      <div>
        {/* Inclusions & Exclusions Container */}
        <div className="flex flex-wrap bg-[#F4F4F4] rounded-lg mt-3">
          {/* Inclusion Header */}
          <div className="w-full sm:w-1/2">
            <div className="flex gap-2 p-4 items-center">
              <TbPointFilled className="text-[#69BA43] flex-shrink-0 text-md" />
              <p className="text-[15px] text-[#010A15] font-bold">Included</p>
            </div>
          </div>

          {/* Exclusion Header */}
          <div className="w-full sm:w-1/2">
            <div className="flex gap-2 p-4 items-center">
              <TbPointFilled className="text-[#9B341D] flex-shrink-0 text-md" />
              <p className="text-[15px] text-[#010A15] font-bold">Exclusions</p>
            </div>
          </div>

          {/* Map Inclusions */}
          <div className="w-full sm:w-1/2">
            {data?.inclusions?.map((item: any) => (
              <div key={item.id} className="flex gap-2 p-4 items-center">
                <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />
                <p className="text-[15px] text-[#010A15B2]">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Map Exclusions */}
          <div className="w-full sm:w-1/2">
            {data?.exclusions?.map((item: any) => (
              <div key={item.id} className="flex gap-2 p-4 items-center">
                <RxCross2 className="text-[#9B341D] flex-shrink-0 text-md" />
                <p className="text-[15px] text-[#010A15B2]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------ */}

      {/* booking Information */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Booking information
        </p>

        <div className="mt-3  px-5 bg-[#F4F4F4] rounded-lg py-5">
          {data?.bookingInformation}
        </div>
      </div>
      {/* contact Information */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Contact Information
        </p>

        <div className="mt-3  px-5 bg-[#F4F4F4] rounded-lg py-5">
          {data?.contactInformation}
        </div>
      </div>

      {/* cancellation Policy */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Cancellation Policy
        </p>

        <div className="mt-3  px-5 bg-[#F4F4F4] rounded-lg py-5">
          {data?.cancellationPolicy}
        </div>
      </div>

      {/* terms And Conditions */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Terms And Conditions
        </p>

        <div className="mt-3  px-5 bg-[#F4F4F4] rounded-lg py-5">
          {data?.termsAndConditions}
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

      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Opening Hours
        </p>
        <div className="text-[15px] text-[#010A15B2] my-3 space-y-3 bg-[#F4F4F4] p-5 rounded-lg">
          {weekDays.map((day) => {
            const isOpen = availableDays?.includes(day);
            return (
              <div
                key={day}
                className="flex justify-between border-b-[1px] pb-2"
              >
                <p className="font-bold">{day}</p>
                <p>
                  {isOpen ? (
                    <p>
                      {" "}
                      {schedule?.start_time} - {schedule?.end_time}{" "}
                    </p>
                  ) : (
                    <p className="text-red-400">Closed</p>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Queries;
