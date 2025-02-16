import React from "react";
import Hero from "./Hero";
import WhatWeOffer from "./WhatWeOffer";
import HeroTwo from "./HeroTwo";
import Legal from "./Legal";
import MainLayout from "@/layout/MainLayout";

function AboutUs() {
  return (
    <MainLayout>
      <div className="px-6 md:px-24">
        <section className="mt-10 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold mb-2">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-[18px] text-[#010A15B2] leading-relaxed">
            Tourgeeky is an online booking platform for museums and attractions
            that connects travelers worldwide with more ways to experience
            culture.
          </p>
        </section>
        <Hero />
        <WhatWeOffer />
        <HeroTwo />
        <Legal />
      </div>
    </MainLayout>
  );
}

export default AboutUs;
