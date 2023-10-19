"use client";
import TableRe from "@/components/ui/TableRe";
import { useGetBookQuery } from "@/redux/api/appointment/apointmentSlice";
import React from "react";

const Page = () => {
  const { data, isError, isLoading } = useGetBookQuery(undefined);

  if (isLoading) {
    return <div>Loag=ding...</div>;
  }
  return (
    <div>
      <TableRe data={data?.data}></TableRe>
    </div>
  );
};

export default Page;
