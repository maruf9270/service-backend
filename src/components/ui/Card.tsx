import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Card = (data: any) => {
  console.log(data);
  return (
    <div className="my-6">
      <Link href={`/single-service/${data.data._id}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="">
              <Button type="primary" className="w-full my-3">
                Add to Cart
              </Button>
              <Button type="primary" className="w-full">
                Book an Apointment
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
