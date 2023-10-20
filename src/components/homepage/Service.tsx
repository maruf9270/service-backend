"use client";
import { useGetServicesQuery } from "@/redux/api/service/serviceSlice";
import React from "react";
import Card from "../ui/Card";

const Service = () => {
  const { data, isLoading, isError }: any = useGetServicesQuery(undefined);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-around items-center flex-wrap max-w-7xl mx-auto ">
      {data?.data?.data.map((service: any) => (
        <Card key={service._id} data={service}></Card>
      ))}
    </div>
  );
};

export default Service;
