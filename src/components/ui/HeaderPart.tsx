"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../assets/heroMan.png";
import Hero from "../homepage/Hero";

const HeaderPart = () => {
  return (
    <div>
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
          <Suspense fallback={<div>Loading.......</div>}>
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
          </Suspense>
        </div>
        <div className="">
          <Hero></Hero>
        </div>
      </div>
    </div>
  );
};

export default HeaderPart;
