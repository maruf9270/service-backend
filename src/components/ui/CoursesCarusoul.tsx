"use client";
import { useGetServicesQuery } from "@/redux/api/service/serviceSlice";
import React from "react";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import dots from "../../assets/dots.png";

import Rating from "./Stars";
import { useGetAllQuery } from "@/redux/api/auth/authSlice";
import { useGetallreviewQuery } from "@/redux/api/review/reviewSlict";
import { Button, Image } from "antd";
import { RightOutlined, CaretDownOutlined } from "@ant-design/icons";
import Link from "next/link";
const CoursesCarusoul = () => {
  let settings = {
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    nextArrow: <RightOutlined />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { data, isLoading, isError }: any = useGetServicesQuery(undefined);
  return (
    <div className="bg-black">
      <div className="py-10  w-[90%] mx-auto text-white ">
        <div className="w-[90%] mx-auto pb-10] relative overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <span className="border-[5px] border-white rounded-full px-14 py-5 ">
              Reviews
            </span>
            <p className="w-[35%] text-5xl text-center">
              Results I have helped to create
            </p>
            <p className="">Hear out what my clients say about me.</p>
          </div>

          <Slider {...settings}>
            {data?.data?.data?.map((item: any, index: number) => (
              <div key={index}>
                <div>
                  <div className=" outline outline-brand p-5 rounded-md shadow-xl my-5 mx-4 h-full flex flex-col bg-white relative"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link href={"/services"} className="bun btn-primary ">
            Courses
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesCarusoul;
