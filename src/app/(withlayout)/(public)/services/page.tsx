"use client";
import Card from "@/components/ui/Card";
import { useGetServicesQuery } from "@/redux/api/service/serviceSlice";
import React from "react";

const Services = () => {
  const { data }: any = useGetServicesQuery({ params: { page: 1 } });

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-around items-center flex-wrap max-w-7xl mx-auto">
        {data?.data?.data.map((service: any) => (
          <Card key={service._id} data={service}></Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
