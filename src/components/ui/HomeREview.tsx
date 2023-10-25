"use client";

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

const HomeReview = () => {
  const [allReviews, setAllReviews] = useState([]);
  const { data } = useGetallreviewQuery(undefined);
  useEffect(() => {
    if (data?.data) {
      setAllReviews(data?.data);
    }
  }, [data?.data]);

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
  console.log(allReviews);
  return (
    <div className="w-[90%] mx-auto pb-10] relative overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <span className="border-[5px] border-black rounded-full px-14 py-5 ">
          Reviews
        </span>
        <p className="w-[35%] text-5xl text-center">
          Results I have helped to create
        </p>
        <p className="">Hear out what my clients say about me.</p>
      </div>
      <div className="absolute -right-14 top-10">
        <Image src={dots.src} height={200} width={200}></Image>
      </div>

      <Slider {...settings}>
        {allReviews?.map((item: any, index) => (
          <div key={index}>
            <div>
              <div className=" outline outline-brand p-5 rounded-md shadow-xl my-5 mx-4 h-full flex flex-col bg-white relative">
                <p className="text-justify">{item?.review?.slice(0, 100)}</p>
                <div className="-mb-11 justify-center flex items-center">
                  <CaretDownOutlined className="text-3xl" />
                </div>
              </div>
              <div className=" flex justify-center items-center flex-col ">
                <Image
                  src={item?.userId.profileImage}
                  height={100}
                  width={100}
                  className="rounded-full border-[2px] border-black bg-white "
                  alt="jfiej"
                ></Image>
                <span> {item?.userId.name.firstName}</span>
                <p className="bottom-20 italic">
                  <Rating rating={item?.rating} />
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeReview;
