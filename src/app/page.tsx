"use client";

import Service from "@/components/homepage/Service";
import HomeReview from "@/components/ui/HomeREview";
import Hero from "@/components/ui/Hero";
import { useGetCategoryQuery } from "@/redux/api/category/categorySlice";
import Link from "next/link";

export default function Home() {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  console.log(data);
  return (
    <>
      <div>
        <Hero></Hero>
      </div>

      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center flex items-center justify-center py-10">
          Cateogries
        </h1>
        <div className="flex justify-between flex-nowrap max-w-7xl mx-auto items-center">
          {data?.data.map((data: any) => (
            <Link href={`/service-bycat/${data?.title}`} key={data._id}>
              <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center w-64 mx-5 shadow-lg">
                <span className="font-sans text-2xl font-bold">
                  {" "}
                  {data.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center flex items-center justify-center py-10">
          Our Featured Services
        </h1>
        <Service></Service>
      </div>
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center flex items-center justify-center py-10">
          Client Reviews
        </h1>
        <HomeReview></HomeReview>
      </div>
    </>
  );
}
