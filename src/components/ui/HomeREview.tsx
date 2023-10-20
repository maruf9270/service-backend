"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

import Rating from "./Stars";
import { useGetAllQuery } from "@/redux/api/auth/authSlice";
import { useGetallreviewQuery } from "@/redux/api/review/reviewSlict";

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
    slidesToScroll: 3,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="w-[90%] mx-auto pb-10">
      <Slider {...settings}>
        {allReviews?.map((item: any, index) => (
          <div key={index}>
            <div className=" outline outline-brand p-5 rounded-md shadow-xl my-5 mx-4 h-[200px]">
              <p className="text-justify">{item?.review?.slice(0, 100)}</p>
              <p className="absolute bottom-20 italic">
                <Rating rating={item?.rating} />
              </p>
              <h1 className="text-xl font-bold mt-6 absolute bottom-10 italic">
                {item?.userId.name.firstName}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeReview;
