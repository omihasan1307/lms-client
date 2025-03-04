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

interface QueryData {
  inclusions?: { id: number; name: string }[];
  exclusions?: { id: number; name: string }[];
  bookingInformation?: string;
  contactInformation?: string;
  cancellationPolicy?: string;
  termsAndConditions?: string;
  schedules?: {
    start_time: string;
    end_time: string;
    available_days: { id: number; name: string }[];
  }[];
  audio_guides_languages?: { keyword: string }[];
  booklet_languages?: { keyword: string }[];
  name?: string;
  reference_code?: string;
  maximum_group_size?: number;
  is_wheelchair_accessible?: boolean;
  skip_the_line?: boolean;
  valid_for?: number;
  has_fixed_time?: boolean;
  audio_guide?: boolean;
  booklet?: boolean;
  is_private?: boolean;
  drop_off_type?: string;
  meeting_point_type?: string;
  transfer?: {
    transferType: string;
    pickupLocation: string;
    dropoffLocation: string;
    vehicleType: string;
    luggageAllowance: string;
  };
  rental?: {
    rentalItemName: string;
    rentalType: string;
    rentalPeriod: string;
    ageRequirement: string;
    damagePolicy: string;
  };
  notSuitable?: { id: number; condition: string }[];
  notAllowed?: { id: number; restriction: string }[];
  mustCarryItems?: { id: number; item: string }[];
}

