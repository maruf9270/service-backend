"use client";
import From from "@/components/Form/Form";
import FormInputs from "@/components/Form/FormInput";
import ImageUploader from "@/components/Image/ImageComponent";
import { useAppDispatch } from "@/hooks/redux";
import { useUserLoginMutation } from "@/redux/api/auth/authSlice";
import { signUpSchema } from "@/schemas/signUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, message } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const Page = () => {
  const dispatch = useAppDispatch();

  const [signup, { isLoading, isError, isSuccess, data, error }] =
    useUserLoginMutation();
  const router = useRouter();
  useEffect(() => {
    if (isLoading) {
      message.loading("Registering");
    }
    if (isSuccess) {
      message.success("Registered");
      router.push("/login");
    }
    if (isError) {
      message.error("Error");
      console.error(error);
    }
  }, [isError, isSuccess, isError]);
  const submitHandler = (params: any) => {
    const imageData = params?.profileImage;
    const fromData = new FormData();
    fromData.append("image", imageData);

    fetch(
      "https://api.imgbb.com/1/upload?key=d700aa3754b0d575e642546c26e82c11",
      {
        method: "POST",
        body: fromData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        params.profileImage = data.data.url;
        params.role = "user";
        signup(params);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <From submitHandler={submitHandler} resolver={yupResolver(signUpSchema)}>
        <div>
          <FormInputs
            name="name.firstName"
            label="First Name"
            type="text"
            size="large"
          ></FormInputs>
          <FormInputs
            name="name.middleName"
            label="Middle Name"
            type="text"
            size="large"
          ></FormInputs>
          <FormInputs
            name="name.lastName"
            label="Last Name"
            type="text"
            size="large"
          ></FormInputs>
        </div>
        <div>
          <FormInputs
            name="email"
            label="Email"
            type="email"
            size="large"
          ></FormInputs>
          <FormInputs
            name="password"
            label="Password"
            type="password"
            size="large"
          ></FormInputs>
          <FormInputs
            name="phone"
            label="Phone"
            type="text"
            size="large"
          ></FormInputs>
          <FormInputs
            name="address"
            label="address"
            type="text"
            size="large"
          ></FormInputs>
        </div>
        <div>
          <ImageUploader name="profileImage"></ImageUploader>
        </div>

        <div>
          <Button htmlType="submit" type="primary">
            Sign Up
          </Button>
        </div>
      </From>
    </div>
  );
};

export default Page;
