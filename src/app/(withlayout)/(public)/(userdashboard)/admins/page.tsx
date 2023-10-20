"use client";
import { useGetAllQuery } from "@/redux/api/auth/authSlice";
import React from "react";
import UserTable from "../users/UserTable";
import { IAuth } from "@/schemas/comment";

const Page = () => {
  const { data, isError, isLoading } = useGetAllQuery();
  const users = data?.data.filter((user: IAuth) => user.role === "admin");
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
