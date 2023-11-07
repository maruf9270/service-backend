"use client";
import { useGetCategoryQuery } from "@/redux/api/category/categorySlice";
import Link from "next/link";
import React from "react";
import catImage from "../../assets/CategoryImage.png";

const Category = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center flex items-center justify-center py-10">
          Top Cateogries
        </h1>
        <div className="flex justify-between flex-wrap max-w-7xl mx-auto items-center">
          {data?.data.map((data: any) => (
            <Link href={`/service-bycat/${data?.title}`} key={data._id}>
              <div className="relative rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30">
                <div
                  className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center w-64 mx-5 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-30"
                  style={{
                    backgroundImage: `url(${catImage.src})`,
                    backgroundPosition: "center center",
                  }}
                >
                  <span className="font-sans text-2xl font-bold text-white z-20">
                    {" "}
                    {data.title}
                  </span>
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",

                      opacity: 0.2, // Adjust the opacity to make it darker or lighter
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
