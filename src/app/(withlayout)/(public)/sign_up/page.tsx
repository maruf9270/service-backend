"use client";
import From from "@/components/Form/Form";
import FormInputs from "@/components/Form/FormInput";
import ImageUploader from "@/components/Image/ImageComponent";
import { useAppDispatch } from "@/hooks/redux";
import { useUserLoginMutation } from "@/redux/api/auth/authSlice";
import { signUpSchema } from "@/schemas/signUpSchema";
import { UserOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Divider, message } from "antd";
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
    <div className="max-w-7xl mx-auto">
      <From submitHandler={submitHandler} resolver={yupResolver(signUpSchema)}>
        <Divider orientation="left">
          <UserOutlined /> Personal Information
        </Divider>
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="w-full md:w-[30%]">
              <FormInputs
                name="name.firstName"
                label="First Name"
                size="large"
              ></FormInputs>
            </div>
            <div className="w-full md:w-[30%]">
              <FormInputs
                name="name.middleName"
                label="Middle Name"
                size="large"
              ></FormInputs>
            </div>
            <div className="w-full md:w-[30%]">
              <FormInputs
                name="name.lastName"
                label="Last Name"
                size="large"
              ></FormInputs>
            </div>
          </div>
          <div className="my-5">
            <ImageUploader name="profileImage"></ImageUploader>
          </div>
          <Divider orientation="left">Contant Informaing</Divider>
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <div className="w-full md:w-[30%] flex-nowrap">
                <FormInputs
                  name="email"
                  label="Email"
                  size="large"
                ></FormInputs>
              </div>
              <div className="w-full md:w-[30%]">
                <FormInputs
                  name="phone"
                  label="Phone Number"
                  size="large"
                ></FormInputs>
              </div>
              <div className="w-full md:w-[30%]">
                <FormInputs
                  name="password"
                  label="Password"
                  size="large"
                  type="password"
                ></FormInputs>
              </div>
            </div>
            <div className="w-full md:w-[30%]">
              <FormInputs
                name="address"
                label="Address"
                size="large"
              ></FormInputs>
            </div>
          </div>
          <div className="flex justify-start my-10">
            <Button type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </div>
        </div>
      </From>
    </div>
  );
};

export default Page;
