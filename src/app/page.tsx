import Service from "@/components/homepage/Service";
import HomeReview from "@/components/ui/HomeREview";

import { useGetCategoryQuery } from "@/redux/api/category/categorySlice";
import About_me from "@/components/homepage/about-me/About_me";
import States from "@/components/homepage/States";

import CoursesCarusoul from "@/components/ui/CoursesCarusoul";

import HowToEnroll from "@/components/homepage/HowToEnroll";
import Teachers from "@/components/ui/Teachers";

import { Suspense } from "react";
import { Metadata } from "next";
import HeaderPart from "@/components/ui/HeaderPart";
import Category from "@/components/ui/Category";

export default function Home() {
  return (
    <>
      <HeaderPart></HeaderPart>
      <div>
        <Service></Service>
      </div>
      <div className="mb-10">
        <Category></Category>
      </div>

      <div>
        <States></States>
      </div>

      {/* <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
      > */}
      <div className="my-14 mx-auto max-w-7xl">
        <About_me></About_me>
      </div>
      {/* </motion.div> */}

      <div>
        <HowToEnroll></HowToEnroll>
      </div>
      <div>
        <Teachers></Teachers>
      </div>
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center flex items-center justify-center py-10">
          Client Reviews
        </h1>
        <div className="bg-[#CFEAF0] py-28">
          <HomeReview></HomeReview>
        </div>
      </div>
      <div>
        <CoursesCarusoul></CoursesCarusoul>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the homepage of Pc builder",
};