function Queries({ data }: { data: QueryData }) {
  const schedule = data?.schedules?.[0];

  if (!schedule) return <p>No schedule available</p>;

  const availableDays = schedule.available_days.map((day) => day.name);

  return (
    <div>
      <h2 className="text-xl font-extrabold mt-6">Additional Queries</h2>

      {/* Inclusions & Exclusions */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          What’s Included & Not Included
        </p>
        <div className="flex flex-wrap bg-[#F4F4F4] rounded-lg mt-3">
          {/* Inclusions */}
          <div className="w-full sm:w-1/2">
            <div className="flex gap-2 p-4 items-center">
              <TbPointFilled className="text-[#69BA43] flex-shrink-0 text-md" />
              <p className="text-[15px] text-[#010A15] font-bold">Included</p>
            </div>
            {data?.inclusions?.map((item) => (
              <div key={item.id} className="flex gap-2 p-4 items-center">
                <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />
                <p className="text-[15px] text-[#010A15B2]">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Exclusions */}
          <div className="w-full sm:w-1/2">
            <div className="flex gap-2 p-4 items-center">
              <TbPointFilled className="text-[#9B341D] flex-shrink-0 text-md" />
              <p className="text-[15px] text-[#010A15] font-bold">Exclusions</p>
            </div>
            {data?.exclusions?.map((item) => (
              <div key={item.id} className="flex gap-2 p-4 items-center">
                <RxCross2 className="text-[#9B341D] flex-shrink-0 text-md" />
                <p className="text-[15px] text-[#010A15B2]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Information */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Booking Information
        </p>
        <div className="mt-3 px-5 bg-[#F4F4F4] rounded-lg py-5">
          {data?.bookingInformation || "No booking information available."}
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Contact Information
        </p>
        <div className="mt-3 px-5 bg-[#F4F4F4] rounded-lg py-5">
          {data?.contactInformation || "No contact information available."}
        </div>
      </div>

      {/* Cancellation Policy */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Cancellation Policy
        </p>
        <div className="mt-3 px-5 bg-[#F4F4F4] rounded-lg py-5">
          {data?.cancellationPolicy || "No cancellation policy available."}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Terms and Conditions
        </p>
        <div className="mt-3 px-5 bg-[#F4F4F4] rounded-lg py-5">
          {data?.termsAndConditions || "No terms and conditions available."}
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Additional Information
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
                lively capital city, and political events, demonstrations, and
                celebrations can disrupt the itinerary at any time, especially
                during special events, holidays, summer, and weekends.
              </p>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
              <p>No heart problems or other serious medical conditions</p>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
              <p>Most travelers can participate</p>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
              <p>
                From April to October, the Hop-on Hop-off bus operates every day
                from 8:30 AM to 6:45 PM. Buses depart every 15/20 minutes from
                Termini Station (Stop 1).
              </p>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
              <p>
                From November to March, the Hop-on Hop-off bus operates every day
                from 9:00 AM to 5:00 PM. Buses depart every 15/20 minutes from
                Termini Station (Stop 1).
              </p>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[#69BA43] text-2xl leading-none mr-2">•</span>
              <p>
                Authorized by the Municipality of Rome, our Hop-on Hop-off route
                adheres to the city's decorum. Explore Rome effortlessly with
                conveniently located bus stops near prominent monuments and key
                points of interest.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Dress Code */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">Dress Code</p>
        <div className="bg-[#F4F4F4] rounded-lg px-2 py-1 mt-3">
          <div className="flex gap-2 py-2 px-2 items-center">
            <TbPointFilled className="text-[#69BA43] flex-shrink-0 text-md" />
            <p className="text-[15px] text-[#010A15] font-bold">
              Dress Code (for all genders):
            </p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />
            <p className="text-[15px] text-[#010A15B2]">
              Knees and shoulders must be covered
            </p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />
            <p className="text-[15px] text-[#010A15B2]">
              No clothing with rips, holes, or transparent material
            </p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <IoCheckmarkOutline className="text-[#69BA43] flex-shrink-0 text-md" />
            <p className="text-[15px] text-[#010A15B2]">
              No hats or sunglasses worn inside
            </p>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Opening Hours
        </p>
        <div className="text-[15px] text-[#010A15B2] my-3 space-y-3 bg-[#F4F4F4] p-5 rounded-lg">
          {weekDays.map((day) => {
            const isOpen = availableDays.includes(day);
            return (
              <div
                key={day}
                className="flex justify-between border-b-[1px] pb-2"
              >
                <p className="font-bold">{day}</p>
                <p>
                  {isOpen ? (
                    `${schedule.start_time} - ${schedule.end_time}`
                  ) : (
                    <span className="text-red-400">Closed</span>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Sections */}
      <div>
        <p className="text-[#DD2509] text-[15px] font-bold mt-3">
          Tour Details
        </p>
        <div className="mt-3 bg-[#F4F4F4] rounded-lg p-5">
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Name:</span> {data?.name}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Reference Code:</span>{" "}
            {data?.reference_code}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Maximum Group Size:</span>{" "}
            {data?.maximum_group_size}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Wheelchair Accessible:</span>{" "}
            {data?.is_wheelchair_accessible ? "Yes" : "No"}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Skip the Line:</span>{" "}
            {data?.skip_the_line ? "Yes" : "No"}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Valid For:</span> {data?.valid_for} days
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Fixed Time:</span>{" "}
            {data?.has_fixed_time ? "Yes" : "No"}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Audio Guide:</span>{" "}
            {data?.audio_guide ? "Available" : "Not Available"}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Booklet:</span>{" "}
            {data?.booklet ? "Available" : "Not Available"}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Private Tour:</span>{" "}
            {data?.is_private ? "Yes" : "No"}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Drop-off Type:</span>{" "}
            {data?.drop_off_type}
          </p>
          <p className="text-[15px] text-[#010A15B2]">
            <span className="font-bold">Meeting Point Type:</span>{" "}
            {data?.meeting_point_type}
          </p>
        </div>
      </div>

      {/* Transfer Details */}
      {data?.transfer && (
        <div>
          <p className="text-[#DD2509] text-[15px] font-bold mt-3">
            Transfer Details
          </p>
          <div className="mt-3 bg-[#F4F4F4] rounded-lg p-5">
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Transfer Type:</span>{" "}
              {data.transfer.transferType}
            </p>
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Pickup Location:</span>{" "}
              {data.transfer.pickupLocation}
            </p>
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Drop-off Location:</span>{" "}
              {data.transfer.dropoffLocation}
            </p>
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Vehicle Type:</span>{" "}
              {data.transfer.vehicleType}
            </p>
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Luggage Allowance:</span>{" "}
              {data.transfer.luggageAllowance}
            </p>
          </div>
        </div>
      )}

      {/* Rental Details */}
      {data?.rental && (
        <div>
          <p className="text-[#DD2509] text-[15px] font-bold mt-3">
            Rental Details
          </p>
          <div className="mt-3 bg-[#F4F4F4] rounded-lg p-5">
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Rental Item:</span>{" "}
              {data.rental.rentalItemName}
            </p>
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Rental Type:</span>{" "}
              {data.rental.rentalType}
            </p>
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Rental Period:</span>{" "}
              {data.rental.rentalPeriod}
            </p>
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Age Requirement:</span>{" "}
              {data.rental.ageRequirement}
            </p>
            <p className="text-[15px] text-[#010A15B2]">
              <span className="font-bold">Damage Policy:</span>{" "}
              {data.rental.damagePolicy}
            </p>
          </div>
        </div>
      )}

      {/* Not Suitable */}
      {data?.notSuitable && data.notSuitable.length > 0 && (
        <div>
          <p className="text-[#DD2509] text-[15px] font-bold mt-3">
            Not Suitable For
          </p>
          <div className="mt-3 bg-[#F4F4F4] rounded-lg p-5">
            <ul className="list-disc list-inside">
              {data.notSuitable.map((item) => (
                <li key={item.id} className="text-[15px] text-[#010A15B2]">
                  {item.condition}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Not Allowed */}
      {data?.notAllowed && data.notAllowed.length > 0 && (
        <div>
          <p className="text-[#DD2509] text-[15px] font-bold mt-3">
            Not Allowed
          </p>
          <div className="mt-3 bg-[#F4F4F4] rounded-lg p-5">
            <ul className="list-disc list-inside">
              {data.notAllowed.map((item) => (
                <li key={item.id} className="text-[15px] text-[#010A15B2]">
                  {item.restriction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Must Carry Items */}
      {data?.mustCarryItems && data.mustCarryItems.length > 0 && (
        <div>
          <p className="text-[#DD2509] text-[15px] font-bold mt-3">
            Must Carry Items
          </p>
          <div className="mt-3 bg-[#F4F4F4] rounded-lg p-5">
            <ul className="list-disc list-inside">
              {data.mustCarryItems.map((item) => (
                <li key={item.id} className="text-[15px] text-[#010A15B2]">
                  {item.item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Queries;