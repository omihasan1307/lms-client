"use client";
import ActivityList from "./_components/cards/ActivityList";
import ActivityCarousel from "./_components/cards/ActivityCarousel";
import HeroSlider from "./_components/HeroSlider";
import MainLayout from "@/layout/MainLayout";
import { useGetProduct } from "@/hooks/get.hooks";
import { ClipLoader } from "react-spinners"; // Simple spinner
import Heading from "./_components/Heading";
import ReelsCard from "./_components/cards/ReelsCard";
import BlogCard from "./_components/cards/BlogCard";

export default function Home() {
  const { data, isLoading, error } = useGetProduct();

  if (isLoading) {
    return (
      <MainLayout>
        <div>
          <HeroSlider />
        </div>
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#010A15" size={50} />
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div>
          <HeroSlider />
        </div>
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">
            Error loading data. Please try again later.
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div>
        <HeroSlider />
      </div>
      <div className="lg:px-20 px-10 mt-32">
        {data?.data?.popular_products && (
          <>
            {data.data.popular_products.length < 4 ? (
              <ActivityList data={data.data.popular_products} />
            ) : (
              <ActivityCarousel data={data.data.popular_products} />
            )}
          </>
        )}

        {/* Tours Section */}
        {data?.data?.tours?.data && (
          <>
            <Heading
              title="All Tours"
              description="Sost Brilliant Reasons Entrada should be your one-stop-one"
              showButtons={false}
            />
            <ActivityList data={data.data.tours.data} />{" "}
            {/* Always display tours as a list */}
          </>
        )}
      </div>
      {data?.data?.reels && (
        <>
          <div className="lg:px-20 px-10 py-10">
            <Heading
              title="Reels"
              description="Check out our latest reels"
              showButtons={false}
            />

            <ReelsCard data={data?.data?.reels} />
          </div>
        </>
      )}
      <div className="lg:px-20 px-10 py-10">
        <Heading
          title="Blogs"
          description="Check out our latest blogs"
          showButtons={false}
        />
        {data?.data?.blogs && <BlogCard data={data?.data?.blogs} />}
      </div>
    </MainLayout>
  );
}
