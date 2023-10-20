"use client";
import { useAppSelector } from "@/hooks/redux";
import { Badge, Button, Descriptions, Divider } from "antd";
import Image from "next/image";
import React from "react";
import type { DescriptionsProps } from "antd";
import Link from "next/link";

const Page = () => {
  const user = useAppSelector((state) => state.user);
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "First Name",
      children: `${user.user.name.firstName}`,
    },
    {
      key: "2",
      label: "Middle Name",
      children: `${user.user.name.middleName}`,
    },
    {
      key: "3",
      label: "Last Name",
      children: `${user.user.name.lastName}`,
    },
    {
      key: "4",
      label: "Phone",
      children: `${user.user.phone}`,
    },
    {
      key: "5",
      label: "Email",
      children: `${user.user.email}`,
      span: 2,
    },

    {
      key: "10",
      label: "Address",
      children: <>{user.user.address}</>,
    },
  ];
  return (
    <div>
      <div className="min-h-screen  w-full">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-[40%]  mt-6">
            <Image
              src={user.user.profileImage}
              className="max-w-sm rounded-lg shadow-2xl"
              height={400}
              width={500}
              alt="Provident profile"
            />
          </div>
          <div className="w-full md:w-[50%] p-5">
            <h1 className="text-5xl font-bold">
              {user?.user.name?.firstName} {user?.user.name?.middleName}
              {""} {user?.user.name?.lastName}
            </h1>
            <div>
              <Divider orientation="left">About</Divider>
              <Descriptions items={items} size="small"></Descriptions>
            </div>

            <Link href={"/update-profile"}>
              <Button type="primary">Edit Profile</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
