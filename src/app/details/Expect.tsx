import React from "react";

function Expect({data}:any) {
  return (
    <div>
      <h2 className="text-xl font-extrabold mt-6">What To Expect</h2>
      <p className="  mt-3  mr-2  text-[#010A15B2] text-[15px]">
        Board the bus for your hop-on, hop-off tour at any of the stops along
        the route. Exchange your voucher for a ticket that is valid for 24, 48
        or 72 hours, depending on your schedule and preferences.
      </p>
      <p className="  mt-3  mr-2  text-[#010A15B2] text-[15px]">
        Disembark at any point to explore areas that interest you. Spend as much
        time as you like at any one stop, or skip those that don't interest you.
        Climb down to explore Vatican City and learn about the history of the
        Catholic Church or throw a coin in the Trevi Fountain, which legend has
        it ensures you return to Rome. Sit on the Spanish Steps and sample a
        local gelato or explore the Pantheon. Disembark to learn about the times
        of Roman gladiators in the Colosseum or stroll through the ancient Roman
        Forum. Read more about Big Bus Rome Hop-on Hop-off Open Top Tour -
        https://www.viator.com/tours/Rome/Big-Bus-Rome-Hop-on-Hop-off-Tour/d511-39333ROMEHOHO?mcid=5675
      </p>
      <p className="text-[#DD2509] text-[15px] font-bold mt-3">
        Operating Schedule
      </p>
      <div className="   sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-3">
        <div className="grid max-w-2xl ">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 opacity-0 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-black text-white">
                  1
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="flex flex-col p-2  items-center sm:flex-row ">
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Big Bus Tours Rome
                </p>
                <p className="text-sm text-gray-700">
                  Stop 1 - Termini Railway Station
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-black text-white">
                  2
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="flex flex-col p-2  items-center sm:flex-row ">
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Big Bus Tours Rome
                </p>
                <p className="text-sm text-gray-700">
                  Stop 1 - Termini Railway Station
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-black text-white">
                  3
                </div>
              </div>
              <div className="w-px h-full opacity-0" />
            </div>
            <div className="flex flex-col  p-2 sm:items-center sm:flex-row ">
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Big Bus Tours Rome
                </p>
                <p className="text-sm text-gray-700">
                  Stop 1 - Termini Railway Station
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-black text-white">
                  4
                </div>
              </div>
              <div className="w-px h-full opacity-0" />
            </div>
            <div className="flex flex-col  p-2 sm:items-center sm:flex-row ">
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Big Bus Tours Rome
                </p>
                <p className="text-sm text-gray-700">
                  Stop 1 - Termini Railway Station
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expect;
