import { IService } from "@/schemas/serviceInterfafce";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }: { data: IService }) => {
  return (
    <div className="my-6">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={data.image}
            height={300}
            width={300}
            alt="iej"
            className="rounded-lg"
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <div>
            <span className=" font-bold">Price: </span> {data.price} <br />
            <span className=" font-bold">Status: </span>{" "}
            {data.available === true ? (
              <span className="text-green-500">Active</span>
            ) : (
              <span className="text-red-500">Inactive</span>
            )}
          </div>
          <p>
            {data.description.length > 100 ? (
              <>{data.description.slice(0, 100)}...</>
            ) : (
              data.description
            )}
          </p>
          <div className="">
            <Link href={`/single-service/${data._id}`}>
              <Button type="primary" className="w-full">
                See Details
              </Button>
            </Link>
            <Button
              type="primary"
              className="w-full my-3"
              disabled={data.available === false ? true : false}
            >
              Add to Cart
            </Button>
            <Link href={`/book-apointment/${data._id}`}>
              <Button
                type="primary"
                className="w-full"
                disabled={data.available === false ? true : false}
              >
                Book an Apointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
