"use client";
import { useGetfaqsQuery } from "@/redux/api/faq/faqslice";
import { Collapse, Spin } from "antd";
import React from "react";

const Faqs = () => {
  const { data, isLoading } = useGetfaqsQuery(undefined);
  console.log(data);
  if (isLoading) {
    return (
      <div className="min-h-[100vh] flex justify-center items-center">
        <Spin size="large">
          <div className="content" />
        </Spin>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <Collapse
        size="large"
        items={data.data.map((i: any) => ({
          key: i._id,
          label: i.title,
          children: <p>{i.description}</p>,
        }))}
      />
    </div>
  );
};

export default Faqs;
