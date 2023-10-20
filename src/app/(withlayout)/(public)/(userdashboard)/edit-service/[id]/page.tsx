"use client";
import From from "@/components/Form/Form";
import FormInputs from "@/components/Form/FormInput";
import FormSelector from "@/components/Form/FormSelect";
import FormInputText from "@/components/Form/textarea";
import ImageUploader from "@/components/Image/ImageComponent";
import { useAppSelector } from "@/hooks/redux";
import { useGetCategoryQuery } from "@/redux/api/category/categorySlice";
import {
  useDeleteServiceMutation,
  useGetServiceQuery,
  usePatchServiceMutation,
  usePostServiceMutation,
} from "@/redux/api/service/serviceSlice";
import { Button, Divider, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";

const availbleOptions = [
  {
    value: true,
    label: "Available",
  },
  {
    value: false,
    label: "Discontinued",
  },
];

const publishingOptions = [
  {
    value: true,
    label: "Publish",
  },
  {
    value: false,
    label: "Unpublish",
  },
];
const AddService = ({ params }: { params: { id: string } }) => {
  const { data } = useGetCategoryQuery(undefined);
  const category = data?.data
    ? data.data.map((data: any) => {
        return {
          value: data.title,
          label: data.title,
        };
      })
    : undefined;
  const { data: sdata }: any = useGetServiceQuery(params.id);

  const [post, { isError, isLoading, isSuccess }] = usePatchServiceMutation();

  const submitHandler = (params: any) => {
    const priceTonumber = Number(params.price);
    params.price = priceTonumber;
    if (params.image !== sdata.image) {
      const fromData = new FormData();
      fromData.append("image", params.image);
      fetch(
        "https://api.imgbb.com/1/upload?key=d700aa3754b0d575e642546c26e82c11",
        {
          method: "POST",
          body: fromData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          params.image = data.data.url;
          const pdata = {
            data: params,
            id: sdata.data._id,
          };
          post(pdata);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const pdata = {
        data: params,
        id: sdata.data._id,
      };
      post(pdata);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Service Updated successfully!");
    }
    if (isError) {
      message.error("Something went wrong!");
    }
  }, [isError, isSuccess, data]);
  return (
    <div>
      <From submitHandler={submitHandler} defaultValue={sdata?.data}>
        <div>
          <h1 className="text-xl font-serif text-center">Add a new service</h1>
        </div>
        <Divider orientation="left">Service Infomation</Divider>
        <div className="flex justify-between w-full">
          <div className="w-[100%] md:w-[50%]">
            <FormInputs
              name={"title"}
              type={"text"}
              size={"large"}
              label={"Title"}
            ></FormInputs>
          </div>
          <div className="w-[100%] md:w-[40%]">
            <FormInputs
              name={"price"}
              type={"number"}
              size={"large"}
              label={"Price"}
            ></FormInputs>
          </div>
        </div>
        <div>
          <Divider orientation="left">Options</Divider>
          <div className="flex justify-between mb-5">
            <div className="w-[100%] md:w-[28%]">
              <FormSelector
                options={availbleOptions}
                name="available"
                label="Service Availability"
                size="large"
                type="boolean"
                placeHolder="Select a Service Availability"
              ></FormSelector>
            </div>
            <div className="w-[100%] md:w-[28%]">
              <FormSelector
                options={publishingOptions}
                name="publish"
                label="Publishing status"
                size="large"
                type="boolean"
                placeHolder="Select publishing status"
              ></FormSelector>
            </div>
            <div className="w-[100%] md:w-[28%]">
              <FormSelector
                options={category}
                name="category"
                label="Category"
                size="large"
                placeHolder="Select category"
              ></FormSelector>
            </div>
          </div>
        </div>
        <div>
          <ImageUploader name="image"></ImageUploader>
        </div>
        <div className="my-6">
          <FormInputText
            name="description"
            size="large"
            placeHolder="Description"
            label="Description"
          ></FormInputText>
        </div>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </From>
    </div>
  );
};

export default AddService;
