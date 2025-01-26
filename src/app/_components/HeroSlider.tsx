import React from "react";
import { BsDashLg } from "react-icons/bs";
import { FaYoutube,FaFacebookF, FaLinkedin, FaLinkedinIn, FaSearch  } from "react-icons/fa";
import { FaCalendar, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";



const HeroSection = () => {
  return (
    <div className="px-6 md:px-20 !rounded-2xl">
      <div
        className="relative w-full  mx-auto h-[380px] bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url('https://media.architecturaldigest.com/photos/66a951edce728792a48166e6/master/pass/GettyImages-955441104.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b rounded-2xl from-gray-900/40 to-gray-900/90"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col  text-white h-full ">
          {/* Title and Subtitle */}
          <div className=" mb-6">
            <p className="text-[18px] text-white uppercase  mt-10 font-normal">
              — Blue Mountain Country Club And Resort
            </p>
            <h1 className="text-[74px] md:text-[74px] font-extrabold">
              Treebo Tryst
            </h1>
            <div className="flex items-center">
                <p className="text-[14px] mr-4 font-bold">Follow Us On </p> <BsDashLg  className="font-bold mr-4 "/><FaYoutube className="w-4 h-3 mr-4"/> <FaFacebookF  className="w-4 h-3 mr-4"/>
                <FaTwitter  className="w-4 h-3 mr-4"/> <FaInstagram  className="w-4 h-3 mr-4"/><FaLinkedinIn  className="w-4 h-3 mr-4"/>


            </div>

            
          </div>
          {/* SLIDE BTN  */}
          <div className="absolute bottom-10 flex gap-3">
            <button className="bg-black p-4 rounded-full border-2 border-black">
            <IoMdArrowBack />

            </button>
            <button className="border-2 border-black p-4 rounded-full">
            <IoArrowForward />

            </button>
          </div>

          

          {/* Search Bar */}
          <div className="absolute w-[850px] shadow-lg bottom-[-90px] left-1/2 transform -translate-x-1/2 flex flex-col bg-white p-5 mx-auto rounded-lg">
            <div className="flex gap-4">
            <div className="  w-full max-w-3xl bg-[#F0F0F0] rounded-xl shadow-lg p-4 flex items-center space-x-4">
              <input
                type="text"
                placeholder="What Are You Going?"
                className="flex-grow text-[#010A15] placeholder-[#010A15] outline-none border-none bg-transparent font-bold text-[15px]"
              />
              <button className="text-gray-700 hover:text-black">
                <FaCalendar/>
              </button>
            </div>
            <button className="bg-[#010A15] px-9 rounded-lg"><FaSearch/></button>
            </div>

            {/* Popular Searches */}
            <div className="mt-6 flex  flex-col text-black ">
              <p className="text-xs mb-3 font-bold">Popular Searches:</p>
              <div className="flex flex-wrap  gap-3">
                {[
                  "Italy",
                  "Hop on hop off",
                  "Colosseum",
                  "Entry Tickets",
                  "Museums",
                  "open bus",
                ].map((item, index) => (
                  <button
                    key={index}
                    className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-1.5 rounded-full text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
