"use client";
import { useGetAllQuery } from "@/redux/api/auth/authSlice";
import React from "react";
import UserTable from "./UserTable";

const Page = () => {
  const { data, isError, isLoading } = useGetAllQuery();
  const users = data?.data.filter((user) => user.role === "user");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <UserTable data={users}></UserTable>
    </div>
  );
};

export default Page;
