"use client";
import From from "@/components/Form/Form";
import FormInputs from "@/components/Form/FormInput";
import FormSelector from "@/components/Form/FormSelect";
import FormInputText from "@/components/Form/textarea";
import ImageUploader from "@/components/Image/ImageComponent";
import { useAppSelector } from "@/hooks/redux";
import { useGetCategoryQuery } from "@/redux/api/category/categorySlice";
import { usePostServiceMutation } from "@/redux/api/service/serviceSlice";
import { Button, message } from "antd";
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
const AddService = () => {
  const { data } = useGetCategoryQuery(undefined);
  const category = data?.data
    ? data.data.map((data: any) => {
        return {
          value: data._id,
          label: data.title,
        };
      })
    : undefined;
  const [post, { isError, isLoading, isSuccess }] = usePostServiceMutation();

  const submitHandler = (params: any) => {
    const priceTonumber = Number(params.price);
    params.price = priceTonumber;

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

        post(params);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Service Posted successfully!");
    }
    if (isError) {
      message.error("Something went wrong!");
    }
  }, [isError, isSuccess, data]);
  return (
    <div>
      <h2>For adding new services</h2>
      <From submitHandler={submitHandler}>
        <div>
          <FormInputs
            name={"title"}
            type={"text"}
            size={"large"}
            label={"Title"}
          ></FormInputs>
        </div>
        <div>
          <FormInputs
            name={"price"}
            type={"number"}
            size={"large"}
            label={"Price"}
          ></FormInputs>
        </div>
        <div>
          <FormSelector
            options={availbleOptions}
            name="available"
            label="Service Availability"
            size="large"
            type="boolean"
            placeHolder="Select a Service Availability"
          ></FormSelector>
        </div>
        <div>
          <FormSelector
            options={publishingOptions}
            name="publish"
            label="Publishing status"
            size="large"
            type="boolean"
            placeHolder="Select publishing status"
          ></FormSelector>
        </div>
        <div>
          <FormSelector
            options={category}
            name="category"
            label="Category"
            size="large"
            placeHolder="Select category"
          ></FormSelector>
        </div>
        <div>
          <ImageUploader name="image"></ImageUploader>
        </div>
        <div>
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
