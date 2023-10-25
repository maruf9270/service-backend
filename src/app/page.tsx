"use client";

import Hero from "@/components/homepage/Hero";
import Service from "@/components/homepage/Service";
import HomeReview from "@/components/ui/HomeREview";
import heroImage from "../assets/heroMan.png";
import { useGetCategoryQuery } from "@/redux/api/category/categorySlice";
import Image from "next/image";
import Link from "next/link";
import Dots from "../assets/dots.png";
import About_me from "@/components/homepage/about-me/About_me";
import States from "@/components/homepage/States";
import HoverAnimation from "@/components/homepage/HoverAnimation";

export default function Home() {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  console.log(data);
  return (
    <>
      <div
        style={{ position: "relative" }}
        className="mb-10 bg-[#f2efe8] max-w-screen-2xl mx-auto pt-7  "
      >
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] p-5 ">
            <div
              style={{
                border: "5px solid black",
                padding: "20px 40px",
                borderRadius: "0px 20px 20px 20px",
              }}
            >
              With Proven by Science Method
            </div>
            <div
              style={{
                border: "5px solid black",
                padding: "20px 40px",
                borderRadius: "0px 20px 20px 20px",
              }}
            >
              With Proven by Science Method
            </div>
            <div
              style={{
                border: "5px solid black",
                padding: "20px 40px",
                borderRadius: "0px 20px 20px 20px",
              }}
            >
              With Proven by Science Method
            </div>
            <div
              style={{
                border: "5px solid black",
                padding: "20px 40px",
                borderRadius: "0px 20px 20px 20px",
              }}
            >
              With Proven by Science Method
            </div>
            <div></div>
          </div>
          <div className="w-full md:w-[50%] md:pl-52 relative ">
            <Image
              src={Dots}
              height={200}
              width={200}
              className="absolute"
              style={{
                top: "45px",
                right: "200px",
              }}
              alt="jfiej"
            ></Image>
            <Image
              src={heroImage}
              height={500}
              width={500}
              className="z-10 animation items-end"
              alt="feik"
            ></Image>
          </div>
        </div>
        <div className="relative bottom-0 ">
          <Hero></Hero>
        </div>
      </div>
      <div>
        <HoverAnimation></HoverAnimation>
      </div>
      <div>
        <States></States>
      </div>
      <div className="my-14 mx-auto max-w-7xl">
        <About_me></About_me>
      </div>
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center flex items-center justify-center py-10">
          Cateogries
        </h1>
        <div className="flex justify-between flex-wrap max-w-7xl mx-auto items-center">
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
        <div className="bg-[#CFEAF0] py-28">
          <HomeReview></HomeReview>
        </div>
      </div>
    </>
  );
}
