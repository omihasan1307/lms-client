import Image from "next/image";
import ActivityCard from "./_components/cards/ActivityCard";
import ReelsCard from "./_components/cards/ReelsCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 gap-3 px-24">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      <div className="grid grid-cols-5 gap-0 px-32">
        <ReelsCard/>
        <ReelsCard/>
        <ReelsCard/>
        <ReelsCard/>
        <ReelsCard/>
      </div>
    </>
  );
}
