import Image from "next/image";
import ActivityCard from "./_components/cards/ActivityCard";
import ReelsCard from "./_components/cards/ReelsCard";
import Slider from "./_components/hero/sliders/sliders";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <div>
      <Slider></Slider>
    </div>
      <div className="grid grid-cols-5 gap-3 px-24">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      <div className="grid grid-cols-5 gap-0 px-32">
        <ReelsCard />
        <ReelsCard />
        <ReelsCard />
        <ReelsCard />
        <ReelsCard />
      </div>

      <Footer/>
    </>
  );
}
