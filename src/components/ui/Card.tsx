import { IService } from "@/schemas/serviceInterfafce";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "./Stars";

const Card = ({ data }: { data: IService }) => {
  return (
    <>
      <div className="h-400 overflow-hidden border-[1px] border-stone-400 rounded-lg gap-2 ml-2">
        <div className="h-[400px] hover:-translate-y-full transition ease-in-out duration-500">
          <div className=" h-full p-5 ">
            <div className="flex items-center justify-center ">
              <Image
                src={data.image}
                height={200}
                width={180}
                className="rounded-md max-h-48"
                alt="Course Image"
              ></Image>
            </div>
            <div className="my-3 p-3">
              <h2 className="text-xl font-bold font-serif">{data.title}</h2>
              <p className="text-gray-500 font-serif">
                {data.description.length > 100 ? (
                  <>{data.description.slice(0, 100)}...</>
                ) : (
                  data.description
                )}
                ...
              </p>
              <div className="mt-2">
                <Rating rating={4}></Rating>
              </div>
              <div className="text-2xl font-bold font-serif">${data.price}</div>
            </div>
          </div>
          <div
            className="h-[400px] "
            style={{
              backgroundColor: "#54595f",
              backgroundImage: `url(${data.image})`,

              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
              zIndex: "-2",
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                zIndex: "-1",
                opacity: 0.5, // Adjust the opacity to make it darker or lighter
              }}
            />
            <div className="z-10 text-white p-5">
              <div className=" text-justify">{data.description}</div>
              <div className="absolute bottom-6 flex justify-between w-[88%]">
                <Link href={`/single-service/${data._id}`}>
                  <Button type="primary">See Details</Button>
                </Link>
                <Link href={`/book-apointment/${data._id}`}>
                  <Button
                    type="primary"
                    disabled={data.available === false ? true : false}
                  >
                    Book an Apointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
