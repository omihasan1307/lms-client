"use client"

// components/Slider.js
import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl: '/images/eiffel-tower.jpg', // Replace with the correct path to your image
      title: 'Treebo Tryst',
      subtitle: 'Blue Mountain Country Club And Resort',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px]">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-30"></div>
      <img
        src={slides[currentSlide].imageUrl}
        alt="slider image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-5xl font-bold">{slides[currentSlide].title}</h2>
        <p className="text-lg mt-4">{slides[currentSlide].subtitle}</p>

        <div className="mt-4 flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-white p-4 rounded-lg shadow-lg flex space-x-4 items-center">
          <input
            type="text"
            className="border-none focus:ring-0 focus:outline-none"
            placeholder="What Are You Going?"
          />
          <button className="bg-black text-white p-2 rounded-md">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="flex space-x-2 mt-4 justify-center">
          <button className="px-4 py-2 bg-gray-100 rounded-full">Italy</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full">Hop on hop off</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full">Colosseum</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full">Entry Tickets</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full">Museums</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full">Open Bus</button>
        </div>
      </div>

      {/* Arrows */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white z-30"
        onClick={prevSlide}
      >
        <i className="fas fa-chevron-left text-3xl"></i>
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white z-30"
        onClick={nextSlide}
      >
        <i className="fas fa-chevron-right text-3xl"></i>
      </button>
    </div>
  );
};

export default Slider;
