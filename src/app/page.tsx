import Image from "next/image";
import ActivityCard from "./_components/cards/ActivityCard";
import ReelsCard from "./_components/cards/ReelsCard";
import HeroSlider from "./_components/HeroSlider";
import Footer from "./_components/Footer";
import TrendingHeading from "./_components/TrendingHeading";
import MainLayout from "@/layout/MainLayout";
import { Suspense } from "react";
import DotLoader from "react-spinners/DotLoader";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <HeroSlider />
      </div>
      <div className="lg:px-20 px-10">
        <TrendingHeading />
        <Suspense
          fallback={
            <DotLoader
              color="red"
              loading={true}
              size={15}
              speedMultiplier={1}
            />
          }
        >
          <ActivityCard />
        </Suspense>
      </div>

      <div className="lg:px-20 px-10 py-10">
        <ReelsCard />
        {/* <ReelsCard />
        <ReelsCard />
        <ReelsCard />
        <ReelsCard /> */}
      </div>
    </MainLayout>
  );
}
