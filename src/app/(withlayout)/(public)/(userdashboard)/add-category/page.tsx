"use client";
import From from "@/components/Form/Form";
import FormInputs from "@/components/Form/FormInput";
import { usePostCategoryMutation } from "@/redux/api/category/categorySlice";
import { Button, message } from "antd";

import React, { useEffect } from "react";

const CreateCategory = () => {
  const [post, { isLoading, isError, isSuccess, data }] =
    usePostCategoryMutation();
  const submitHandler = async (data: any) => {
    await post(data);
  };
  useEffect(() => {
    if (isSuccess) {
      message.success("Category Posted successfully!");
    }
    if (isError) {
      message.error("Something went wrong!");
    }
  }, [isError, isSuccess, data]);

  return (
    <div className="max-w-[500px] border border-stone-300 h-[300px] p-5 rounded-lg mx-auto">
      <div className="text-2xl font-bold font-serif text-center">
        Add Service Category
      </div>
      <From submitHandler={submitHandler}>
        <FormInputs
          label="TItle"
          name="title"
          type="text"
          placeHolder="title"
          size="large"
        ></FormInputs>
        <div className="my-6 flex justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </From>
    </div>
  );
};

export default CreateCategory;
