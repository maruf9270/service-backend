"use client";
import * as youp from "yup";
import FormDateInputs from "@/components/Form/DatePicker";
import From from "@/components/Form/Form";
import FormSelector from "@/components/Form/FormSelect";
import DescrioptionRe from "@/components/ui/Descripton";
import { useAppSelector } from "@/hooks/redux";
import {
  useBookMutation,
  useGetSlotsQuery,
} from "@/redux/api/appointment/apointmentSlice";
import { useGetServiceQuery } from "@/redux/api/service/serviceSlice";
import { Badge, Button, message, type DescriptionsProps } from "antd";
import { SetStateAction, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const Book = ({ params }: { params: { id: string } }) => {
  const user = useAppSelector((state) => state.user);
  const date = Date.now();
  const exactDate = new Date(date).toString();
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Name",
      children: `${user?.user?.name.firstName} ${user?.user?.name?.middleName} ${user?.user?.name?.LastName}`,
    },
    {
      key: "2",
      label: "Billing Mode",
      children: "Pay on Arrival",
    },
    {
      key: "3",
      label: "Email",
      children: `${user?.user?.email}`,
    },
    {
      key: "4",
      label: "Phone Number",
      children: `${user?.user?.phone}`,
    },
  ];
  // fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
  const [q, setQ] = useState(undefined);
  const { data: slotsdata } = useGetSlotsQuery(q);
  const { data } = useGetServiceQuery(params.id);
  const HandleOnChnge = (date: any) => {
    const qd = {
      serviceId: data?.data?._id,
      date: date,
    };
    setQ(qd as unknown as SetStateAction<undefined>);
  };

  const options = slotsdata?.data
    ? slotsdata.data.map((slot: any) => {
        return { value: slot, ["label"]: slot };
      })
    : "";
  //   kljlrjekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

  const status = data?.data?.available ? (
    <span className="text-green-600">Availabe</span>
  ) : (
    <span className="text-red-500">Unavailabe</span>
  );

  const items1: DescriptionsProps["items"] = [
    {
      key: "6",
      label: "Service Name",
      children: `${data?.data.title}`,
      span: 3,
    },
    {
      key: "2f",
      label: "Status",
      children: status,
    },
    {
      key: "3f",
      label: "price",
      children: `${data?.data?.price}`,
    },
    {
      key: "4f",
      label: "Phone Number",
      children: `${user?.user?.phone}`,
    },
    {
      key: "5f",
      label: "Order Time",
      span: 2,
      children: "exactDate",
    },
    {
      key: "5fff",
      label: "Order Time",

      children: (
        <FormDateInputs name="date" onChange={HandleOnChnge}></FormDateInputs>
      ),
    },

    {
      key: "Choose Time slots",
      label: "Choose time",
      children: (
        <div style={{ width: "30%" }}>
          <FormSelector
            name="slot"
            options={options}
            placeHolder="Choose time Slot"
          ></FormSelector>
        </div>
      ),
    },
  ];

  // jlrkofkorek
  const signUpSchema = youp.object().shape({
    date: youp.string().required("Select a date"),
    slot: youp.string().required("select a slot"),
  });

  const [post, { isError, isLoading, isSuccess }] = useBookMutation();
  const handlesubmit = (datass) => {
    const bkdata = {
      ...datass,
      serviceId: data?.data?._id,
    };
    post(bkdata);
  };
  useEffect(() => {
    if (isSuccess) {
      message.success("Booked Successfully");
    }
    if (isError) {
      message.error("Booked Error");
    }
    if (isLoading) {
      message.loading("Booked Loading");
    }
  }, [isError, isSuccess, isLoading]);
  return (
    <div>
      <From submitHandler={handlesubmit} resolver={yupResolver(signUpSchema)}>
        <div>
          <DescrioptionRe
            props={items}
            title="User Information"
          ></DescrioptionRe>
        </div>
        <div className="mt-5">
          <DescrioptionRe
            props={items1}
            title="Booking Infromation"
          ></DescrioptionRe>
        </div>
        <div className="mt-5 flex justify-end">
          <Button type="primary" size="large" htmlType="submit">
            Submit
          </Button>
        </div>
      </From>
    </div>
  );
};

export default Book;
