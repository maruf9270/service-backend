import DescrioptionRe from "@/components/ui/Descripton";
import React, { useState } from "react";
import { Badge, type DescriptionsProps } from "antd";
import { useAppSelector } from "@/hooks/redux";

const Booking = () => {
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Name",
      children: `77`,
    },
    {
      key: "2",
      label: "Billing Mode",
      children: "Prepaid",
    },
    {
      key: "3",
      label: "Automatic Renewal",
      children: "YES",
    },
    {
      key: "4",
      label: "Order time",
      children: "2018-04-24 18:00:00",
    },
    {
      key: "5",
      label: "Usage Time",
      span: 2,
      children: "2019-04-24 18:00:00",
    },
    {
      key: "6",
      label: "Status",
      span: 3,
      children: <Badge status="processing" text="Running" />,
    },
    {
      key: "7",
      label: "Negotiated Amount",
      children: "$80.00",
    },
    {
      key: "8",
      label: "Discount",
      children: "$20.00",
    },
    {
      key: "9",
      label: "Official Receipts",
      children: "$60.00",
    },
    {
      key: "10",
      label: "Config Info",
      children: (
        <>
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
          <br />
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>Booking page</h1>
      <DescrioptionRe props={items}></DescrioptionRe>
    </div>
  );
};

export default Booking;
