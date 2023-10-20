"use client";
import From from "@/components/Form/Form";
import FormInputs from "@/components/Form/FormInput";
import FormInputText from "@/components/Form/textarea";
import ImageUploader from "@/components/Image/ImageComponent";
import { usePostCategoryMutation } from "@/redux/api/category/categorySlice";
import {
  usePostBlogMutation,
  usePostfaqMutation,
} from "@/redux/api/faq/faqslice";
import { blogSchema } from "@/schemas/loginsSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";

import React, { useEffect } from "react";

const Createblog = () => {
  const [post, { isLoading, isError, isSuccess, data }] = usePostBlogMutation();
  const submitHandler = async (params: any) => {
    params.image = "https://i.ibb.co/RQfhmtj/Blog-pic-1030x584.png";

    post(params);
  };
  useEffect(() => {
    if (isSuccess) {
      message.success("FAQ Posted successfully!");
    }
    if (isError) {
      message.error("Something went wrong!");
    }
  }, [isError, isSuccess, data]);

  return (
    <div className="max-w-[500px] border border-stone-300 h-[450px] p-5 rounded-lg mx-auto">
      <div className="text-2xl font-bold font-serif text-center">
        Create Blog
      </div>
      <From submitHandler={submitHandler} resolver={yupResolver(blogSchema)}>
        <FormInputs
          label="TItle"
          name="title"
          type="text"
          placeHolder="title"
          size="large"
        ></FormInputs>
        <div className="my-5">
          <FormInputText
            name="description"
            placeHolder="Description"
          ></FormInputText>
        </div>
        <div className="my-5">
          <ImageUploader name="image"></ImageUploader>
        </div>
        <div className="my-6 flex justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </From>
    </div>
  );
};

export default Createblog;
