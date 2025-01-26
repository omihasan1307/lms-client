import Image from "next/image";
import ActivityCard from "./_components/cards/ActivityCard";
import ReelsCard from "./_components/cards/ReelsCard";
import HeroSlider from "./_components/HeroSlider";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import TrendingHeading from "./_components/TrendingHeading";

export default function Home() {
  return (
    <>
    <Header/>
    <div>
      <HeroSlider/>
    </div>
    <TrendingHeading/>
      <div className="grid grid-cols-5 gap-3 px-20 mt-[-100px]">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      <div className="grid grid-cols-5 gap-0 px-20">
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
