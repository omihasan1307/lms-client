import MainLayout from "@/layout/MainLayout";
import ThirdSection from "./_components/page/ThirdSection";
import HeroSection from "./_components/page/HeroSection";
import ActivityCarousel from "./_components/cards/ActivityCarousel";
import ModuleSection from "./_components/page/ModuleSection";
import { getCourses, getModules } from "@/actions/get.action";

export default async function Home() {
  const courses = await getCourses("");
  const modulesData = await getModules();


  return (
    <MainLayout>
      <div>
        <HeroSection />
        <ActivityCarousel data={courses} />
        <ThirdSection />
        <ModuleSection modulesData={modulesData} />
      </div>
    </MainLayout>
  );
}
