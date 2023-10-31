"use client";

import Hero from "@/components/homepage/Hero";
import { motion, useScroll, useSpring } from "framer-motion";
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
import CoursesCarusoul from "@/components/ui/CoursesCarusoul";
import Achievement from "@/components/ui/Achievement";
import HowToEnroll from "@/components/homepage/HowToEnroll";
import Teachers from "@/components/ui/Teachers";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 10,
    damping: 30,
    restDelta: 0.001,
  });
  const { data, isLoading } = useGetCategoryQuery(undefined);
  console.log(data);
  return (
    <>
      <div
        style={{ position: "relative" }}
        className="mb-10 bg-[#f2efe8] max-w-screen-2xl mx-auto pt-7 h-full overflow-hidden "
      >
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-[95%] md:w-[50%] pt-7 px-10 mx-auto md:mx-1 text-center md:text-left ">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              <div
                style={{
                  border: "3px solid black",
                  padding: "20px 40px",
                  borderRadius: "0px 20px 20px 20px",
                  display: "inline-block",
                }}
                className="font-mono text-lg my-6"
              >
                With Proven by Science Method
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 1 },
              }}
            >
              <div className="text-4xl md:text-7xl font-bold my-6">
                Lorem ipsum dolor sit amet. psum dolor sit amet.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.8, duration: 0.8 },
              }}
            >
              <div className="w-full md:w-[60%] my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis inventore soluta impedit neque mollitia magni.
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 2.16, duration: 1 },
                }}
              >
                <div className=" my-6 p-0 inline-block">
                  <button className="btn bg-[#1677ff] text-white hover:scale-125 hover:btn-success">
                    DO something
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full md:w-[50%]  flex items-center justify-center mx-auto ">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
            >
              <Image
                src={heroImage}
                height={600}
                width={600}
                style={{}}
                alt="feik"
              ></Image>
            </motion.div>
          </div>
        </div>
        <div className="">
          <Hero></Hero>
        </div>
      </div>
      <div>
        <HoverAnimation></HoverAnimation>
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
