import Image from "next/image";
import ActivityCard from "./_components/cards/ActivityCard";
import ReelsCard from "./_components/cards/ReelsCard";
import HeroSlider from "./_components/HeroSlider";
import Footer from "./_components/Footer";
import TrendingHeading from "./_components/TrendingHeading";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <HeroSlider />
      </div>
      <TrendingHeading />
     
        <ActivityCard />
   
      <div className="grid grid-cols-5 gap-0 px-20">
        <ReelsCard />
        <ReelsCard />
        <ReelsCard />
        <ReelsCard />
        <ReelsCard />
      </div>
    </MainLayout>
  );
}
