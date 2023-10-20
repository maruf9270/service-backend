"use client";
import Card from "@/components/ui/Card";
import { useGetServiceBycatQuery } from "@/redux/api/service/serviceSlice";
import React from "react";

const Cat = ({ params }: { params: { cat: string } }) => {
  const { data }: any = useGetServiceBycatQuery(params.cat);
  console.log(data);
  return (
    <div>
      <div className="flex justify-around items-center flex-wrap max-w-7xl mx-auto ">
        {data?.data?.data.map((service: any) => (
          <Card key={service._id} data={service}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cat;
